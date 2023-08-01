const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String
    },
    // imageBlob:{
    //     type:Buffer
    // },
    ShortDescription:{
        type:String
    },
    LongDescription:{
        type:String
    },
    Specification1:{
        type:String
    },
    Specification2:{
        type:String
    },
    Specification3:{
        type:String
    },
    Specification4:{
        type:String
    },
    Specification5:{
        type:String
    },
    Value1:{
        type:String
    },
    Value2:{
        type:String
    },
    Value3:{
        type:String
    },
    Value4:{
        type:String
    },
    Value5:{
        type:String
    },
    productType:{
        type:String
    },
    IsShow:{
        type:Boolean,
        default:false,
    },
    createDate:{
        type:Date,
        default:Date.now()
    },
    Active:{
        type:Boolean,
        default:true,
    },
})

module.exports = mongoose.model('star',productsSchema);