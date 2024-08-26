const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = Schema({
    username:{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    password:String
})

const model = mongoose.model('cropmasterusercollection',userSchema)
module.exports = model;