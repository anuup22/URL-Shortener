import express from 'express';
import { getAllUrls } from '../controllers/url.controller.js';
const router = express.Router();

router.get('/', getAllUrls);

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

export default router;