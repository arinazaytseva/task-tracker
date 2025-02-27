import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RichTaskType } from '@globals/types/types';

type SpaceState = {
  tasks: RichTaskType[];
};

const initialState: SpaceState = {
  tasks: [],
};

const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<{ tasks: RichTaskType[] }>) => {
      state.tasks = action.payload.tasks;
    },
    changeTaskStatus: (
      state,
      action: PayloadAction<{ taskId: string; statusId: string }>
    ) => {
      const { taskId, statusId } = action.payload;

      const taskToChange = {
        ...state.tasks?.filter((task) => task.id === taskId)[0],
      };
      taskToChange.statusId = statusId;

      console.log('taskToChange', taskToChange);

      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      state.tasks.push(taskToChange);
    },
    updateTask: (
      state,
      action: PayloadAction<{ taskId: string; task: RichTaskType }>
    ) => {
      const { taskId, task } = action.payload;

      state.tasks = state.tasks.filter((task) => task?.id !== taskId);
      state.tasks.push(task);
    },
  },
});

export const { setTasks, changeTaskStatus, updateTask } = spaceSlice.actions;

export default spaceSlice.reducer;
