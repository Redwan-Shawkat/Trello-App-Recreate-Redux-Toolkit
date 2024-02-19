
import  boardReducer  from "./reducers/board";
import listReducer  from "./reducers/list";
import  taskReducer  from "./reducers/task";

import { configureStore } from "@reduxjs/toolkit";


const rootReducer = {
    board: boardReducer,
    list: listReducer,
    task: taskReducer,
}

export const store = configureStore({
    reducer: rootReducer
})