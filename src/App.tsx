import { useState } from 'react';
import { Node } from './components/Node';
import { PositionProvider } from './components/Position';
import { TNode, TEdge } from './api/types';
import { Edge } from './components/Edge';
import './App.css';

export const App = () => {
  const [nodes, setNodes] = useState<TNode[]>();

  // TODO: 1. Load nodes using getNodes function

  const onRenameNode = (nodeId: string, newName: string) => {
    // TODO: 4. Allow renaming nodes
  };

  const onDeleteNode = (nodeId: string) => {
    // TODO: 5. Allow deleting nodes
  };

  // TODO: 6. Debounce saving of nodes after updates

  // TODO: 2. Create edges between nodes
  const edges: TEdge[] = [];

  return (
    <div className='app-container'>
      <h1>Nodes</h1>
      <div className='nodes-container'>
        <PositionProvider nodes={nodes}>
          {nodes?.map(node => (
            <Node key={node.id} node={node} />
          ))}
          {edges?.map(edge => (
            <Edge key={`${edge.startNodeId}-${edge.endNodeId}`} edge={edge} />
          ))}
        </PositionProvider>
      </div>
    </div>
  );
};
