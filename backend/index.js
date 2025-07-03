require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { type } = require('os');
const cors = require('cors');

const app = express();  
app.use(express.json())
app.use(cors())
const PORT =3000;
const mongo="mongodb+srv://AlwinDharsanAM:AMAD16052006**@cluster0.tcec1y1.mongodb.net/expenses?retryWrites=true&w=majority&appName=Cluster0"
const expenseSchema =  new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})
const Expense = mongoose.model('Expense',expenseSchema) 
mongoose.connect(mongo)
.then(()=>{
    console.log("Mongodb connected");
})
.catch((err)=>{
    console.log(`Mongodb not connected: ${err}`)
})

app.get('/Expense',async(req,res)=>{
    try {
    const expenses = await Expense.find();
    res.status(201).json(expenses);
    console.log("Get Method")
    }
    catch (error) {
        console.error('Error saving expense',error)
        res.status(500).json({error:"failed to save"})
    }
    
})

app.post('/Expense', async(req,res)=>{
    try {
        const {title,amount}=req.body;
        const expense = new Expense(
            {title,amount}
        )
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        console.error('Error saving expense',error)
        res.status(500).json({error:"failed to save"})
    }
})
   
app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`)
})