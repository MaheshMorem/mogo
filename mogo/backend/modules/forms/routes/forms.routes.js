import express from 'express';
import * as forms from '../controllers/form.controller.js'

const formRouter = express.Router();

formRouter.post('/', forms.registerRequest);
formRouter.get('/', forms.getRequest);

export default formRouter;