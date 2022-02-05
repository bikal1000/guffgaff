const express = require('express');
const dotenv = require('dotenv');
const chats = require('./data/data');
const connectDB = require('./config/db');
const colors = require("colors");
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


// instance of express variable
const app = express();

// accept JSON Data
app.use(express.json());

dotenv.config();

// connect to database
connectDB();

app.get('/', (req, res) => {
    res.send('This is test');
})

app.use('/api/user', userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started at port ${PORT}`.yellow.bold))