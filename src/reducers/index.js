import { INIT, REMOVEITEM, ADD, ADDTOCART, MINUSTOCART } from "../helper/constants";

const products = [];
export const reducer = (state = products, { type, payload }) => {
    switch (type) {
        case INIT:
            return [...state, ...payload];
        case ADD:
            return [...state, { ...payload }];
        case ADDTOCART:
            return [...state, { ...payload }];
        case MINUSTOCART:
            return [...state, { ...payload }];
        case REMOVEITEM:
            return [...state, { ...payload }];
        default:
            return state;
    }
}