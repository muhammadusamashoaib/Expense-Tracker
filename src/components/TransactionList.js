import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = ({ id, transactions }) => {
  // const {transactions1} = useContext(GlobalContext)
  // console.log(context);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} id={id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
