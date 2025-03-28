import { configureStore } from '@reduxjs/toolkit'
import habitReducer from '../features/HabitTracker/habit-slice';
import noteReducer from '../features/Notes/NotesSlice.ts';

const store = configureStore({
    reducer : {
        habits : habitReducer,
        notes : noteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;