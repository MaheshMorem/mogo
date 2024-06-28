export const errorHandler = (error) => {
   if (error.errors && error.name === 'ValidationError') {
     const errors = Object.values(error.errors).map((err) => err.message);
     return errors;
   } else {
     return ['Internal server error'];
   }
 };