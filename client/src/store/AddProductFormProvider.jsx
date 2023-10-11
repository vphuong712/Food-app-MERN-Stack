import AddProductFormContext from './AddProductFormContext';
import { useReducer } from 'react';

const initState = {
    isShow: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return {
                isShow: true
            }
        case 'HIDE':
            return {
                isShow: false
            }
        default:
            return state;
    }
}

const AddProductFormProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return <AddProductFormContext.Provider value={[state, dispatch]} >
        {props.children}
    </AddProductFormContext.Provider>
}

export default AddProductFormProvider;