import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate()
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <div className="hidden sm:ml-6 sm:block">
                    <Link to="/">
                  <div className="flex space-x-2 justify-between align-center">
                    <dd className="text-white font-semibold sm:text-3xl">
                      Notes
                    </dd>
                  </div>
                    </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
                <button
                  type="button"
                  onClick={()=> navigate("/new")}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Create New Note
                </button>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
