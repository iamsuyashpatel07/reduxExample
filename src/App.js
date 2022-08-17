import React, { useState } from "react";
import "./App.css";
import Data from "./Data";
function App() {
  const [metadata, setMetadata] = useState(null);
  async function exampleFetch() {
    console.log("suyash");
    const response = await fetch("https://swapi.dev/api/people");
    const json = await response.json();
    setMetadata(json.results);
  }
  return (
    <div className="App-header">
      <div className="flex flex-col">
        <div>Name</div>
        <div className="mt-2">
          <input
            type="text"
            className="bg-gray-500 rounded-md text-sm pl-2 py-4 w-[18rem]"
          />
        </div>
        <div className="mt-2">
          <input
            type="Submit"
            value="submit"
            className="border-1 border-black bg-violet-500 rounded-md px-4 py-2 text-center text-yellow-200 "
          />
        </div>
      </div>
      <div className="ml-[40rem] flex flex-col">
        <button
          className="bg-pink-500 text-black text-center p-2 rounded-md"
          onClick={exampleFetch}
        >
          Call Data
        </button>
        <Data idk={metadata} />
      </div>
    </div>
  );
}

export default App;
