import { ADDED, REMOVED, QUITED, RESET } from './types.js';
import { initialState } from './initialState.js';

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADDED:
            return state.map(item => {
                if(item.id === action.payload) {
                    console.log("addded", action.payload);             //returns id

                    return {
                        ...item,
                        added: true,
                        quantity: item.quantity + 1,
                    }
                }
                
                return item;
            })

        case REMOVED:
            return state.map(item => {
                if(item.id === action.payload) {
                    console.log("removed", action.payload);            //returns id

                    return {
                        ...item,
                        added: false,
                        quantity: (item.quantity !== 0) ? item.quantity - 1 : 0
                    }
                }
                
                return item;
            })

        case QUITED:
            return state.map(item => {
                if(item.id === action.payload) {
                    console.log("quit", action.payload);               //returns id

                    return {
                        ...item,
                        added: false,
                        quantity: 0
                    }
                }
                
                return item;
            })
        
        case RESET:
            return state.map(item => {
                return {
                    ...item,
                    quantity: 0
                }
            })
    
        default:
            return state;
    }
}

export default reducer;