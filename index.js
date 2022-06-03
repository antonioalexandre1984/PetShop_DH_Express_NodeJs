const express = require('express');
const app = express();
const homeRouter = require('./src/routes/home');
const servicesRouter = require('./src/routes/services');
const petsRouter = require('./src/routes/pets');


app.use(express.static('SRC/public'));
app.set('view engine', 'ejs');
app.set('views','SRC/views');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(homeRouter)
app.use(petsRouter)
app.use(servicesRouter)



app.listen(3000,()=>console.log('Server started .....🏆'))

