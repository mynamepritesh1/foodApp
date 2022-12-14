import { model, Schema, Types } from 'mongoose';
import { OrderStatus } from '../constants/order_statis';
import { Foods, FoodSchema } from './food.models';

export interface LatLng {
    lat: string;
    lng: string;
}

export const latlngSchema = new Schema<LatLng>(
    {
        lat: { type: String, required: true },
        lng: { type: String, required: true },

    }
);

export interface OrderItem {
    food: Foods;
    price: number;
    quantity: Number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food: { type: FoodSchema, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },



    }
);

export interface Order{
    id: number;
    items: OrderItem[];
    totalPrice: number;
    name: string;
    address: string;
    addressLatlng:LatLng;
    paymentId:string;
    status:OrderStatus;
    user: Types.ObjectId
    createAt:Date;
    updatedAt: Date;
}

const OrderSchema = new Schema<Order>({

    name: {type: String , required: true},
    address: {type: String , required: true},
    addressLatlng: {type: latlngSchema , required: true},
    paymentId: {type: String},
    totalPrice: {type: Number , required: true},
    items: {type: [OrderItemSchema] , required: true},
    status: {type: String , default: OrderStatus.NEW},
    user:{type:Schema.Types.ObjectId, required: true}
 
},{
    timestamps: true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }


});

export const OrderModel = model('order', OrderSchema);