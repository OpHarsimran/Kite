require('dotenv').config();

const {holdings, positions} = require('./initData/data');

const {HoldingsModel} = require('./Models/HoldingsModel')
const {PositionsModel} = require('./Models/PositionsModel')

const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

//dummy data from initData
// app.get('/holdingsData',async (req,res)=>{
//     for(data of holdings){
//         let holding = new HoldingsModel(data);
//         await holding.save();
//     }
// })

// app.get('/positionsData',async (req,res)=>{
//     for(data of positions){
//         let position = new PositionsModel(data);
//         await position.save();
//     }
// })

app.get('/allHoldings',async (req,res)=>{
    const holding = await HoldingsModel.find({});
    res.json(holding);
});

app.get('/allPositions',async (req,res)=>{
    const postion = await PositionsModel.find({});
    res.json(postion);
});


app.listen(port,()=>{
    console.log("Server is running on port 3002");
    mongoose.connect(url);
    console.log("database connected")
})