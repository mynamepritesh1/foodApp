import { model, Schema, } from "mongoose";

export interface Foods{
    id: string;
    name: string;
    price: number;
    tags: string[];
    favorite: boolean;
    star: number;
    imageUrl: string;
    cookTime: string;
    origins: string[];
}

export const FoodSchema = new Schema<Foods>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        favorite: {type: Boolean, required:true},
        star: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        origins: {type: [String], required:true},
        cookTime: {type: String, required:true},

    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
        virtuals: true
        },
        timestamps:true
    }
);
 export const FoodsModel = model<Foods>('foods' , FoodSchema);
 