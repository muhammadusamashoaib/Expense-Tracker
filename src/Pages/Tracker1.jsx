import React, { useContext, useEffect } from 'react'
import { AddTransaction } from '../components/AddTransaction';
import { Balance } from '../components/Balance';
import { Header } from '../components/Header';
import { IncomeExpense } from '../components/IncomeExpense';
import { TransactionList } from '../components/TransactionList';
import { GlobalContext } from '../context/GlobalState';


export const Tracker1 = () => {

  const { transactions1 } = useContext(GlobalContext)

  useEffect(() => {
    document.title = 'Expense Tracker | Tracker 1'
  }, [])

  return (
    <div>
      <Header title={'Expense Tracker 1'} />
      <div className='container'>
        <Balance transactions={transactions1} />
        <IncomeExpense transactions={transactions1} />
        <TransactionList id={1} transactions={transactions1} />
        <AddTransaction id={1} />
      </div>
    </div>
  )
}
