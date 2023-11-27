import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

import menuRoutes from './routes/menu.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 8000;
const URI = process.env.DATABASE_URL;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/auth', authRoutes);

app.use(userRoutes);

app.use(menuRoutes);


app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING!');
});

mongoose.connect(URI)
    .then(() => {
        console.log('CONNECTED!');
        app.listen(PORT);
    })
    .catch(err => console.log(err));
