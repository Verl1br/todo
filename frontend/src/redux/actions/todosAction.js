import axios from "axios";
import { DELETE_TODOS_FAILURE, DELETE_TODOS_REQUEST, DELETE_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_FAILURE, POST_TODOS_REQUEST, POST_TODOS_SUCCESS } from "../constants/todosConstant";

export const getAllTodos = async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  try {
    const res = await axios.get("http://localhost:5000/todo/list");
    dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_TODOS_FAILURE, payload: error });
  }
};

export const createTodo = (payload) => async (dispatch) => {
  dispatch({ type: POST_TODOS_REQUEST });

  try {
    const res = await axios.post("http://localhost:5000/todo/create", {
      title: payload.todoTitle,
      description: payload.todoDescription,
    });
    dispatch({ type: POST_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: POST_TODOS_FAILURE, payload: error });
  }
};

export const deleteTodo = (payload) => async (dispatch) => {
  dispatch({ type: DELETE_TODOS_REQUEST });

  try {
    const res = await axios.delete("http://localhost:5000/todo/delete/" + payload.todoId);
    dispatch({ type: DELETE_TODOS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: DELETE_TODOS_FAILURE, payload: error });
  }
};
