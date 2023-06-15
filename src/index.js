const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { auth }  =require('./middlewares/authMiddleware');

const PORT = 3000;

const app = express();

//TODO: change database name
mongoose.connect('mongodb://127.0.0.1:27017/petstagram')
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.log('DB Error: ', err));

//TODO: replace files in views folder with right ones
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

//TODO: replace static files with the right ones
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);



app.listen(PORT, console.log(`Server is lsitening on port ${PORT}...`));