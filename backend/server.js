const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const colors = require("colors");
const connectDB = require('./config/db');

// instance of express variable
const app = express();

dotenv.config();

// connect to database
connectDB();

app.get('/', (req, res) => {
    res.send('This is test');
})

app.get('/api/chat', (req, res) => {
    res.send(chats);
})

app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started at port ${PORT}`.yellow.bold))