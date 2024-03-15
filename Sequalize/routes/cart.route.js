import express from "express";
import { body } from "express-validator";
import { addToCart, fetchCartItems, getProductFromCartItems, removeFromCart } from "../controller/cart.controller.js";
const router = express.Router();

router.post("/add-to-cart",
    body('userId', 'Invalid user Id').notEmpty().isNumeric(),
    body('productId', 'Invalid product Id').notEmpty().isNumeric(),
    addToCart);

router.get("/listByUserId", fetchCartItems);

router.get("/list/:userId",fetchCartItems);

router.get("/getcart/:userId", getProductFromCartItems);

router.delete("/remove-from-cart/:userId/:productId",removeFromCart);

export default router;