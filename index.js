const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cntrl=require('./controller/Controller.js')
app.use(express.json());
app.get("/getTodo",cntrl.getTodo);
app.post("/createTodo",cntrl.createTodo);
app.patch("/:id",cntrl.updateTodo);
app.delete("/:id",cntrl.deleteTodo);
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database");
    app.listen(process.env.PORT,()=>{
        console.log("listening on port number",process.env.PORT);
    })
}).catch(error=>{
    console.log(error);
})