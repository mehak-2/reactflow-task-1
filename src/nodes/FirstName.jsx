import React, { useState } from "react";
import { shallow } from "zustand/shallow";
import { tw } from "twind";
import { useStore } from "../store";

const selector = (id) => (store) => ({
  setFirstName: (e) => store.updateNode(id, { firstName: e.target.value }),
});

export default function FirstNameInput({ id, data }) {
  const [firstName, setFirstName] = useState(data.firstName || ""); 

  const { setFirstName: setFirstNameStore } = useStore(selector(id), shallow);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setFirstNameStore(e); 
  };

  return (
    <div className={tw("rounded-md bg-white shadow-xl")}>
      <label className={tw("flex flex-col px-2 pt-1 pb-4")}>
        <p className={tw("text-xs font-bold mb-2")}>First Name</p>
        <input
          className="nodrag"
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
    </div>
  );
}
