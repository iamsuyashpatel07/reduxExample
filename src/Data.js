import React from "react";

export default function Data({ idk }) {
  console.log(idk);
  if (idk) {
    return idk.map((id) => {
      return (
        <div key={id}>
          {id.name}
          <br />
        </div>
      );
    });
  }
}
