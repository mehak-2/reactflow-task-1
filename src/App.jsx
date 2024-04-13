import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
} from "reactflow";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";
import { tw } from "twind";
import Title from "./nodes/Title";
import FirstName from "./nodes/FirstName";
import LastName from "./nodes/LastName";
import FullName from "./nodes/FullName"; 

import "reactflow/dist/style.css";

const nodeTypes = {
  fullName: FullName,
  title: Title,
  firstname: FirstName,
  lastname: LastName,
};

const selector = (store) => ({
  nodes: store.nodes,
  edges: store.edges,
  onNodesChange: store.onNodesChange,
  addEdge: store.addEdge,
  addFullName: () => store.createNode("fullName"),
});

export default function App() {
  const store = useStore(selector, shallow);
  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={store.nodes}
      edges={store.edges}
      onNodesChange={store.onNodesChange}
      onConnect={store.addEdge}
      fitView
    >
      <Panel className={tw("space-x-4")} position="top-right">
        <button
          className={tw("px-2 py-1 rounded bg-white shadow")}
          onClick={store.addFullName}
        >
          Display Full Name
        </button>
      </Panel>
      <Controls/>
      <MiniMap/>
      <Background />
    </ReactFlow>
  );
}
