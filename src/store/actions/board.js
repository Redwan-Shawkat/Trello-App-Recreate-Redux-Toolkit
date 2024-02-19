/** @format */

/*

// -----> createAction 
import { createAction } from "@reduxjs/toolkit";

export const CREATE_BOARD = createAction("board/CREATE_BOARD");
export const UPDATE_BOARD_TITLE = createAction("board/UPDATE_BOARD_TITLE");
export const REMOVE_BOARD = createAction("board/REMOVE_BOARD");
export const ADD_LIST_ID_TO_A_BOARD = createAction("board/ADD_LIST_ID_TO_A_BOARD");
export const ADD_TASK_ID_TO_A_BOARD = createAction("board/ADD_TASK_ID_TO_A_BOARD");
export const REMOVE_LIST_ID_FROM_A_BOARD = createAction("board/REMOVE_LIST_ID_FROM_A_BOARD");
export const REMOVE_TASK_ID_FROM_A_BOARD = createAction("board/REMOVE_TASK_ID_FROM_A_BOARD");
*/

 // -----> createSlice 
 import {
     CREATE_BOARD, 
     UPDATE_BOARD_TITLE, 
     REMOVE_BOARD, 
     ADD_LIST_ID_TO_A_BOARD, 
     ADD_TASK_ID_TO_A_BOARD, 
     REMOVE_LIST_ID_FROM_A_BOARD,
     REMOVE_TASK_ID_FROM_A_BOARD } from "../reducers/board";

export {
  CREATE_BOARD,
  UPDATE_BOARD_TITLE,
  REMOVE_BOARD,
  ADD_LIST_ID_TO_A_BOARD,
  ADD_TASK_ID_TO_A_BOARD,
  REMOVE_LIST_ID_FROM_A_BOARD,
  REMOVE_TASK_ID_FROM_A_BOARD,
};