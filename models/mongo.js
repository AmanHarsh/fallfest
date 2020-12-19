var mongoose=require("mongoose")
const URI="mongodb+srv://infinitysworst:ganda@cluster0.d7vbn.mongodb.net/test?retryWrites=true&w=majority"
const ConnectDB= async ()=> {
    await mongoose.connect(URI, {
        useUnifiedTopology: true ,
        useNewUrlParser: true 

    })
    console.log("mongoose working")
}

module.exports = ConnectDB;
