
require('dotenv').config();
const express  = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/db');


app.use(cors());
const PORT = process.env.PORT || 5000;
// importing model from models folder to create a new ngo entry on post method.
const NgoInfo = require('./models/ngo.info')
// to allow data to not be undefined
app.use(express.json());



// middleware
app.use(express.urlencoded({extended:false}));
app.use('/api/ngo', require('./routes/ngoRoutes'));
app.use('/api/donor', require('./routes/donorRoutes'));


app.listen(PORT,()=>{
    console.log('hello world');
})

app.get('/', (req,res)=>{
    res.send('hello from node api!')
})

connectDB();


