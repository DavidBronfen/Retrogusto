import { Document, model, Schema } from "mongoose";

export interface IUserModel extends Document {
    _id: string;
    first_name: string;
    last_name: string;
    user_name: string;
    email: string;
    token: string;
    password?: string;
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
    token: {
      type: String,
      required: true
    },
    password: {
        type: String,
    },
});

export const User = model<IUserModel>("user", schema, "users", true);

export class UserModel {

    private userModel: IUserModel;

    constructor(userModel: IUserModel) {
        this.userModel = userModel;
    }
}
