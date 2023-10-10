import { useReducer } from "react";
import ModalContext from "./ModalContext";

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

const ModalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <ModalContext.Provider value={[state, dispatch]}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;