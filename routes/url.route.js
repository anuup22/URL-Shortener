import express from 'express';
import {
    createShortUrl,
    getAnalytics
} from '../controllers/url.controller.js';

const router = express.Router();

router.post('/', createShortUrl);
router.get('/analytics/:shortId', getAnalytics);

export default router;