const mongoose = require("module");


const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGOURL , {
            userNewUrlParser:true,
            userUnifiedTopology:true,
            userFindAndModify:false
        });
        console.log(`Mongo DB connected  ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);

    }
}

module.exports = connectDB;