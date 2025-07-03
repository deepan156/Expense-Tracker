import React from 'react'
import ExpenseForm from './ExpenseForm'
import History from './History'
import './Style.css'
import { useState , useEffect } from 'react'
import {v4 as uid} from "uuid";
import Balancecont from'./Balancecont.jsx'


function ExpenseContainer() {
  const EXPENSE=[
    {
      id:uid(),title:"Expense",amount:100,
    },{
       id:uid(),title:"Expense 2",amount:-200,
      }
    ]
  const [expenses, setExpenses] = useState(EXPENSE)
  console.log(expenses);
    const fetchExpense = async()=>{
      try{
        const response = await fetch("http://localhost:3000/Expense");
        const data = await response.json()
        const data1= data.map((item)=>({
          id:item._id,
          title:item.title,
          amount:item.amount
        }))
        setExpenses(data1);
      }
      catch(error){
        console.error('Failed to fetch data',error);
      }
    }
    useEffect(()=>{
      fetchExpense()
    },[])
    const addExpense=async(title,amount)=>{
      try{
        const response=await fetch('http://localhost:3000/Expense',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({title,amount}),
        })
        if(response.ok){
          const newItem =await response.json();
          setExpenses([...expenses,newItem])
        }
      }
      catch(error){
          console.log("Error",error);
      }
    }
 
const deleteExpense=(id)=>{
  setExpenses(expenses.filter((exp)=> exp.id !==id))
}


  return (
    <div className='expense-container'>
      <h1 className='app-title'>Expense Tracker</h1>
      <Balancecont expense={expenses} />
       <h1>History</h1>
      <History expense={expenses} deleteExpense={deleteExpense}/><br></br>
      <ExpenseForm func={addExpense} />
      
      
    </div>
  )
}

export default ExpenseContainer