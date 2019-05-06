const express = require("express");
const categories = require('../src/routers/categories');
const movie = require('../src/routers/movie');
const movcat = require('../src/routers/movecat');


const app = express()
const port = 2077

app.use(express.json())
app.use(categories)
app.use(movie)
app.use(movcat)

app.listen(port, () => {
    console.log('running at port ' + port);
    
})