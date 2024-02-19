/** @format */

import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { icons } from "../assets";

import AddItem from "./AddItem";
import AddItemForm from "./AddItemForm";


import { useSelector, useDispatch } from "react-redux";

import {TaskCard} from "./TaskCard";

import {
  CREATE_TASK,
  UPDATE_TASK_TITLE,
  CHANGE_LIST_ID_OF_A_TASK,
  CHANGE_BOARD_ID_OF_A_TASK,
  REMOVE_TASK,
} from "../store/actions/task";

import {
  CREATE_BOARD,
  UPDATE_BOARD_TITLE,
  REMOVE_BOARD,
  ADD_LIST_ID_TO_A_BOARD,
  ADD_TASK_ID_TO_A_BOARD,
  REMOVE_LIST_ID_FROM_A_BOARD,
} from "../store/actions/board";

import {
  CREATE_LIST,
  UPDATE_LIST_NAME,
  REMOVE_LIST,
  CHANGE_BOARD_ID_OF_A_LIST,
  ADD_TASK_ID_TO_A_LIST,
  REMOVE_TASK_ID_FROM_A_LIST,
  SORT_TASK_IDS_IN_LIST,
} from "../store/actions/list";



const TaskList = ({ taskList }) => {
  const [editMode, setEditMode] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const board = useSelector((storeState) => storeState.board);
  const list = useSelector((storeState) => storeState.list);
  const task = useSelector((storeState) => storeState.task);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();

    const newTaskId = Date.now() + "";


    dispatch(CREATE_TASK({
      id: newTaskId,
      title: taskTitle,
      listId: taskList.id,
      boardId: taskList.boardId,
    }))

    dispatch(ADD_TASK_ID_TO_A_LIST({
       id: taskList.id, 
       taskId: newTaskId,
    }));

    dispatch(ADD_TASK_ID_TO_A_BOARD({
      id: taskList.boardId,
       taskId: newTaskId,
    }));

    setEditMode(false);
    setTaskTitle("");
  };

  const removeHandler = () => {
    dispatch(REMOVE_LIST(taskList.id));
    dispatch(REMOVE_LIST_ID_FROM_A_BOARD({
       id: taskList.boardId, 
       listId: taskList.id,
    }));
    taskList.tasks.forEach((taskId) => {
      dispatch(REMOVE_TASK(taskId));
    });
  };

  return (
    <Droppable droppableId={taskList.id}>
      {(provided) => {
        
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className='list-container'
          >
            <div className='list-title-container'>
              <h5>{taskList.title}</h5>
              <img
                onClick={removeHandler}
                src={icons.crossIcon}
                alt=''
                className='add-item-icon'
              />
            </div>
            {taskList.tasks
              .map((item) => {
                return task.find((ele) => ele.id === item);
              })
              .map((task, index) => (
                <TaskCard index={index} key={task.id} task={task} />
                
              ))}
            {!editMode ? (
              <AddItem setEditMode={setEditMode} />
            ) : (
              <AddItemForm
                title={taskTitle}
                onChangeHandler={(e) => {
                  setTaskTitle(e.target.value);
                }}
                setEditMode={setEditMode}
                submitHandler={submitHandler}
              />
            )}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default TaskList;
