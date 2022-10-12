export const AppReducer = (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION_1':
            return{
                ...state,
                transactions1: state.transactions1
                .filter(transaction=>transaction.id!==action.payload)
            }
        case 'DELETE_TRANSACTION_2':
            return{
                ...state,
                transactions2: state.transactions2
                .filter(transaction=>transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION_1':
            return{
                ...state,
                transactions1: [action.payload,...state.transactions1]
            }
        case 'ADD_TRANSACTION_2':
            return{
                ...state,
                transactions2: [action.payload,...state.transactions2]
            }
        default:
            return state;
    }
}
export default AppReducer