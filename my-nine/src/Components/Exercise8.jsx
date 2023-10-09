import React, { useState, useEffect } from 'react';

function UserCard({ user }) {
  return (
  <div class="group h-96  [perspective:1000px]">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0 flex flex-col gap-3 p-3 justify-center items-center rounded-xl shadow-xl shadow-black/40 bg-slate-100">
        <img class="rounded-xl object-cover" src={user.avatar} alt=""/>
        <h1 class="text-3xl font-bold">{user.first_name} {user.last_name}</h1>
          <p class="text-lg">{user.employment.title}</p>
      </div>
      <div class="absolute bg-slate-100  inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">More Information here</h1>
        </div>
      </div>
    </div>
  </div>
  );
}

function Exercise8() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleReloadClick = () => {
    // Reload users when the button is clicked
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  return (
    <div className='bg-blue-200 flex flex-col justify-center items-center p-24'>
      <h1 className="text-2xl font-bold mb-4 ml-4">User Information</h1>

      <button 
      onClick={handleReloadClick}
      className=" text-white bg-red-600 font-bold p-3 m-2 rounded-lg"
      >Fetch Random</button>

      <div className="grid grid-cols-2 w-1/2 gap-7">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Exercise8;
