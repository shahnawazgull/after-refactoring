import { validationResult } from "express-validator";
import SNKProducts from "../models/products.model.js";

export const getHomePage = async (req, res) => {
    const products = await SNKProducts.find();
    res.render('index', { products })
}

export const getProductPage = (req, res) => {
    res.render('addProduct',{vr:[]})
}
export const postProductPage = async (req, res) => {
    const validation = validationResult(req);
    try {
        if(validation.isEmpty()){
            await SNKProducts.create({
            product_name: req.body.product_name,
            category: req.body.product_cat,
            price: req.body.price,
            quantity: req.body.product_quantity,
            supplier: req.body.supplier_name,
            stock_status: req.body.stock,
            image: req.file ? req.file.filename : null,
            description: req.body.product_desc,
        });
        res.redirect('/')
        }else{
            res.render('addProduct',{vr:validation.array()})
        }
    } catch (e) {
        console.log(e)
        res.render('addProduct')
    }
}

export const getEditPage = async (req, res) => {
    const product = await SNKProducts.findById(req.params.id)
    res.render('editProduct', { p: product,vr:[] })
}
export const postEditPage = async (req, res) => {
    const product = await SNKProducts.findById(req.params.id)
    const validation = validationResult(req)
    try {
        if(validation.isEmpty()){
            const updatedData = {
            product_name: req.body.product_name,
            category: req.body.product_cat,
            price: req.body.price,
            quantity: req.body.product_quantity,
            supplier: req.body.supplier_name,
            stock_status: req.body.stock,
            description: req.body.product_desc,
        }
        if (product) {
            if (req.file) {
                updatedData.image = req.file.filename;
            }
            await SNKProducts.findByIdAndUpdate(req.params.id, updatedData);
            res.redirect('/')
        }
        }else{
            res.render('editProduct',{vr:validation.array(),p:product})
        }
    } catch (e) {
        console.log(e)
        res.render('editProduct', { p: product })
    }
}

export const deleteProduct = async (req, res) => {
    const product = await SNKProducts.findById(req.params.id);
    if (product != null) {
        await SNKProducts.findByIdAndDelete(product);
        res.redirect('/')
    } else {
        console.log('no product found with this id')
    }
}