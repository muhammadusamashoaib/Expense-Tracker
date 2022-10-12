import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TotalBalance = () => {
  const { transactions1 } = useContext(GlobalContext);
  const { transactions2 } = useContext(GlobalContext);

  const [totalBalance, setTotalBalance] = useState(0);

  useEffect(() => {
    const amounts1 = transactions1.map((transaction) => transaction.amount);
    const total1 = amounts1.reduce((acc, item) => (acc += item), 0);
    const amounts2 = transactions2.map((transaction) => transaction.amount);
    const total2 = amounts2.reduce((acc, item) => (acc += item), 0);

    setTotalBalance((prev) => prev + (total1 + total2));
  }, []);

  return (
    <div>
      <h4>Total Balance</h4>
      <h1>Rs. {totalBalance}</h1>
    </div>
  );
};
