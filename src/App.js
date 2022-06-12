import {Stage,Layer,Line} from "react-konva";

export default function App(){
  return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Line
              x={20}
              y={200}
              points={[145, 200,100,120,180,120]}
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