const initialState = [];

const handleFavs = (state = initialState, action) => {

    const product = action.payload;
    switch (action.type) {
        case "ADDFAV":
            const exist = state.find((p) => p.id === product.id);
            if (exist) {
                return state;
            } else {
                const product = action.payload;
                return [ ...state, product ];
            }

        case "DELFAV":
            return state.map((p, index) => p.id === product.id && state.splice(index, 1));

        default:
            return state;
    }
};

export default handleFavs;