/** @format */

import { useDispatch } from "react-redux";
import { useState } from "react";

import {
  CREATE_BOARD,
  UPDATE_BOARD_TITLE,
  REMOVE_BOARD,
  ADD_LIST_ID_TO_A_BOARD,
  ADD_TASK_ID_TO_A_BOARD,
  REMOVE_LIST_ID_FROM_A_BOARD,
} from "../store/actions/board"



const BoardCreatingForm = () => {
    const [boardTitle, setBoardTitle] = useState("")

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!boardTitle.trim()){
            return alert(`Please Provide a Valid Board Title`)
        }
        dispatch(CREATE_BOARD(boardTitle))
        setBoardTitle("");
    }

    return (
        <div className="align-center m-top-md">
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={boardTitle}
                    onChange={(e) => setBoardTitle(e.target.value)} />
                    <button type="submit"> Create Button </button>
            </form>
        </div>
    )
}

export default BoardCreatingForm;