const mongoose = require("mongoose");

const DB = "mongodb+srv://mayarasilvasenac:drH1sagyjXtzAfDa@provafinal.wou510j.mongodb.net/prova?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("connect start")).catch((error) => console.log(error.message));