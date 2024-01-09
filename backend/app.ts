import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes/route";

export const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'https://cpoint5-assignment.netlify.app'],
    credentials: true,
}))

app.get('/', (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).send('API is working fine');
});

app.use('/api/v1/', router);

app.all('*', (req: Request, res: Response, next: NextFunction): void => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`
    })
})
