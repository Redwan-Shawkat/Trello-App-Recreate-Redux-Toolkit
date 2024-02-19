/** @format */

import { useState} from "react";
import { Draggable } from "react-beautiful-dnd";

import { useSelector, useDispatch } from "react-redux";

import { icons } from "../assets";

import AddItemForm from "./AddItemForm";

import {
  CREATE_TASK,
  UPDATE_TASK_TITLE,
  CHANGE_LIST_ID_OF_A_TASK,
  CHANGE_BOARD_ID_OF_A_TASK,
  REMOVE_TASK
} from "../store/actions/task";

import {
  CREATE_BOARD,
  UPDATE_BOARD_TITLE,
  REMOVE_BOARD,
  ADD_LIST_ID_TO_A_BOARD,
  ADD_TASK_ID_TO_A_BOARD,
  REMOVE_LIST_ID_FROM_A_BOARD,
  REMOVE_TASK_ID_FROM_A_BOARD,
} from "../store/actions/board";

import {
  CREATE_LIST,
  UPDATE_LIST_NAME,
  REMOVE_LIST,
  CHANGE_BOARD_ID_OF_A_LIST,
  ADD_TASK_ID_TO_A_LIST,
  REMOVE_TASK_ID_FROM_A_LIST,
  SORT_TASK_IDS_IN_LIST
} from "../store/actions/list";



export const TaskCard = ({ task, index }) => {
  const dispatch = useDispatch();

  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    
    dispatch(UPDATE_TASK_TITLE({
      id: task.id,
      title: taskTitle,
    }));

    setEditMode(false);
  };

  const removeHandler = () => {
    
    dispatch(REMOVE_TASK({
      payload: task.id,
    }));

    dispatch(REMOVE_TASK_ID_FROM_A_LIST({
        id: task.listId,
        taskId: task.id,
      
    }));

    dispatch(REMOVE_TASK_ID_FROM_A_BOARD({
        id: task.boardId,
        taskId: task.id,
     
    }));
  }

  return (
		<Draggable draggableId={task.id} index={index}>
			{(provided) => {
				
				return (
					<div
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						ref={provided.innerRef}
					>
						{!editMode ? (
							<div
								onClick={() => setEditMode(true)}
								className="task-card"
							>
								<p>{task.title}</p>
								<img
									src={icons.crossIcon}
									alt=""
									className="add-item-icon"
									onClick={removeHandler}
								/>
							</div>
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
					</div>
				);
			}}
		</Draggable>
	);
};

// export default TaskCard;
