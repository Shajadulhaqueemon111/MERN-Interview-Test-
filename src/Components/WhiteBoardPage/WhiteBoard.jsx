import { useState, useEffect } from "react";

const WhiteBoard = () => {
  const [drawings, setDrawings] = useState([
   
  ]);

  useEffect(() => {
    // Fetch additional drawings from a backend
    fetch('http://localhost:5000/drawings') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => {
        // Merge the fetched drawings with the existing drawings
        setDrawings((prevDrawings) => [...prevDrawings, ...data]);
      })
      .catch((error) => console.error('Error fetching drawings:', error));
  }, []); // This will fetch data once when the component mounts

  return (
    <svg className="mx-auto" width="350" height="350" style={{ border: '1px solid black' }}>
      {drawings.map((drawing) => {
        switch (drawing.type) {
          case 'line':
            return (
              <line
                key={drawing.id}
                x1={drawing.startPoint.x}
                y1={drawing.startPoint.y}
                x2={drawing.endPoint.x}
                y2={drawing.endPoint.y}
                stroke={drawing.strokeColor}
                strokeWidth={drawing.strokeWidth}
              />
            );
          case 'rectangle':
            return (
              <rect
                key={drawing.id}
                x={drawing.topLeft.x}
                y={drawing.topLeft.y}
                width={drawing.width}
                height={drawing.height}
                fill={drawing.fillColor}
                stroke={drawing.strokeColor}
                strokeWidth={drawing.strokeWidth}
              />
            );
          case 'text':
            return (
              <text
                key={drawing.id}
                x={drawing.position.x}
                y={drawing.position.y}
                fontSize={drawing.fontSize}
                fill={drawing.fontColor}
              >
                {drawing.content}
              </text>
            );
          default:
            return null;
        }
      })}
    </svg>
  );
};

export default WhiteBoard;
