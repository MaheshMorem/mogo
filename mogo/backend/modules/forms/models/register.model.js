import { Schema, model } from 'mongoose';

const FormSchema = new Schema({
   name: { type: String, required: true, trim: true },
   email: { type: String, required: true, trim: true, lowercase: true },
   phone: { type: String, required: true, trim: true },
   company: { type: String, required: true, trim: true },
   message: { type: String, required: true, trim: true }
}, {
   timestamps: true
});

export default model('FormData', FormSchema, 'form_data');