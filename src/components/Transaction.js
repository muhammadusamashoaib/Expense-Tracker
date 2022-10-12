import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Delete from "../images/delete.png";

export const Transaction = ({ id, transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}Rs. {Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(id, transaction.id)}
      >
        <img src={Delete} alt="Delete"></img>
      </button>
    </li>
  );
};
