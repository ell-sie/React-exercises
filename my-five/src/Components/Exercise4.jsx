import React from 'react';

function ListItem({ item }) {
  return <li>{item}</li>;
}

function Exercise4() {
  // Create an array of items
  const items = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className='ml-4'>
      <h1 className="text-2xl font-bold mb-4">List of Animals</h1>
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Exercise4;
