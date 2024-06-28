import express from 'express';
import formRouter from '../modules/forms/routes/forms.routes.js'

const router = express.Router();

router.use('/forms', formRouter);

export default router;