import { INIT, REMOVEITEM, ADD, ADDTOCART, MINUSTOCART, DELITEM, MODITEM} from "../helper/constants";

const products = [];
export const reducer = (state = products, { type, payload }) => {
    switch (type) {
        case INIT:
            return [...state, ...payload];
        case ADD:
            const newState = [...state]
            newState.unshift(payload);
            return newState.slice(1);
        case ADDTOCART:
            return [...state, { ...payload }];
        case MINUSTOCART:
            return [...state, { ...payload }];
        case REMOVEITEM:
            return [...state, { ...payload }];
        case DELITEM:
            return [...state.slice(0,payload), ...state.slice(payload+1)];
            case MODITEM:
                const modState = [...state]
                modState[payload.value.index] = payload.value.value;
            return modState;
        default:
            return state;
    }
}