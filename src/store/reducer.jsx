import { combineReducers } from "redux";
import { reducer as reducerPortfolio} from "./portfolioSlice"
import { reducer as reducerFilter} from "./filterSlice"

export const rootReducer = combineReducers({
    reducerPortfolio,
    reducerFilter,
});
