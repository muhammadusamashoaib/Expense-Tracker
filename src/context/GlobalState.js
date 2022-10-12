import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions1: [],
  transactions2: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(key, id) {
    switch (key) {
      case 1:
        dispatch({
          type: "DELETE_TRANSACTION_1",
          payload: id,
        });
        break;
      case 2:
        dispatch({
          type: "DELETE_TRANSACTION_2",
          payload: id,
        });
        break;
      case 3:
        dispatch({
          type: "DELETE_TRANSACTION",
          payload: id,
        });
        break;
        
      default:
        break;
    }
  }
  function addTransaction(key,transaction) {
    switch (key) {
        case 1:
            dispatch({
                type: "ADD_TRANSACTION_1",
                payload: transaction,
              });
            break;
        case 2:
            dispatch({
                type: "ADD_TRANSACTION_2",
                payload: transaction,
              });
            break;
        default:
            break;
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions1: state.transactions1,
        transactions2: state.transactions2,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
