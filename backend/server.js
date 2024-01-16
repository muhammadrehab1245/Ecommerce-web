
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
connectToMongo();
const app = express()
app.use(cors())
app.use(express.json()) // used for json objects
const port = 5000


app.use('/e-com/user', require('./route/user'));

// Using the '/foodapp/items' route for item-related endpoints
//app.use('/foodapp/items', require('./route/itementry'));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

