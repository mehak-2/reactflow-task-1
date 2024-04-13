import React, { useState } from "react";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setLastName: (e) => store.updateNode(id, { lastName: e.target.value }),
});

export default function LastNameInput({ id, data }) {
  const [lastName, setLastName] = useState(data.lastName || ""); 

  const { setLastName: setLastNameStore } = useStore(selector(id), shallow);

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setLastNameStore(e); 
  };

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>Last Name</p>
        <input
          className="nodrag"
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </div>
  );
}
