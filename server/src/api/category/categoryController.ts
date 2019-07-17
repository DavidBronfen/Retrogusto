import * as _ from "lodash";
import { NextFunction, Request, Response } from "express";

import { ICategoryModel, Category } from "./categoryModel";

export interface ICategory extends Request {
    category: ICategoryModel;
}

export interface ICategories extends Request {
    categories: ICategoryModel[];
}

/**
 * GET category/:id
 * A middleware that find a category by id and attach it to the request.
 */
export const params = async (req: ICategory, res: Response, next: NextFunction, id: string) => {
    try {
        const categoryItem = await Category.findById(id);
        if (!categoryItem) {
            res.status(404).json({
                _message: `No category item with that id: ${id}`,
                category: categoryItem,
            });
        } else {
            req.category = categoryItem;
            next();
        }
    } catch (err) {
        res.status(404).json({
            _message: `No category item with that id: ${id}`,
            category: undefined,
        });
    }
};

/**
 * GET /category
 * Get all categories.
 */
export const getAll = async (req: ICategories, res: Response, next: NextFunction) => {
    try {
        const categories = await Category.find({});
        res.json({
            _message: "Categories fetched successfully.",
            categories
        });
    } catch (err) {
        res.status(404).json({
            _message: `No categories`,
            category: undefined,
        });
        next(err);
    }
};

/**
 * GET /category/:id
 * Return a specific category.
 */
export const getOne = (req: ICategory, res: Response) => {
  res.json({
    _message: "Category fetched successfully.",
    category: req.category,
  });
};

/**
 * POST /category
 * Create new category.
 */
export const createNew = async (req: Request, res: Response) => {
    const newCategory = new Category(req.body);
    const savedCategory = await newCategory.save();

    res.json({
        _message: "New category successfully created.",
        category: savedCategory
    });
};

/**
 * PUT /category
 * Update category info and return the new category.
 */
export const editFields = async (req: ICategory, res: Response) => {
    const category = req.category;
    const update = req.body;

    if (req.body._id && req.body._id !== req.category._id) {
        res.status(400);
        return res.json({
          _message: "Category can not updated! id is not matched.",
          category: undefined,
        });
    }

    _.merge(category, update);
    const savedCategory = await category.save();

    res.json({
        _message: "Category successfully updated.",
        category: savedCategory
    });
};

/**
 * DELETE /category/:id
 * Delete category by given id.
 */
export const deleteOne = async (req: ICategory, res: Response) => {
    const deletedCategory = await req.category.remove();
    res.json({
        _message: "Category successfully deleted.",
        category: deletedCategory
    });
};
