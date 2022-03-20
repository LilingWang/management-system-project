import { INIT, GETINFO, ADDTOCARTLIST, INITCART } from "../../helper/constants";

const cartProducts = [];
export const cartReducer = (state = cartProducts, { type, payload }) => {

    console.log("test cart reducer--09945", payload)
    switch (type) {
        case INITCART:
            return [...state, ...payload];
        case ADDTOCARTLIST:
            return [...state, ...payload];
        case GETINFO:
            return payload;
        default:
            return state;
    }
}

