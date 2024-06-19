import express from 'express';
import 'dotenv/config';
import dbConnect from './DB/dbConnect.js';
import { redirect } from './controllers/url.controller.js';
import cookieParser from 'cookie-parser';
import { checkForAuthentication, restrictTo } from './middlewares/auth.middleware.js';

import userRoute from './routes/user.route.js';
import urlRoute from './routes/url.route.js';
import staticRoute from './routes/static.route.js';

dbConnect();
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(checkForAuthentication);
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', staticRoute);
app.use('/url', restrictTo(['NORMAL', 'ADMIN']), urlRoute);
app.use('/user', userRoute);

app.get('/url/:shortId', redirect);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});