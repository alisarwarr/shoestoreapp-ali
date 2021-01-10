import { CLICKED_ITEM_ID } from './types.js';

export const clickedItemID = (id) => ({
    type: CLICKED_ITEM_ID,
    payload: id
})