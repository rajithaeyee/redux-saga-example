const redux = require('redux');
const createStore = redux.createStore;

const initalState = {
    counter :0
}
//reducer
const rootReducer = (state = initalState, action) =>{
    switch(action.type){
        case 'INCREMENT':
        return{
            ...state,
            counter: state.counter+1
        } 
        case 'DECREMENT':
        return{
            ...state,
            counter: state.counter-1
        }
    }
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscription
store.subscribe(
    ()=>{
       console.log(store.getState());
    }
)
//dispatch action
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
console.log(store.getState());
