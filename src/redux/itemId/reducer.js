import { CLICKED_ITEM_ID } from './types.js';

const initialState = {
    itemId: 1
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case CLICKED_ITEM_ID:
            return {
                ...state,
                itemId: action.payload
            }
    
        default:
            return state;
    }
}

export default reducer;