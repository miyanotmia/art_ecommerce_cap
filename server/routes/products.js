import express from "express";
import product from  "../models/product.js";

const router= express.Router();

//GET all

router.get("/", async (req,res) => {
    try{
        const products = await product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Error fetching products"});
    }
});

export default router;