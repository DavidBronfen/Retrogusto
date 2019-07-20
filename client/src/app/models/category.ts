export interface ICategory {
  id: number;
  name_he: string;
  name_en: string;
  image_path: string;
}

export interface ICategoryResponse {
  categories: ICategory[],
  _message: string
}
