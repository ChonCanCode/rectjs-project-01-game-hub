import { Fragment, useState } from "react";


function ListGroup() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

 let selectedIndex = 0;
 useState


  return (
    <>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul 
        className="list-group">
          {items.map((item, index) => (
            <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item} 
            onClick={ ()=> {selectedIndex = index; }}
            >
              {item}
              </li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;


