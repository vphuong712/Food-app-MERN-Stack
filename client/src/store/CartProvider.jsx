import { useReducer } from "react";
import CartContext from "./CartContext";

const initState = {
    isShow: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return {
                isShow: true,
            }
        case 'HIDE':
            return {
                isShow: false,
            }
        default:
            return state;
    }
}

const CartProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;