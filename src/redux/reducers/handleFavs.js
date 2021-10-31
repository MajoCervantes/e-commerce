const initialState = [];

const handleFavs = (state = initialState, action) => {

    const product = action.payload;
    switch (action.type) {
        case "ADDFAV":

            return [ ...state, { ...product, qty: 1 } ];


        case "DELFAV":
            const exist1 = state.find((p) => p.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((p) => p.id !== product.id);
            } else {
                return state.map((p) => p.id === product.id ? { ...p, qty: - 1 } : p);
            }

        default:
            return state;
    }
};

export default handleFavs;