const path = require('path');

const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes')

const sequelize = require('./util/database');


const app = express();



app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, "\public")));

// console.log(path.join(__dirname, "\public")) to see the path of project so that we can access that public files


app.use('/user', userRoutes);


app.get('/', (req, res) => {
    res.send('this is working')
})

sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });