// express server
const express = require('express');
// mongoose
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080
mongoose.set('strictQuery', true);
// express json middleware
app.use(express.json());

// index route
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

// listen on port
mongoose.connect('mongodb+srv://abcd:1234@cluster0.txw2hah.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));



