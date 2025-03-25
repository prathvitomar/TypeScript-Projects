import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit, HabitState } from "../../types/HabitTracker/habit-tracker-types";

const initialState : HabitState = {
    habits : [],
    isLoading : false,
    error : null
}

export const fetchHabits = createAsyncThunk("habitSlice/fetchHabits", async ()=>{
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockHabits: Habit[] = [
      {
        id: "1",
        name: "Read",
        frequency: "daily",
        completedDates: [],
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        name: "Exercise",
        frequency: "daily",
        completedDates: [],
        createdAt: new Date().toISOString(),
      },
    ];
    return mockHabits;
})

export const habitSlice = createSlice({
    name : "habits",
    initialState : initialState,
    reducers : {
        addHabits : (state, action : PayloadAction<{name : string, frequency : 'daily' | 'weekly'}>)=>{
            let newHabits : Habit = {
                id : Date.now().toString(),
                name : action.payload.name,
                frequency : action.payload.frequency,
                completedDates : [],
                createdAt : new Date().toISOString()
            }
            state.habits.push(newHabits);
        },
        removeHabit : (state, action : PayloadAction<{id : string}>) => {
            state.habits = state.habits.filter((h) => h.id !== action.payload.id);
        }
    },
    extraReducers : (builder) => {
        builder.addCase(fetchHabits.pending, (state, action)=>{
            state.isLoading = true;
        }).addCase(fetchHabits.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.habits = action.payload;
        }).addCase(fetchHabits.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message || "Failed to Fetch Habits"
        })
    }
})

export const {addHabits, removeHabit} = habitSlice.actions;
export default habitSlice.reducer