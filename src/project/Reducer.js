import React, { createContext, useReducer } from 'react';
import Reducer from './Reduce';
const ShoeName = {
    shoes: []
}

export const GlobalContext = createContext(ShoeName);

const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, ShoeName);
    //console.log(Children)
    console.log(state);
    const addShoe = (obj) => {
        console.log(obj)
        dispatch({ type: "ADD_CART", payLoad: { img: obj.img, price: obj.price } });
    }
    const delShoe = (obj) => {
        console.log(obj);
        dispatch({ type: 'DEL_CART', payload: {  img: obj.img, price: obj.price  } });
    }
    return (
        <GlobalContext.Provider value={{ state: state.shoes, addShoe, delShoe }}>
            {children}
        </GlobalContext.Provider>
    );
};
export default GlobalProvider;










