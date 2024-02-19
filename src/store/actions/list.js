/** @format */

/* 

// -----> createAction 
import { createAction } from "@reduxjs/toolkit";

export const CREATE_LIST = createAction("list/CREATE_LIST")
export const UPDATE_LIST_NAME = createAction("list/UPDATE_LIST_NAME")
export const REMOVE_LIST = createAction("list/REMOVE_LIST")
export const CHANGE_BOARD_ID_OF_A_LIST = createAction("list/CHANGE_BOARD_ID_OF_A_LIST")
export const ADD_TASK_ID_TO_A_LIST = createAction("list/ADD_TASK_ID_TO_A_LIST")
export const REMOVE_TASK_ID_FROM_A_LIST = createAction("list/REMOVE_TASK_ID_FROM_A_LIST")
export const SORT_TASK_IDS_IN_LIST = createAction("list/SORT_TASK_IDS_IN_LIST")

*/

 // -----> createSlice 
 import {
  CREATE_LIST,
  UPDATE_LIST_NAME,
  REMOVE_LIST,
  CHANGE_BOARD_ID_OF_A_LIST,
  ADD_TASK_ID_TO_A_LIST,
  REMOVE_TASK_ID_FROM_A_LIST,
  SORT_TASK_IDS_IN_LIST
} from "../reducers/list"

export {
  CREATE_LIST,
  UPDATE_LIST_NAME,
  REMOVE_LIST,
  CHANGE_BOARD_ID_OF_A_LIST,
  ADD_TASK_ID_TO_A_LIST,
  REMOVE_TASK_ID_FROM_A_LIST,
  SORT_TASK_IDS_IN_LIST,
};