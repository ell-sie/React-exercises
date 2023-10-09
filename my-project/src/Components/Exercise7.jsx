import React from 'react';

// Custom Joke component
function Joke({ joke }) {
  return (
    <div className="joke bg-white p-5 m-2 rounded-lg">
      <p className="text-2xl font-bold mb-4">{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
}

function Exercise7() {
  // Array of JSON objects (jokes)
  const jokes = [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    }
  ];

  return (
    <div className='bg-green-200 p-10'>
      <h1 className="text-2xl font-bold mb-4 ml-4">Jokes</h1>
      <div className="flex flex-row gap-3">
        {jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    </div>
  );
}

export default Exercise7;
