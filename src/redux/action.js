export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const TOGGLE_COMPLETION = "TOGGLE_COMPLETION";
export const LOAD_INITIAL_STATE = "LOAD_INITIAL_STATE";

export const loadInitialState = () => ({
  type: LOAD_INITIAL_STATE,
});

export const addNote = (newNote) => ({
  type: ADD_NOTE,
  payload: newNote,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const toggleCompletion = (id) => ({
  type: TOGGLE_COMPLETION,
  payload: id,
});
