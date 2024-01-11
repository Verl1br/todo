const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRouter = require('./todoRouter');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/todo', todoRouter);

const start = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://qwerty:qwerty123@cluster0.zbpdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
        );
        app.listen(PORT, () => console.log(`The server was running on the port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start();
