import React from 'react';

// Custom ListItem component
function ListItem({ item }) {
  return (
    <div className="bg-blue-200 p-2 m-2 rounded-lg">
      {item}
    </div>
  );
}

// ItemList component that accepts a list prop
function ItemList({ list }) {
  return (
    <div className="item-list">
      {list.map((item, index) => (
        <ListItem key={index} item={item} />
      ))}
    </div>
  );
}

function Exercise5() {
  // List of items
  const items = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Custom Item List</h1>
      <ItemList list={items} />
    </div>
  );
}

export default Exercise5;
