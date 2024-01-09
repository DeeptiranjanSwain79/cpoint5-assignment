import { Request, Response, NextFunction } from "express";
import { catchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../middleware/Errorhandler";
import prisma from "../prisma/prisma-client";

interface Product {
    name: string;
    description: string;
    category: string;
    price: number;
    quantity: number;
}

export const createGroceryItem = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, description, category, price, quantity } = req.body;

        const groceryItem = await prisma.item.create({
            data: {
                name,
                description,
                category,
                price,
                quantity
            }
        });

        res.status(201).json({
            item: groceryItem
        })
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});

export const getAllGroceryItems = catchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const groceryItems = await prisma.item.findMany();

        res.status(200).json({
            items: groceryItems
        })
    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
});
