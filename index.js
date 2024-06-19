import express from 'express';
import 'dotenv/config';
import urlRoute from './routes/url.route.js';
import dbConnect from './DB/dbConnect.js';
import { redirect } from './controllers/url.controller.js';
import cookieParser from 'cookie-parser';
import { restrictToAuthUser, checkAuthUser } from './middlewares/auth.middleware.js';

import userRoute from './routes/user.route.js';
import urlRoute from './routes/url.route.js';
import staticRoute from './routes/static.route.js';

dbConnect();
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use('/url', urlRoute);
app.get('/:shortId', redirect);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});