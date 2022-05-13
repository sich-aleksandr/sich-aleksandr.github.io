import { createSlice } from "@reduxjs/toolkit";

export const { actions, reducer } = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      { id: 1, title: "title", photo: '', tags: ['Люди'],  isDone: true },
      { id: 2, title: "title", photo: '', tags: ['Животные'], isDone: true },
      { id: 3, title: "title", photo: '', tags: ['Люди'], isDone: false },
      { id: 4, title: "title", photo: '', tags: ['Люди'], isDone: false },
    ]
  },
  reducers: {
    deleteTask: (state, action) => {
      return {
        tasks: state.tasks.filter(
          ({ id: taskID }) => taskID !== action.payload
        )
      };
    },
    toggleTask: (state, action) => {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id !== action.payload) {
            return task;
          }
          return { ...task, isDone: !task.isDone };
        }),
      };
    },
  },
});
