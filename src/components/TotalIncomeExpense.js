import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalIncomeExpense = () => {

 const {transactions1} = useContext(GlobalContext)
 const {transactions2} = useContext(GlobalContext)

 const amounts1=transactions1
 .map(transaction=>transaction.amount)

 const income1=amounts1
 .filter(item=>item>0)
 .reduce((acc,item)=>(acc+=item),0)

 const expense1=amounts1
 .filter(item=>item<0)
 .reduce((acc,item)=>(acc+=item),0)*-1

 const amounts2=transactions2
 .map(transaction=>transaction.amount)

 const income2=amounts2
 .filter(item=>item>0)
 .reduce((acc,item)=>(acc+=item),0)

 const expense2=amounts2
 .filter(item=>item<0)
 .reduce((acc,item)=>(acc+=item),0)*-1

  const totalIncome=income1+income2;
  const totalExpense=expense1+expense2;
  
  return (
    <div className='inc-exp-container'>
       <div>
         <h4>Total Income</h4>
         <p className='money plus'>Rs. {totalIncome}</p>
       </div>
       <div>
         <h4>Total Expense</h4>
         <p className='money minus'>Rs. {totalExpense}</p>
       </div>
    </div>
  )
}
