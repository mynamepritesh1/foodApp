import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import asynceHandler from 'express-async-handler'
import { FoodsModel } from "../models/food.models";

const router = Router();

router.get("/seed", asynceHandler(
    async (req, res) => {
        const foodsCount = await FoodsModel.countDocuments();
        if (foodsCount > 0) {
            res.send("Seed is already done!")
            return;
        }
        await FoodsModel.create(sample_foods);
        res.send("Seed is Done");

    }
))

router.get("/", asynceHandler(async (req, res) => {
    const foods = await FoodsModel.find();
    res.send(foods);
}
));


router.get("/search/:searchTerm", asynceHandler(async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const foods = await FoodsModel.find({ name: { $regex: searchRegex }})
    res.send(foods);
}))


router.get("/tags", asynceHandler(
    async (req, res) => {
    const tags = await FoodsModel.aggregate([
        {
            $unwind: '$tags'
        },
        {
            $group: {
                _id: '$tags',
                count: { $sum: 1 }
            }
        },
        {
            $project:{
                _id: 0,
                name:'$_id',
                count: '$count'
            }
        }
    ]).sort({count: -1});

    const all = {
        name: 'All',
        count: await FoodsModel.countDocuments()
    }
    tags.unshift(all);
    res.send(tags);
}))


router.get("/tags/:tagName", asynceHandler(
    async(req, res) => {
    const foods = await FoodsModel.find({tags: req.params.tagName})
    res.send(foods);
}))


router.get("/:foodId",asynceHandler(async (req, res) => {
    const food = await FoodsModel.findById(req.params.foodId)
   
    res.send(food);
}))

export default router;