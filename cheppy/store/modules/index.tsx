import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import code from "./code";
import counter from "./counter";
import feedback from "./feedback";
import solution from "./solution";

const rootReducer = combineReducers({
    code,
    counter,
    feedback,
    solution,
});

const reducer = (state, action) => {
    if(action.type === HYDRATE){
        return{
            ...state,
            ...action.payload
        };
    }
    return rootReducer(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;
export default reducer;