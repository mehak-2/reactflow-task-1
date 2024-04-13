import React from "react";
import { Handle } from "reactflow";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setType: (e) => store.updateNode(id, { type: e.target.value }),
});

export default function Title({ id, data }) {
  const { setType } = useStore(selector(id), shallow);

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
    <Handle className={tw("w-2 h-2")} type="target" position="top" />
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <select className="nodrag" value={data.type} onChange={setType}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
        </select>
      </label>

      <Handle className={tw("w-2 h-2")} type="source" position="bottom" />
    </div>
  );
}