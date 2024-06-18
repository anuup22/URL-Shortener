import express from 'express';
import { getAllUrls } from '../controllers/url.controller.js';
const router = express.Router();

router.get('/', getAllUrls);

export default router;