import { Document, model, Schema } from "mongoose";

export interface ICategoryModel extends Document {
    _id: string;
    name_he: string;
    name_en: string;
    image_path: string;
}

const schema = new Schema({
    name_he: {
        type: String,
        required: true,
    },
    name_en: {
        type: String,
        required: true,
    },
    image_path: {
        type: String,
        required: true,
    },
});

export const Category = model<ICategoryModel>("category", schema, "categories", true);

export class CategoryModel {

    private categoryModel: ICategoryModel;

    constructor(categoryModel: ICategoryModel) {
        this.categoryModel = categoryModel;
    }
}
