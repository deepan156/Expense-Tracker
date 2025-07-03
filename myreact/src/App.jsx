import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Print from './index.jsx'
import react from 'react'
import './index.jsx'
import Form from './form.jsx';
import History from './History.jsx'
import './ExpenseForm.jsx'
import ExpenseForm from './ExpenseForm.jsx'
import ExpenseContainer from './ExpenseContainer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (<>
   <div className='outside'>
   <ExpenseContainer />
   </div>

   
    </>
)}

export default App
