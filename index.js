import express from 'express';
import 'dotenv/config';
import urlRoute from './routes/url.route.js';
import staticRoute from './routes/static.route.js';
import dbConnect from './DB/dbConnect.js';
import { redirect } from './controllers/url.controller.js';

dbConnect();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', staticRoute);
app.use('/url', urlRoute);
app.get('/url/:shortId', redirect);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});