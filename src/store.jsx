import { applyNodeChanges } from "reactflow";
import { nanoid } from "nanoid";
import { create } from "zustand";

export const useStore = create((set, get) => ({
  nodes: [
    {
      id: "title",
      type: "title",
      data: { },
      position: { x: 0, y: -100 },
    },
    {
      id: "firstname",
      type: "firstname",
      data: {},
      position: { x: -100, y: 100 },
    },
    {
      id: "lastname",
      type: "lastname",
      data: { },
      position: { x: 50, y: 250 },
    },
  ],
  createNode(type, x, y) {
    const id = nanoid();
    set({
      nodes: [
        ...get().nodes,
        {
          id,
          type,
          data: {},
          position: { x, y },
        },
      ],
    });
  },
  updateNode(id, data) {
    set({
      nodes: get().nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, ...data } } : node
      ),
    });
  },
  onNodesChange(changes) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  
}));
