import mongoose from 'mongoose';

const connectionString = "mongodb+srv://maheshmorem2399:YVqy2KQQaeh8h7j3@cluster0.ddjmk7q.mongodb.net/c2comms?retryWrites=true&w=majority&appName=Cluster0";

// Replace placeholders with your actual connection string details
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('-------MongoDB connection successful'.green);
});

db.on('error', (err) => {
  console.error('-------MongoDB connection error:'.red, err);
});

export default db;