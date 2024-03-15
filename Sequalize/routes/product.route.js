import express from "express";
import { getProductByCategory, getProductList, saveInBulk } from "../controller/product.controller.js";

const router = express.Router();

router.post("/save-in-bulk", saveInBulk);
router.get("/list", getProductList);
router.get("/byCategory/:categoryName", getProductByCategory);

export default router;