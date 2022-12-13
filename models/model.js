const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    }
})
module.exports = mongoose.model('Backend_Todo',todoSchema);