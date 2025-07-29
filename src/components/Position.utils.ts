import { TNode } from '../api/types';

const calculateNodeDepths = (nodes: TNode[]): Record<string, number> => {
  const depths: Record<string, number> = {};

  // Find root nodes (nodes that aren't children of any other node)
  const allChildIds = new Set(nodes.flatMap(node => node.children));
  const rootNodes = nodes.filter(node => !allChildIds.has(node.id));

  // Calculate depth for each node starting from roots
  const calculateDepth = (nodeId: string, currentDepth: number) => {
    depths[nodeId] = Math.max(depths[nodeId] || 0, currentDepth);

    const node = nodes.find(n => n.id === nodeId);
    if (node) {
      node.children.forEach(childId => {
        calculateDepth(childId, currentDepth + 1);
      });
    }
  };

  rootNodes.forEach(root => {
    calculateDepth(root.id, 0);
  });

  return depths;
};

// TODO: 3. Calculate node positions
export const getNodePositions = (nodes: TNode[] | undefined) => {
  if (!nodes) return {};
  const depths = calculateNodeDepths(nodes);
  return (
    nodes?.reduce(
      (acc, node, index) => {
        acc[node.id] = { x: 0, y: index * 100 };
        return acc;
      },
      {} as Record<string, { x: number; y: number }>
    ) ?? {}
  );
};