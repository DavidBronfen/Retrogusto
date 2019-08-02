import { Document, model, Schema } from "mongoose";

export interface IUserModel extends Document {
    _id: string;
    name_he: string;
    name_en: string;
    image_path: string;
}

const schema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    user_name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

export const User = model<IUserModel>("user", schema, "users", true);

export class UserModel {

    private userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this.userModel = userModel;
    }
}