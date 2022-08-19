import React from "react";
import { useSelector } from "react-redux";

export default function Data() {
  const list = useSelector((state) => state.todoReducer.list);

  return list.map((id) => {
    return (
      <div key={id}>
        {id.name}
        <br />
      </div>
    );
  });
}
