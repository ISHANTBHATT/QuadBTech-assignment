import { ADD_NOTE, DELETE_NOTE, TOGGLE_COMPLETION } from "./action";

const initialState = JSON.parse(localStorage.getItem("notes")) || { notes: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newStateAdd = {
        ...state,
        notes: [...state.notes, action.payload],
      };
      localStorage.setItem("notes", JSON.stringify(newStateAdd));
      return newStateAdd;
    case DELETE_NOTE:
      const newStateDelete = {
        ...state,
        notes: state.notes.filter((note, index) => index !== action.payload),
      };
      localStorage.setItem("notes", JSON.stringify(newStateDelete));
      return newStateDelete;
    case TOGGLE_COMPLETION:
      const newStateToggle = {
        ...state,
        notes: state.notes.map((note, index) => {
          if (index === action.payload) {
            return { ...note, completed: !note.completed };
          }
          return note;
        }),
      };
      localStorage.setItem("notes", JSON.stringify(newStateToggle));
      return newStateToggle;
    default:
      return state;
  }
};

export default reducer;
