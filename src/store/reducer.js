const initialState ={
    count: 0,
    actionTypes: ['Increment','Decrement']
}
const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'INCREMENT_ASYNC':
        return {
            ...state,
            count : state.count+1
        };

        case 'DECREMENT':
        return {
            ...state,
            count : state.count-1
        };
    }
    return state;
}
export default reducer;