


const Reducer = (state, action) => {
    if (action.type === 'ADD_CART') {
        console.log(action.payLoad);
        console.log(state);
        return {
            ...state, shoes: [...state.shoes, action.payLoad]
        }
        //return newState;
    }
    else if (action.type === 'DEL_CART') {
        console.log(action.payload);
        //console.log(state);
        const items = state.shoes.filter(item => item['img'] !== action.payload['img']);
        console.log(items);
        return {
            ...state,
            shoes: items
        }
    }
    else {
        return state;
    }
};

export default Reducer;