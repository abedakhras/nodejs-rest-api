const mongoose = require('mongoose');

module.exports = async() => {
    try {
        console.log("=============================================")
        console.log(process.env.DB_URL)
        console.log("=============================================")
        await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
        // await mongoose.connect("mongodb://mongodb:27017/apiDb", { useNewUrlParser: true });
        console.log('Database Connected');
    } catch (error) {
        console.log('Database Connectivity Error', error);
        throw new Error(error);
    }
}