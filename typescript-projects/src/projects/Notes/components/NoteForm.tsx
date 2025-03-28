import React, { useEffect, useState } from "react";
import { Tag } from "../../../types/Notes/noteTypes";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import {
  addNote,
  editNote,
  getNoteById,
  selectedNotes,
} from "../../../features/Notes/NotesSlice";
import { useNavigate, useParams } from "react-router-dom";

const NoteForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const { id } = useParams<string>();
  const note = useSelector((state: RootState) =>
    id ? getNoteById(state, id) : null
  );

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setMarkdown(note.markdown);
      setSelectedTags(note.tags);
    }
  }, [note]);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const notes = useSelector(selectedNotes);

  const existingTags = Array.from(
    new Set(notes.flatMap((note) => note.tags.map((tag) => tag.label)))
  );

  const filteredTags = existingTags.filter(
    (tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedTags.some((t) => t.label === tag)
  );

  const addTag = (label: string) => {
    if (!selectedTags.some((tag) => tag.label === label)) {
      setSelectedTags([...selectedTags, { id: Date.now().toString(), label }]);
    }
    setSearchTerm("");
  };

  const removeTag = (id: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== id));
  };

  function validate() {
    if (title === "" || markdown === "" || selectedTags.length === 0) {
      return false;
    }
    else{
      return true;
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (id) {
        dispatch(editNote({ id: id, title, markdown, tags: selectedTags }));
      } else {
        dispatch(addNote({ title, markdown, tags: selectedTags }));
      }
      setTitle("");
      setMarkdown("");
      setSelectedTags([]);
      navigate("/");
    }
    else {
      alert("Please Fill all the Fields.!!!")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="p-2 block w-full rounded-md border-gray-300"
                  placeholder="Enter title..."
                />
              </div>
            </div>

            <div className="sm:col-span-3 mt-5">
              <label className="block text-sm font-medium text-gray-900">
                Tags
              </label>
              <div className="flex flex-wrap items-center gap-2 border border-gray-300 p-2 rounded-lg">
                {selectedTags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    {tag.label}
                    <button
                      onClick={() => removeTag(tag.id)}
                      className="text-white ml-1 hover:text-gray-200"
                    >
                      ✕
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  placeholder="Search or add tag..."
                  className="flex-1 p-2 outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchTerm.trim()) {
                      addTag(searchTerm.trim());
                      e.preventDefault();
                    }
                  }}
                />
              </div>

              {searchTerm && filteredTags.length > 0 && (
                <ul className="border border-gray-300 rounded-lg mt-2 bg-white shadow-md">
                  {filteredTags.map((result) => (
                    <li
                      key={result}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => addTag(result)}
                    >
                      {result}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-gray-900">
                Markdown
              </label>
              <textarea
                rows={6}
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300"
                placeholder="Write your markdown here..."
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="sm:col-span-3 mt-5 flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5"
            >
              Submit
            </button>
            <button
              type="button"
              className="py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
              onClick={() => navigate("..")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default NoteForm;
