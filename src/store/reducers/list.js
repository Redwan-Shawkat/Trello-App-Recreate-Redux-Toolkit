/** @format */

/*

// RAW REDUX REDUCER

export const listReducer = (lists = [], action) => {
  switch (action.type) {
    // -----> CASE 01
    case "list/CREATE_LIST": {
      const newList = {
        id: Date.now() + "",
        title: action.payload.title,
        boardId: action.payload.boardId,
        tasks: [],
      };

      return [...lists, newList];
    }

    // -----> CASE 02
    case "list/UPDATE_LIST_NAME": {
      return lists.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title };
        }

        return item;
      });
    }

    // -----> CASE 03
    case "list/REMOVE_LIST": {
      return lists.filter((item) => item.id !== action.payload);
    }

    // -----> CASE 04
    case "list/CHANGE_BOARD_ID_OF_A_LIST": {
      return lists.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, boardId: action.payload.boardId };
        }

        return item;
      });
    }

    // -----> CASE 05
    case "list/ADD_TASK_ID_TO_A_LIST": {
      return lists.map((item) => {
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
    case "list/REMOVE_TASK_ID_FROM_A_LIST": {
      return lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            tasks: item.tasks.filter((tId) => tId !== action.payload.taskId),
          };
        }

        return item;
      });
    }

    // -----> CASE 07
    case "list/SORT_TASK_IDS_IN_LIST": {
      const { draggableId, source, destination } = action.payload;

      return lists.map((list) => {
        if (
          source.droppableId === destination.droppableId &&
          list.id === source.droppableId
        ) {
          const copyOfTaskIds = [...list.tasks];
          copyOfTaskIds.splice(source.index, 1);
          copyOfTaskIds.splice(destination.index, 0, draggableId);
          return {
            ...list,
            tasks: copyOfTaskIds,
          };
        }

        if (source.droppableId === list.id) {
          return {
            ...list,
            tasks: list.tasks.filter((itemId) => itemId !== draggableId),
          };
        }

        if (destination.droppableId === list.id) {
          return {
            ...list,
            tasks: [
              ...list.tasks.slice(0, destination.index),
              draggableId,
              ...list.tasks.slice(destination.index),
            ],
          };
        }

        return list;
      });
    }

    default: {
      return lists;
    }
  }
};

*/

/*

// -----> create Reducer 

import {createReducer} from '@reduxjs/toolkit';

export const listReducer = createReducer([], (builder) => {
  builder

     // -----> CASE 01 
     .addCase('list/CREATE_LIST', (state,action) => {
      const newList = {
        id: Date.now() + "",
        title: action.payload.title,
        boardId: action.payload.boardId,
        tasks: [],
      };
      return [...state, newList];
     })

     // -----> CASE 02 
     .addCase("list/UPDATE_LIST_NAME", (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, title: action.payload.title };
        }
        return item;
      })
    })

     // -----> CASE 03 
     .addCase('list/REMOVE_LIST', (state, action) => {
      return state.filter((item) => item.id!== action.payload);
     })

     // -----> CASE 04 
     .addCase('list/CHANGE_BOARD_ID_OF_A_LIST', (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {...item, boardId: action.payload.boardId };
        }
        return item;
      })
    })

    // -----> CASE 05
     .addCase('list/ADD_TASK_ID_TO_A_LIST', (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
         ...item,
            tasks: [...item.tasks, action.payload.taskId],
          };
        }
        return item;
      })
    })

    // -----> CASE 06
    .addCase('list/REMOVE_TASK_ID_FROM_A_LIST', (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
          ...item,
            tasks: item.tasks.filter((tId) => tId!== action.payload.taskId),
          };
        }
        return item;
      })
    }) 

    // -----> CASE 07
    .addCase("list/SORT_TASK_IDS_IN_LIST", (state, action) => {
      const { draggableId, source, destination } = action.payload;

      return state.map((list) => {
        if (
          source.droppableId === destination.droppableId &&
          list.id === source.droppableId
        ) {
          const copyOfTaskIds = [...list.tasks];
          copyOfTaskIds.splice(source.index, 1);
          copyOfTaskIds.splice(destination.index, 0, draggableId);
          return {
            ...list,
            tasks: copyOfTaskIds,
          };
        }

        if (source.droppableId === list.id) {
          return {
            ...list,
            tasks: list.tasks.filter((itemId) => itemId !== draggableId),
          };
        }

        if (destination.droppableId === list.id) {
          return {
            ...list,
            tasks: [
              ...list.tasks.slice(0, destination.index),
              draggableId,
              ...list.tasks.slice(destination.index),
            ],
          };
        }

        return list;
      });
    }) 

     // -----> CASE 08 
     .addDefaultCase ((state) => {
      return state;
     })
})

*/

// -----> createSlice 
import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    // -----> CASE 01
    CREATE_LIST (state, action) {
      const newList = {
        id: Date.now() + "",
        title: action.payload.title,
        boardId: action.payload.boardId,
        tasks: [],
      };
      return [...state, newList];
    },
    // -----> CASE 02
    UPDATE_LIST_NAME (state, action) {
       return state.map((item) => {
         if (item.id === action.payload.id) {
           return { ...item, title: action.payload.title };
         }
         return item;
       });
    },
    // -----> CASE 03
    REMOVE_LIST (state, action){
      return state.filter((item) => item.id !== action.payload);
    },
    // -----> CASE 04
    CHANGE_BOARD_ID_OF_A_LIST (state, action){
       return state.map((item) => {
         if (item.id === action.payload.id) {
           return { ...item, boardId: action.payload.boardId };
         }
         return item;
       });
    },
    // -----> CASE 05 
    ADD_TASK_ID_TO_A_LIST (state, action){
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
          ...item,
            tasks: [...item.tasks, action.payload.taskId],
          };
        }
        return item;
      })
    },
    // -----> CASE 06
    REMOVE_TASK_ID_FROM_A_LIST (state, action){
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
          ...item,
            tasks: item.tasks.filter((tId) => tId!== action.payload.taskId),
          };
        }
        return item;
      })
    },
    // -----> CASE 07
    SORT_TASK_IDS_IN_LIST (state, action){
     const { draggableId, source, destination } = action.payload;

     return state.map((list) => {
       if (
         source.droppableId === destination.droppableId &&
         list.id === source.droppableId
       ) {
         const copyOfTaskIds = [...list.tasks];
         copyOfTaskIds.splice(source.index, 1);
         copyOfTaskIds.splice(destination.index, 0, draggableId);
         return {
           ...list,
           tasks: copyOfTaskIds,
         };
       }

       if (source.droppableId === list.id) {
         return {
           ...list,
           tasks: list.tasks.filter((itemId) => itemId !== draggableId),
         };
       }

       if (destination.droppableId === list.id) {
         return {
           ...list,
           tasks: [
             ...list.tasks.slice(0, destination.index),
             draggableId,
             ...list.tasks.slice(destination.index),
           ],
         };
       }

       return list;
     });
    }
  }
})

export const {
  CREATE_LIST,
  UPDATE_LIST_NAME,
  REMOVE_LIST,
  CHANGE_BOARD_ID_OF_A_LIST,
  ADD_TASK_ID_TO_A_LIST,
  REMOVE_TASK_ID_FROM_A_LIST,
  SORT_TASK_IDS_IN_LIST
} = listSlice.actions;

export default listSlice.reducer;