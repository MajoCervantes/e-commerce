import handleCart from "./handleCart";
import handleFavs from "./handleFavs";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    handleCart,
    handleFavs
});

export default rootReducer;