export default app;
import express from 'express'
import path from 'path';
import * as fs from 'fs';


const app = express();

const port = process.env.PORT || 3000;

app.use('/', function (req,res){
    res.send('Hello World');
});

app.use(function (req, res, next){
    console.log(req.url);
    next();
})
app.listend(port, function (){
    console.log(`Server listening listening onn port ${port}`)
});

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs")
const router = express.Router();
