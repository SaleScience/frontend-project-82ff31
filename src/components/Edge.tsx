import { usePositions } from './Position';
import { TEdge } from '../api/types';

type TEdgeProps = {
  edge: TEdge;
};

export const Edge = ({ edge }: TEdgeProps) => {
  const positions = usePositions();

  const startPos = positions[edge.startNodeId];
  const endPos = positions[edge.endNodeId];

  if (!startPos || !endPos) {
    return null;
  }

  const startX = startPos.x + 74;
  const startY = startPos.y + 70;
  const endX = endPos.x + 74;
  const endY = endPos.y;

  const width = Math.abs(startX - endX);
  const leftToRight = startX < endX;
  const height = Math.abs(startY - endY);
  const topToBottom = startY < endY;

  const left = Math.min(startX, endX);
  const top = Math.min(startY, endY);

  return (
    <svg
      width={Math.max(width, 2)}
      height={Math.max(height, 2)}
      viewBox={`0 0 ${Math.max(width, 2)} ${Math.max(height, 2)}`}
      preserveAspectRatio='none'
      className='edge'
      style={{
        left,
        top,
      }}
    >
      <line
        x1={leftToRight ? 0 : width}
        y1={topToBottom ? 0 : height}
        x2={leftToRight ? width : 0}
        y2={topToBottom ? height : 0}
        stroke='black'
        strokeWidth={2}
      />
    </svg>
  );
};
