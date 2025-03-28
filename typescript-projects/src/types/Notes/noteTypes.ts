export interface Note {
    id : string;
    title : string;
    markdown : string;
    tags : Tag[];
}

export interface NoteData {
    title : string;
    markdown : string;
    tags : Tag[];
}

export interface NoteState {
    notes :  Note[];
    tags : string[];
    isLoading : false;
    error :  null | string;
}

export interface Tag {
    id : string;
    label : string;
}

export interface NoteFormProps {
    onSubmit : (data : NoteData)=> void;
}