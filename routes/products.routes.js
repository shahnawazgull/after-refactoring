import express from 'express';
import uploads from '../multer/products.multer.js';
import { deleteProduct, getEditPage, getHomePage, getProductPage, postEditPage, postProductPage } from '../controller/products.controller.js';
const router = express.Router();
router.get('/',getHomePage)
router.get('/add-product',getProductPage)
router.post('/add-product', uploads.single('image') ,postProductPage)

router.get('/edit-product/:id',getEditPage)
router.post('/edit-product/:id',uploads.single('image'),postEditPage)
router.get('/delete-product/:id',deleteProduct)

export default router