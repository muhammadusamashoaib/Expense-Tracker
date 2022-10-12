import React from "react";
import { Transaction } from "./Transaction";

export const CombinedTransactionList = ({ transactions1, transactions2 }) => {
  return (
    <div className="combined">
      <h3>Transactions History</h3>
      <ul className="list">
        {transactions1.length ? <p>From User 1</p> : <></>}
        {transactions1.map((transaction) => (
          <Transaction key={transaction.id} id={1} transaction={transaction} />
        ))}
        {transactions2.length ? <p>From User 2</p> : <></>}
        {transactions2.map((transaction) => (
          <Transaction key={transaction.id} id={2} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
