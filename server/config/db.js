require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async ()=>{
   await mongoose.connect("mongodb+srv://pranalinage20:rgZ1FJWvKsOfeb7K@donationplatform.f6trv.mongodb.net/caritas?retryWrites=true&w=majority&appName=DonationPlatform")
.then(()=>{
    console.log('Connected Successfully!');
})
.catch((error)=>{
    console.log(error);
})
}

module.exports = connectDB;
