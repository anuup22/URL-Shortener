import express from 'express';
import Url from '../models/url.model.js';
import { restrictTo } from '../middlewares/auth.middleware.js';
const router = express.Router();

router.get('/admin/urls', restrictTo(["ADMIN"]), async (req, res) => {
    const allUrls = await Url.find({ });
    return res.render('home', { urls: allUrls });
});
router.get('/', restrictTo(["NORMAL", "ADMIN"]), async (req, res) => {
    const allUrls = await Url.find({ user: req.user._id });
    return res.render('home', { urls: allUrls });
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    res.render('login');
});

export default router;