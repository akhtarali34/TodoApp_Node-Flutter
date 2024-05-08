const mongoose = require ("mongoose");

const connection = mongoose.createConnection("mongodb://127.0.0.1:27017/TodoApp").on('open', ()=>{
    console.log("mongodb connected");
}).on('error', ()=>{
    console.log("error in connection")
});


module.exports = connection;