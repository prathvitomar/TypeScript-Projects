export interface Habit {
    id : string;
    name : string;
    frequency : "daily" | "weekly";
    completedDates : string[];
    createdAt : string;
}

export interface HabitState {
    habits : Habit[];
    isLoading : boolean;
    error : string | null;
}