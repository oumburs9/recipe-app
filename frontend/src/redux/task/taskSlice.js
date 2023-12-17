import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  tasks: [],
  error: '',
};
// http://127.0.0.1:4000/api/tasks
//https://648225a929fa1c5c5032a482.mockapi.io/api/v1/tasks
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('http://127.0.0.1:4000/api/tasks');
  return response.data;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ _id, updatedTask }) => {
  const response = await axios.put(`http://127.0.0.1:4000/api/tasks/${_id}`, updatedTask);
  return response.data;
});

export const createTask = createAsyncThunk('tasks/createTask', async (newTask) => {
  const response = await axios.post('http://127.0.0.1:4000/api/tasks', newTask);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await axios.delete(` http://127.0.0.1:4000/api/tasks/${taskId}`);
  return taskId;
});

const taskSlice = createSlice({
  name: 'task',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
        state.error = '';
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.loading = false;
        state.tasks = [];
        state.error = action.error.message;
      })
      .addCase(updateTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.loading = false;
        const updatedTaskIndex = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (updatedTaskIndex !== -1) {
          state.tasks[updatedTaskIndex] = action.payload;
        }
        state.error = '';
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks.push(action.payload);
        state.error = '';
      })
      .addCase(createTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTask.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        state.error = '';
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taskSlice.reducer;

