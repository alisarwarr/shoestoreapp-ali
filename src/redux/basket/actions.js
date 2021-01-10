import { ADDED, REMOVED, QUITED, RESET } from './types.js';

export const added = (id) => ({
    type: ADDED,
    payload: id
})

export const removed = (id) => ({
    type: REMOVED,
    payload: id
})

export const quited = (id) => ({
    type: QUITED,
    payload: id
})

export const reset = () => ({
    type: RESET
})