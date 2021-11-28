import express from "express";
import Mongoose from "mongoose";
//import Cors from 'cors';
import Cors from 'cors';
import Cards from "./dbCards.js";
//App config
const app = express();
const port = /*process.env.PORT ||*/ 8000
const connection_url='mongodb+srv://admin:admin123@cluster0.m5yxv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

//Middleware
app.use(express.json());
app.use(Cors());

//DB config
Mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
 }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
 });
 
//API  Endpoints
app.get('/',(req,res)=> res.status(200).send('hello guys'));

app.post('/tinder/cards',(req,res)=>{
    // async (req, res) => {
    //     const cardss = new Cards({
    //         name: req.body.name,
    //         imgUrl: req.body.imgUrl
    //     })
    //     await cardss.save();
    //     console.log(req.body);
    //     return res.status(201).send(cardss);
    const dbCard = req.body;
     Cards.create(dbCard,(err,data)=>{
         if(err){
             res.status(500).send(err)
         }else{
             res.status(201).send(data)
         }
 })
})

app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
//Listeners
app.listen(port,()=> console.log('listening on local host 8000'));