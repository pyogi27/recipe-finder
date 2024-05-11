import React from 'react';

function SearchBar({ onSearch }) {
    return (
        <div className="p-4">
            <input
                className="border border-gray-300 p-2 rounded-lg w-full"
                type="text"
                placeholder="Search recipes..."
                onChange={(e) => onSearch(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onSearch()}
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;
