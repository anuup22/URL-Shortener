import express from 'express';
import {
    signupUser,
    loginUser
} from '../controllers/user.controller.js';
const router = express.Router();

router.post('/', signupUser);
router.post('/login', loginUser);

export default router;