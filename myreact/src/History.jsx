import React from 'react'
import Expenseitem from './Expenseitem.jsx'
import Balancecont from './Balancecont.jsx'
function History(props) {
    
  return (
    <div>
    <div className='history'>
        {props.expense.map((expense)=>(
            <Expenseitem 
            key={expense.id} 
            expense={expense}
            deleteExpense={props.deleteExpense}
            />
            
        ))}
        

    </div>
    
    
    </div>
  )
}

export default History