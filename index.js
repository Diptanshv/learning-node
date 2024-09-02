const express = require("express");
const fs = require("fs");
const {connectMongoDb}= require("./connection");
const userRouter = require("./routes/user");
const {logReqRes} = require("./middlewares/index");

const app = express();
const PORT = 8000;
connectMongoDb('mongodb://127.0.0.1:27017/learning-node-mongo').then(()=>{
    console.log("MongoDb Connected");
});
app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));

app.listen(PORT, ()=>console.log(`Server started at port ${PORT}`));

//Routes
app.use("/api/users",userRouter);