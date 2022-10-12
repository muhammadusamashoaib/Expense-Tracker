import React, { useContext, useEffect } from 'react'
import { CombinedTransactionList } from '../components/CombinedTransactionList'
import { TotalBalance } from '../components/TotalBalance'
import { TotalIncomeExpense } from '../components/TotalIncomeExpense'
import { CombinedAddTransaction } from '../components/CombinedAddTransaction'
import { GlobalContext } from '../context/GlobalState'

export const Home = () => {
  const { transactions1 } = useContext(GlobalContext)
  const { transactions2 } = useContext(GlobalContext)
  useEffect(() => {
    document.title = 'Expense Tracker | Combined'
  }, [transactions1, transactions2])

  return (
    <div className='homepage'>
      <TotalBalance />
      <TotalIncomeExpense />
      <CombinedTransactionList transactions1={transactions1} transactions2={transactions2} />
      <CombinedAddTransaction />
    </div>
  )
}
