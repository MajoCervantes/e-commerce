export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    };
};

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    };
};

export const addFavs = (product) => {
    return {
        type: "ADDFAV",
        payload: product
    };
};

export const delFavs = (product) => {
    return {
        type: "DELFAV",
        payload: product
    };
};