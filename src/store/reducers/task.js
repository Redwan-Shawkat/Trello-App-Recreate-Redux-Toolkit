// /** @format */

/*
// -----> RAW REDUX REDUCER 
export const taskReducer = (tasks = [], action) => {
  switch (action.type) {
    // -----> CASE 01
    case "task/CREATE_TASK": {
      const newTask = {
        id: Date.now() + "",
        title: action.payload.title,
        listId: action.payload.listId,
        boardId: action.payload.boardId,
      };

      return [...tasks, newTask];
    }

    // -----> CASE 02
    case "task/UPDATE_TASK_TITLE": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title };
        }

        return item;
      });
    }

    // -----> CASE 03
    case "task/CHANGE_LIST_ID_OF_A_TASK": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, listId: action.payload.listId };
        }

        return item;
      });
    }

    // -----> CASE 04
    case "task/CHANGE_BOARD_ID_OF_A_TASK": {
      return tasks.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, boardId: action.payload.boardId };
        }

        return item;
      });
    }

    // -----> CASE 05
    case "task/REMOVE_TASK": {
      return tasks.filter((item) => item.id !== action.payload);
    }

    default: {
      return tasks;
    }
  }
};

*/

/*

// -----> createReducer 

import {createReducer} from "@reduxjs/toolkit";
import {CREATE_TASK, UPDATE_TASK_TITLE, CHANGE_LIST_ID_OF_A_TASK, CHANGE_BOARD_ID_OF_A_TASK, REMOVE_TASK}  from "../actions/task"

export const taskReducer = createReducer ([], (builder) => {
  builder

    // -----> CASE 01
    .addCase(CREATE_TASK, (state, action) => {
      const newTask = {
        id: Date.now() + "",
        title: action.payload.title,
        listId: action.payload.listId,
        boardId: action.payload.boardId,
      };

      return [...state, newTask];
    })

    // -----> CASE 02
    .addCase(UPDATE_TASK_TITLE, (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title };
        }
        return item;
      });
    })

    // -----> CASE 03
    .addCase(CHANGE_LIST_ID_OF_A_TASK, (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, listId: action.payload.listId };
        }
        return item;
      });
    })

    // -----> CASE 04
    .addCase(CHANGE_BOARD_ID_OF_A_TASK, (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, boardId: action.payload.boardId };
        }
        return item;
      });
    })

    // ----->  CASE 05
    .addCase(REMOVE_TASK, (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    })


    // -----> CASE 06
    .addDefaultCase((state) => {
        return state
    });
})

*/

// -----> createSlice 
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    // -----> CASE 01 
    CREATE_TASK(state, action){
      const newTask = {
        id: Date.now() + "",
        title: action.payload.title,
        listId: action.payload.listId,
        boardId: action.payload.boardId,
      };
      return [...state, newTask];
    },
    // -----> CASE 02 
    UPDATE_TASK_TITLE(state,action){
       return state.map((item) => {
         if (item.id === action.payload.id) {
           return { ...item, title: action.payload.title };
         }
         return item;
       });
    },
    // -----> CASE 03 
    CHANGE_LIST_ID_OF_A_TASK(state, action){
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, listId: action.payload.listId };
        }
        return item;
      });
    },
    // -----> CASE 04 
    CHANGE_BOARD_ID_OF_A_TASK(state, action){
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, boardId: action.payload.boardId };
        }
        return item;
      });
    },
    // -----> CASE 05 
    REMOVE_TASK(state, action){
      return state.filter((item) => item.id!== action.payload);
    }
  }
})

export const {
  CREATE_TASK,
  UPDATE_TASK_TITLE,
  CHANGE_LIST_ID_OF_A_TASK,
  CHANGE_BOARD_ID_OF_A_TASK,
  REMOVE_TASK
} = taskSlice.actions;

export default taskSlice.reducer;