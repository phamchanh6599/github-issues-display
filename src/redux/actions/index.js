import { ADD_ITEM } from "./../constants/actions-type";

export function addVisitedItem(payload) {
    return { type: ADD_ITEM, payload }
};