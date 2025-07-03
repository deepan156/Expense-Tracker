import React from 'react'

function Expenseitem(props) {

    const{title,amount,id}=props.expense
    const type = amount > 0 ? "income" : "expense" 
    const handleDelete=()=>{
      props.deleteExpense(id)
    }
if (amount<=0){     
  return (
    
   
    <div>
     
      <div className={`expense-item ${type}`}></div>
      
        
            <div className="cont">
                
                    <div className='expense-title'>{title}</div>
                
                
                    <div className="col">
                        <div className='expense-amount'>${amount}</div>
<div className='delete-button-overlay'>
  <button onClick={handleDelete}>Delete</button>
  </div>                        
                                 

            </div>
    
    </div>
    </div>
  )
}
else {
    return (
    
   
    <div>
     
      <div className={`expense-item ${type}`}></div>
      
        
            <div className="cont1">
                
                    <div className='expense-title'>{title}</div>
                
                
                    <div className="col1">
                        <div className='expense-amount'>${amount}</div>
                        
                <div className='delete-button-overlay'>
  <button onClick={handleDelete}>Delete</button>
  </div>                 

            </div>
    
    </div>
    </div>
  )
}
}

export default Expenseitem