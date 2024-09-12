
import { useEffect, useState } from 'react';

const DrawingsList = () => {
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/drawings')
      .then(response => response.json())
      .then(data => setDrawings(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Drawings</h2>
      <ul>
        {drawings.map(drawing => (
          <li key={drawing._id}>
           <div>
            <li>{drawing.type}</li>
            <li>{drawing.points}</li>
            <li>{drawing.stroke}</li>
            <li>{drawing.strokeWidth}</li>
           </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawingsList;
