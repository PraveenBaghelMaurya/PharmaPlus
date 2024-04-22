const mongoose = require("mongoose");

const connectDatabase = () =>{

    const dburi = "mongodb://127.0.0.1:27017/MedicalStore"

    mongoose.connect(dburi)
.then((data)=>{
    console.log(`Mongodb connected with server${data.connection.host}`);
})
}

module.exports = connectDatabase;