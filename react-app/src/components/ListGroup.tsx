import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

 let selectedIndex = 0;
  
  const handleClick = (event: MouseEvent) => console.log(event)


  
  return (
    <>
        <h1>List</h1>
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
          {items.map((index, item) => (
            <li className="list-group-item active" 
            key={index} 
            onClick={handleClick}
            >
              {index}
              </li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;


