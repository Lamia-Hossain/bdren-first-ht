import React, { useState, useEffect } from "react";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const showSearch = () => {
    setIsSearchClicked(true);
  };

  const closeSearch = () => {
    setFilteredData([]);
    setWordEntered("");
    setIsSearchClicked(false);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="h-screen">
      <div className="p-3 flex flex-col gap-y-2 justify-center">
        {!isSearchClicked ? (
          <div className="bg-slate-300 hover:bg-slate-400 hover:text-white text-black rounded-lg px-3 py-1 m-auto w-max">
            <button onClick={showSearch}>Search</button>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-2 justify-center">
              <div className="flex flex-row justify-center">
                <input
                  className="focus:outline-none bg-white border rounded-lg text-base p-4 w-[300px] h-[30px]"
                  type="text"
                  placeholder={placeholder}
                  value={wordEntered}
                  onChange={handleFilter}
                />
                {filteredData.length !== 0 ? (
                  <button
                    className="text-2xl ml-[-24px] mt-[-8px] hover:scale-110 transition-transform duration-300"
                    onClick={clearInput}
                  >
                    &times;
                  </button>
                ) : (
                  []
                )}
              </div>
              <button
                className="bg-slate-300 hover:bg-slate-400 hover:text-white text-black rounded-lg px-3 py-1 m-auto w-max"
                onClick={closeSearch}
              >
                Close
              </button>
            </div>
          </>
        )}
      </div>
      {filteredData.length === 0 && isSearchClicked && (
        <div className="mx-auto border-slate-400 rounded-lg overflow-auto scroll-m-0 shadow-lg shadow-indigo-500/40 mt-[5px] w-[300px] h-1/3">
          {data.map((value, key) => {
            return (
              <div className="w-full flex items-center" key={key}>
                <a
                  className="hover:bg-gray-200 py-3 w-full"
                  href={value.last_name}
                  target="_blank"
                >
                  <p className="ml-[10px]">{value.first_name}</p>
                </a>
              </div>
            );
          })}
        </div>
      )}
      {filteredData.length !== 0 && isSearchClicked && (
        <div className="mx-auto border-slate-400 rounded-lg overflow-auto shadow-lg shadow-indigo-500/40 mt-[5px] w-[300px] h-max">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div className="w-full flex items-center" key={key}>
                <a
                  className="hover:bg-gray-200 py-3 w-full"
                  href={value.last_name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="ml-[10px]">{value.first_name}</p>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
