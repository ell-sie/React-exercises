import React from "react";

export default function Exercise() {
  // Define a click event handler function
  const handleClick = () => {
    alert("Clicked!");
  };

  return (
    <div className="p-10 text-center">
    <button onClick={handleClick} className=" w-20 bg-slate-100 border border-stone-950 rounded-sm">
      Click me
    </button>
    </div>
  );
}

