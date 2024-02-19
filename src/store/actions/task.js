/** @format */

/*

// -----> createAction 
import { createAction } from "@reduxjs/toolkit";

export const CREATE_TASK = createAction("task/CREATE_TASK")
export const UPDATE_TASK_TITLE = createAction("task/UPDATE_TASK_TITLE");
export const CHANGE_LIST_ID_OF_A_TASK = createAction("task/CHANGE_LIST_ID_OFF_A_TASK");
export const CHANGE_BOARD_ID_OF_A_TASK = createAction(
  "task/CHANGE_BOARD_ID_OFF_A_TASK"
);
export const REMOVE_TASK = createAction("task/REMOVE_TASK");

*/

// -----> createSlice 
import {
  CREATE_TASK,
    UPDATE_TASK_TITLE,
    CHANGE_LIST_ID_OF_A_TASK,
    CHANGE_BOARD_ID_OF_A_TASK,
    REMOVE_TASK
} from "../reducers/task"

export {
  CREATE_TASK,
  UPDATE_TASK_TITLE,
  CHANGE_LIST_ID_OF_A_TASK,
  CHANGE_BOARD_ID_OF_A_TASK,
  REMOVE_TASK,
};