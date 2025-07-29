import { TNode } from '../api/types';
import { usePositions } from './Position';

type TNodeProps = {
  node: TNode;
};

export const Node = ({ node }: TNodeProps) => {
  const positions = usePositions();
  const position = positions[node.id];

  return (
    <div className='node' style={{ left: position.x, top: position.y }}>
      <span>{node.name}</span>
      <div className='node-actions'>
        <button>Rename</button>
        <button>Delete</button>
      </div>
    </div>
  );
};
