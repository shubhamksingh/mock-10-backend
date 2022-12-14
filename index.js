// express server
const express = require('express');
const cors = require('cors');
const emiRoute = require('./emi/emi.js');
// mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


const app = express();
app.use(cors());
const port = process.env.PORT  || 8080;

const userRoute = require('./user/user.route');



// express json               middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// index route
app.use('/user', userRoute);
app.use('/emi', emiRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);


// listen on port
mongoose.connect('mongodb+srv://abcd:1234@cluster0.txw2hah.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch(err => console.log(err));



