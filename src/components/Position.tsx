import { createContext, useContext } from 'react';
import { TNode } from '../api/types';
import { getNodePositions } from './Position.utils';

const PositionContext = createContext<Record<string, { x: number; y: number }>>(
  {}
);

export const PositionProvider = ({
  children,
  nodes,
}: {
  nodes: TNode[] | undefined;
  children: React.ReactNode;
}) => {
  const positions = getNodePositions(nodes);

  return (
    <PositionContext.Provider value={positions}>
      {children}
    </PositionContext.Provider>
  );
};

export const usePositions = () => {
  return useContext(PositionContext);
};
