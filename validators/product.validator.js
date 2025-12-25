import { body } from "express-validator";

 const formValidation = [
  body("product_name")
    .trim()
    .notEmpty()
    .withMessage("Product name is required"),

  body("product_cat")
    .isIn(["Electronics", "Accessories", "Clothing"])
    .withMessage("Please select a valid product category"),

  body("price")
    .trim()
    .notEmpty()
    .withMessage("Product price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a valid number"),

  body("product_quantity")
    .trim()
    .notEmpty()
    .withMessage("Product quantity is required")
    .isInt({ min: 1 })
    .withMessage("Quantity must be at least 1"),

  body("supplier_name")
    .trim()
    .notEmpty()
    .withMessage("Supplier name is required"),

  body("stock")
    .isIn(["Out of Stock", "In Stock", "Low Stock"])
    .withMessage("Please select a valid stock status"),

  body("product_desc")
    .trim()
    .notEmpty()
    .withMessage("Product description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters long"),

  body("image")
    .optional()
];
export default formValidation