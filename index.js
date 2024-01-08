const express = require('express')
const app = express();
const port = 3000;


app.get('/main', (req, res) => {
    res.json()
})


app.listen(port, ()  =>{
    console.log(`Listening on port ${port}`)
    
})