import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import menuRoutes from './routes/menu.js';

const app = express();
const URI = 'mongodb+srv://vphuong712:gtlp560j@cluster0.7nl7hqc.mongodb.net/foodMenu?retryWrites=true&w=majority'

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(menuRoutes);

app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING!');
});

mongoose.connect(URI)
    .then(() => {
        console.log('CONNECTED!');
        app.listen(8080);
    })
    .catch(err => console.log(err));
