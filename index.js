const express = require('express');
const app = express();
const author = require('./routes/author.route');
const book = require('./routes/book.route');
const db = require('./model');
db.sync()
.then(()=> console.log('db is ready'))
.catch((err) => {
    console.log("Db creakon/access failure: " + err.message);
    });

const port = 3001;

app.use(express.json())

app.use('/api/author', author);
app.use('/api/book/', book);





app.get('/', (req, res)=>{
    
    res.send('server running');
})

app.listen(port, ()=>{
    console.log(`server listening in port ${port}`)
})