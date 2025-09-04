const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('MongoDB connected Successfully!')
    }).catch((error)=>{
        console.log('Error while connecting MongoDB : ', error)
    })
}

module.exports = connectDB