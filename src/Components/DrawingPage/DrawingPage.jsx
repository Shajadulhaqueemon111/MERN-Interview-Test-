import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Stage, Layer, Line, Text } from 'react-konva';
import { useEffect, useState } from 'react';

const DrawingPage = () => {
  const { _id } = useParams();
  const [drawing, setDrawing] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  // Handle window resizing for responsive canvas
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch drawing data
  useEffect(() => {
    axios.get(`http://localhost:5000/drawings/${_id}`)
      .then(response => setDrawing(response.data))
      .catch(error => console.error('Error fetching drawing:', error));
  }, [_id]);

  if (!drawing) return <div>Loading...</div>;

  return (
    <div>
      <h2>Drawing {_id}</h2>
      <Stage width={windowSize.width} height={windowSize.height}>
        <Layer>
          {drawing.type === 'line' && (
            <Line
              points={drawing.points}
              stroke={drawing.stroke}
              strokeWidth={drawing.strokeWidth}
            />
          )}
          {drawing.type === 'text' && (
            <Text
              text={drawing.text}
              x={drawing.x}
              y={drawing.y}
              fontSize={drawing.fontSize}
              fill={drawing.fill || 'black'}  // Optional: setting fill color
            />
          )}
          {/* Add other drawing types here if necessary */}
        </Layer>
      </Stage>
    </div>
  );
};

export default DrawingPage;
