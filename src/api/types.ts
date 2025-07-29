export type TNode = {
  id: string;
  name: string;
  children: string[];
};

export type TEdge = {
  startNodeId: string;
  endNodeId: string;
};
