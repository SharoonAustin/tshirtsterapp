const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const WomenProductSchema=new Schema({
    image:{
        type:String,
        required:true
    },
    productname:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
     size:{
        type:[String],
        required:true
     },
     Small:{
         type:Number,
         required:true
     },
     Medium:{
        type:Number,
        required:true
     },
     Large:{
         type:Number,
         required:true
     },
    isSold:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("WomenProducts",WomenProductSchema)