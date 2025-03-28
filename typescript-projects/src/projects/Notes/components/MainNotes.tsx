import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./NewNote";
import Home from "./Home";
import Layout from "./Layout";

const MainNotes: React.FC = () => {
  return (
    <>
      {/* <div className="bg-white">
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Notes
        </dd>
      </div> */}
      <div>
        <Routes>
          <Route path="/" element={<Layout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<h2>ID</h2>} />
            <Route path="edit" element={<h3>Edit</h3>} />
          </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default MainNotes;
