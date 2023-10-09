import React, { useState } from 'react';

function GreetForm() {
  // Initialize state variables for first name and last name
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // Function to handle changes in the input fields
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  // Function to handle the button click and display the greeting
  const handleGreetClick = () => {
    alert(`Hello ${firstName} ${lastName}!`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ml-4" >Greet Me</h1>
      <div className='grid grid-rows-3 gap-1 justify-center items-center'>
        <input
          className="bg-blue-200 p-2 m-2 rounded-lg"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          className="bg-blue-200 p-2 m-2 rounded-lg"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <button 
        onClick={handleGreetClick}
        className="bg-pink-200 p-2 m-2 rounded-lg"
        >Greet Me</button>
      </div>
    </div>
  );
}

function Exercise6() {
  return (
    <div>
      <GreetForm />
    </div>
  );
}

export default Exercise6;
