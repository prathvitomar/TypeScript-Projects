import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout : React.FC = () =>{
    return (
        <>
            <Navbar/>
            <div className="p-5">
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;