/*

// ----->  RAW REDUX

export const boardReducer = (boards = [], action) => {
    switch (action.type) {
      // -----> CASE 01
      case "board/CREATE_BOARD": {
        const newBoard = {
          id: Date.now() + "",
          title: action.payload,
          lists: [],
          tasks: [],
        };
        return [...boards, newBoard];
      }

      // -----> CASE 02
      case "board/UPDATE_BOARD_TITLE": {
        return boards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              title: action.payload.title,
            };
          }
          return item;
        });
      }

      // -----> CASE 03
      case "board/REMOVE_BOARD": {
        return boards.filter((item) => item.id !== action.payload);
      }

      // -----> CASE 04
      case "board/ADD_LIST_ID_TO_A_BOARD": {
        return boards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              tasks: [...item.tasks, action.payload.taskId],
            };
          }
          return item;
        });
      }

      // -----> CASE 05
      case "board/ADD_TASK_ID_TO_A_BOARD": {
        return boards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              tasks: [...item.tasks, action.payload.taskId],
            };
          }
          return item;
        });
      }

      // -----> CASE 06
      case "board/REMOVE_LIST_ID_FROM_A_BOARD": {
        return boards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              lists: item.lists.filter(
                (item) => item !== action.payload.listId
              ),
            };
          }
          return item;
        });
      }

      // -----> CASE 07 
      case "board/REMOVE_TASK_ID_FROM_A_BOARD": {
        return boards.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              tasks: item.tasks.filter(
                (item) => item !== action.payload.taskId
              ),
            };
          }
        });
      }

      default:
        return boards;
    }
}

*/

/*

// -----> createReducer 

import { createReducer } from "@reduxjs/toolkit";

export const boardReducer = createReducer ([], (builder) => {
  builder

    // -----> CASE 01
    .addCase('board/CREATE_BOARD', (state, action) => {
      const newBoard = {
        id: Date.now() + "",
        title: action.payload,
        lists: [],
        tasks: [],
      }
       return [...state, newBoard]
    }) 

    // -----> CASE 02 
    .addCase ('board/UPDATE_BOARD_TITLE', (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
          }
        }
        return item
      })
    })

     // -----> CASE 03 
     .addCase('board/REMOVE_BOARD', (state, action) => {
      return state.filter((item) => item.id !== action.payload)
     })

     // -----> CASE 04
     .addCase('board/ADD_LIST_ID_TO_A_BOARD', (state, action) => {
      return state.map ((item) => {
        if (item.id === action.payload.id){
          return {
            ...item,
            tasks: [...item.tasks, action.payload.taskId],
          }
        }
        return item;
      })
     }) 

    // -----> CASE 05 
    .addCase('board/ADD_TASK_ID_TO_A_BOARD', (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id){
          return {
            ...item,tasks: [...item.tasks, action.payload.taskId]
          }
        }
        return item;
      })
    })

     // -----> CASE 06
     .addCase('board/REMOVE_LIST_ID_FROM_A_BOARD', (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id){
          return {
            ...item,
            tasks: item.tasks.filter( (item) => item !== action.payload.taskId)
          }
        }
      })
     })

     // -----> CASE 07 
     .addDefaultCase((state) => {
      return state;
     })
})

*/

// -----> createSlice 
import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: [],
  reducers: {
    // -----> CASE 01 
    CREATE_BOARD (state, action) {
      const newBoard = {
        id: Date.now() + "",
        title: action.payload,
        lists: [],
        tasks: [],
      };
      return [...state, newBoard];
    },
    // -----> CASE 02 
    UPDATE_BOARD_TITLE (state, action) {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
         ...item,
            title: action.payload.title,
          };
        }
        return item;
      });
    },
    // -----> CASE 03
    REMOVE_BOARD (state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    // -----> CASE 04 
    ADD_LIST_ID_TO_A_BOARD (state, action){
       return state.map((item) => {
         if (item.id === action.payload.id) {
           return {
             ...item,
             tasks: [...item.tasks, action.payload.taskId],
           };
         }
         return item;
       });
    },
    // -----> CASE 05 
    ADD_TASK_ID_TO_A_BOARD (state, action) {
       return state.map((item) => {
        if (item.id === action.payload.id){
          return {
            ...item,tasks: [...item.tasks, action.payload.taskId]
          }
        }
        return item;
      })
    },
    // -----> CASE 06 
    REMOVE_LIST_ID_FROM_A_BOARD (state, action){
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            tasks: item.tasks.filter((item) => item !== action.payload.taskId),
          };
        }
      });
    },
    // -----> CASE 07
    REMOVE_TASK_ID_FROM_A_BOARD (state, action){
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            tasks: item.tasks.filter((item) => item !== action.payload.taskId),
          };
        }
        return item;
      });
    } 
  },
})

export const {CREATE_BOARD, UPDATE_BOARD_TITLE, REMOVE_BOARD, ADD_LIST_ID_TO_A_BOARD, ADD_TASK_ID_TO_A_BOARD, REMOVE_LIST_ID_FROM_A_BOARD, REMOVE_TASK_ID_FROM_A_BOARD} = boardSlice.actions

export default boardSlice.reducer;
