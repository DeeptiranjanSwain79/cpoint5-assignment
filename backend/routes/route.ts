import { Router } from "express";
import { createGroceryItem, getAllGroceryItems } from "../controllers/controller";

const router = Router();

router.route('/create').post(createGroceryItem);

router.route('/get').get(getAllGroceryItems);

export default router;