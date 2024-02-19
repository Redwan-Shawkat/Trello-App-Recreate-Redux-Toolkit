/** @format */

import { useState } from "react";
import { useParams, Link } from "react-router-dom";

import { DragDropContext } from "react-beautiful-dnd";

import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm";
import TaskList from "../components/TaskList";

import { useSelector, useDispatch } from "react-redux";

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

const BoardDetails = () => {
  const board = useSelector((storeState) => storeState.board);
  const list = useSelector((storeState) => storeState.list);
  const task = useSelector((storeState) => storeState.task);

  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState("");

  const { boardId } = useParams();

  

  const renderedList = list.filter((item) => item.boardId === boardId);

  const submitHandler = (e) => {
    e.preventDefault();

    const newListId = Date.now() + "";

    dispatch(CREATE_LIST({
       title: listTitle, 
       boardId: boardId, 
       id: newListId,
    }))

    dispatch(ADD_LIST_ID_TO_A_BOARD({
       id: boardId, 
       listId: newListId,
    }));
    setEditMode(false);
    setListTitle("");
  };

  const dragEndHandler = (result) => {
    const { draggableId, source, destination } = result;
   
    if (!destination) {
      return;
    }
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      dispatch(CHANGE_LIST_ID_OF_A_TASK({
          id: draggableId,
          listId: destination.droppableId,
        }));
    }

    dispatch(SORT_TASK_IDS_IN_LIST({
        draggableId,
        source,
        destination,
    }));
  };

  return (
    <DragDropContext onDragEnd={dragEndHandler}>
      <div className='d-flex m-top-sm flex-direction-row'>
        <Link to='/'>Back to Boards</Link>
        {renderedList.map((taskList) => (
          <TaskList key={taskList.id} taskList={taskList} />
        ))}

        {!editMode ? (
          <AddItem listAddItem={true} setEditMode={setEditMode} />
        ) : (
          <AddItemForm
            title={listTitle}
            listForm={true}
            onChangeHandler={(e) => {
              setListTitle(e.target.value);
            }}
            setEditMode={setEditMode}
            submitHandler={submitHandler}
          />
        )}
      </div>
    </DragDropContext>
  );
};

export default BoardDetails;