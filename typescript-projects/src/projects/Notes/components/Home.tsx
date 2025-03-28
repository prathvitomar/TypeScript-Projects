import React, { useState } from "react";
import { Tag } from "../../../types/Notes/noteTypes";
import { useSelector } from "react-redux";
import { selectedNotes } from "../../../features/Notes/NotesSlice";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [titleSearch, setTitleSearch] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const notes = useSelector(selectedNotes);

  const allTags = Array.from(
    new Set(notes.flatMap((note) => note.tags.map((tag) => tag.label)))
  );

  const filteredTagResults = allTags.filter(
    (tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedTags.some((t) => t.label === tag)
  );

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(titleSearch.toLowerCase()) &&
    selectedTags.every((tag) =>
      note.tags.some((noteTag) => noteTag.label === tag.label)
    )
  );

  const addTag = (tagLabel: string) => {
    const newTag: Tag = { id: Date.now().toString(), label: tagLabel };
    setSelectedTags([...selectedTags, newTag]);
    setSearchTerm("");
  };

  const removeTag = (tagId: string) => {
    setSelectedTags(selectedTags.filter((t) => t.id !== tagId));
  };

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label className="block text-sm font-medium text-gray-900">Search by Title</label>
          <div className="mt-2">
            <input
              type="text"
              name="titleSearch"
              value={titleSearch}
              onChange={(e) => setTitleSearch(e.target.value)}
              className="p-2 block w-full rounded-md border-gray-300"
              placeholder="Type title to search..."
            />
          </div>
        </div>

        <div className="sm:col-span-3 mt-5">
          <label className="block text-sm font-medium text-gray-900">Filter by Tags</label>
          <div className="flex flex-wrap items-center gap-2 border border-gray-300 p-2 rounded-lg">
            {selectedTags.map((tag) => (
              <span key={tag.id} className="bg-blue-500 text-white px-2 py-1 rounded-md flex items-center gap-1">
                {tag.label}
                <button onClick={() => removeTag(tag.id)} className="text-white ml-1 hover:text-gray-200">✕</button>
              </span>
            ))}
            <input
              type="text"
              placeholder="Search tags..."
              className="flex-1 p-2 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {searchTerm && filteredTagResults.length > 0 && (
            <ul className="border border-gray-300 rounded-lg mt-2 bg-white shadow-md">
              {filteredTagResults.map((result) => (
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
      </div>

      <div className="sm:col-span-3 mt-5 grid grid-cols-3 gap-5">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div key={note.id} className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{note.title}</div>
                <p className="text-gray-700 text-base">{note.markdown}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {note.tags.map((tag) => (
                  <span onClick={() => addTag(tag.label)} key={tag.id} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-3">No notes found matching the search criteria.</p>
        )}
      </div>
    </>
  );
};

export default Home;