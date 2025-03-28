import React from "react";
import { deleteNote, getNoteById } from "../../../features/Notes/NotesSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";

const NoteDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const note = useSelector((state: RootState) => getNoteById(state, id!));

  function handleDelete(id : string){
    dispatch(deleteNote({id}));
    navigate('/')
  }

  if (!note) {
    return <p>....Loading</p>;
  }

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="flex">
              <button
                onClick={() => navigate(`/${note.id}/edit`)}
                className="m-5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5"
                >
                Edit
              </button>
              <button
                onClick={() => handleDelete(note.id)}
                className="m-5 border border-rose-800 text-red-600 hover:bg-red-800 font-medium rounded-full text-sm px-5 py-2.5"
                >
                Delete
              </button>
                </div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {note.title}
              </h1>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Tags :
                </span>
                <div className="flex items-center mt-2">
                  {note.tags &&
                    note.tags.map((note) => (
                      <button
                        key={note.id}
                        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                      >
                        {note.label}
                      </button>
                    ))}
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Note Description:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {note.markdown}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteDetails;
