import React, { useContext, useEffect } from 'react'
import { AddTransaction } from '../components/AddTransaction';
import { Balance } from '../components/Balance';
import { Header } from '../components/Header';
import { IncomeExpense } from '../components/IncomeExpense';
import { TransactionList } from '../components/TransactionList';
import { GlobalContext } from '../context/GlobalState';


export const Tracker2 = () => {
  const { transactions2 } = useContext(GlobalContext)

  useEffect(() => {
    document.title = 'Expense Tracker | Tracker 2'
  }, [])

  return (
    <div>
      <Header title={'Expense Tracker 2'} />
      <div className='container'>
        <Balance transactions={transactions2} />
        <IncomeExpense transactions={transactions2} />
        <TransactionList id={2} transactions={transactions2} />
        <AddTransaction id={2} />
      </div>
    </div>
  )
}
