import FormData from '../models/register.model.js';
import { errorHandler } from '../../core/error.handler.js'

export const registerRequest = async (req, res) => {
   try {
      const { name, email, phone, company, message } = req.body;

      const formData = new FormData({
         name,
         email,
         phone,
         company,
         message
      });

      await formData.save();

      res.status(201).json({ message: 'Form data created successfully', formData });
   } catch (error) {

      const errors = errorHandler(error);
      res.status(500).json({ error: errors });
   }
};

export const getRequest = async (req, res) => {
   try {

      const formDataList = await FormData.find();
      res.status(200).json(formDataList);
   } catch (error) {

      const errors = errorHandler(error);
      res.status(500).json({ error: errors });
   }
};