import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = ({transactions}) => {
  // const {transactions1} = useContext(GlobalContext)

  const amounts=transactions.map(transaction=>transaction.amount)
  
  const total1=amounts.reduce((acc,item)=>(acc+=item),0);


  return (
    <GlobalContext.Provider value={total1}>
    <div>
        <h4>Balance</h4>
        <h1>Rs. {total1}</h1>
    </div>
    </GlobalContext.Provider>
  )
}
