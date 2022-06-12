import {Stage,Layer,Line} from "react-konva";

export default function App(){
  return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Line
              x={100}
              y={100}
              points={[0, 0,200,0,100,300]}
              tension="0.5"
              closed
              stroke="black"
              fill="black"
              draggable
          />

        </Layer>
      </Stage>
  );
};