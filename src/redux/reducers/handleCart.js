const initialState = [];

const handleCart = (state = initialState, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((p) => p.id === product.id);
            if (exist) {
                return state.map((p) => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
            } else {
                const product = action.payload;
                return [ ...state, { ...product, qty: 1 } ];
            }

        case "DELITEM":
            const exist1 = state.find((p) => p.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((p) => p.id !== product.id);
            } else {
                return state.map((p) => p.id === product.id ? { ...p, qty: p.qty - 1 } : p);
            }

        default:
            return state;
    }
};

export default handleCart;