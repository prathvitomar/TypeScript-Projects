import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, NoteState, Tag } from "../../types/Notes/noteTypes";
import { initialData } from "./sampleData";

const initialState: NoteState = {
    notes: initialData,
    tags: Array.from(new Set(initialData.flatMap(note => note.tags.map(tag => tag.label)))),
    isLoading: false,
    error: null
};

const NoteSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<{ title: string; markdown: string; tags: Tag[] }>) => {
            const newNote: Note = {
                id: Date.now().toString(),
                title: action.payload.title,
                markdown: action.payload.markdown,
                tags: action.payload.tags
            };
            state.notes.push(newNote);

            action.payload.tags.forEach(tag => {
                if (!state.tags.includes(tag.label)) {
                    state.tags.push(tag.label);
                }
            });
        },
        
        addTag: (state, action: PayloadAction<string>) => {
            if (!state.tags.includes(action.payload)) {
                state.tags.push(action.payload);
            }
        },

        removeTag: (state, action: PayloadAction<string>) => {
            state.tags = state.tags.filter(tag => tag !== action.payload);
        }
    }
});

export const { addNote, addTag, removeTag } = NoteSlice.actions;
export const selectedNotes = (state: { notes: NoteState }) => state.notes.notes;
export const selectTags = (state: { notes: NoteState }) => state.notes.tags;

export default NoteSlice.reducer;
