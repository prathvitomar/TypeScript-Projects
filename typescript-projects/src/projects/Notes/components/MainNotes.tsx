import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./NewNote";
import Home from "./Home";
import Layout from "./Layout";
import NoteDetails from "./NoteDetails";

const MainNotes: React.FC = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<NoteDetails/>} />
            <Route path="edit" element={<NewNote />} />
          </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default MainNotes;
