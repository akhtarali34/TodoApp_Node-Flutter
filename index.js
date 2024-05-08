const app = require("./app");
const db = require("./configs/db");
const userModel = require("./models/usermodel")

const port = 5000;

app.get("/", (req,res)=>{
    res.send("hello world");
});

 app.listen(port, ()=>{
    console.log("app running on port: " + port);
 });
