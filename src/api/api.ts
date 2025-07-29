import mockNodes from './mockNodes.json';
import { TNode } from './types';

export const getNodes = async () => {
  return new Promise<{ nodes: TNode[] }>(resolve => {
    setTimeout(() => resolve(mockNodes), 1000);
  });
};

export const saveNodes = async (nodes: TNode[]) => {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), 1000);
  });
};
