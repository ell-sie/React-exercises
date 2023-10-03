import React from 'react';

function Button({ onClick, children }) {
  const handleClick = () => {
    if (onClick) {
      onClick((children));
    }
  };

  return (
    <button onClick={handleClick} className="w-20 bg-slate-100 border border-stone-950 rounded-sm">
      {children}
    </button>
  );
}

function Exercise2() {
  const handleButtonClick = (buttonText) => {
    alert(`Button "${buttonText}" was clicked.`);
  };

  return (
    <div className='flex gap-6'>
      <Button onClick={handleButtonClick}>Button 1</Button>
      <Button onClick={handleButtonClick}>Button 2</Button>
      <Button onClick={handleButtonClick}>Button 3</Button>
    </div>
  );
}

export default Exercise2;
