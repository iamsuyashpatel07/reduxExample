import React, { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { addName } from "./action/index";
import { callData } from "./store/store";
import Data from "./Data";
function App() {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="App-header">
      <div className="flex flex-col">
        <div>Name</div>
        <div className="mt-2">
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className="bg-gray-500 rounded-md text-sm pl-2 py-4 w-[18rem]"
          />
        </div>
        <div className="mt-2">
          <button
            type="Submit"
            onClick={() => dispatch(addName(inputData), setInputData(""))}
            className="border-1 border-black bg-violet-500 rounded-md px-4 py-2 text-center text-yellow-200 "
          >
            submit
          </button>
        </div>
      </div>
      <div className="ml-[15%] flex flex-col">
        <button
          className="bg-pink-500 text-black text-center p-2 rounded-md"
          onClick={() => {
            dispatch(callData());
          }}
        >
          Call Data
        </button>
        <Data />
      </div>
    </div>
  );
}

export default App;
