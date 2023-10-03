import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='grid justify-center items-center'>
      <h1>Click Counter</h1>
      <p>Button has been clicked: {count} times</p>
      <button onClick={incrementCount} className="w-20 bg-slate-100 border border-stone-950 rounded-sm">Click me</button>
    </div>
  );
}

export default ClickCounter;
