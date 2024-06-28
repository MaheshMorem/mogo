import express from 'express';
import router from './routes/index.js'
import { config } from './config/local.js'
import cors from 'cors';
import db from './modules/core/mongodb.js'
import colors from 'colors';

const port = config.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
   origin: 'http://localhost:5173'
}));

// initiating routes
app.use('/api', router);

app.listen(port, () => {
   console.log(`-------Server running on port ${port}`.green);
})