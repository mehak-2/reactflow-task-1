import React from "react";
import { useStore } from "../store"; 

export default function FullName() {
  const nodes = useStore((state) => state.nodes);

  const titleData = nodes.find((node) => node.type === "title")?.data || {};
  const firstnameData = nodes.find((node) => node.type === "firstname")?.data || {};
  const lastnameData = nodes.find((node) => node.type === "lastname")?.data || {};
  
  const fullName = `${titleData.type || ""} ${firstnameData.firstName || ""} ${lastnameData.lastName || ""}`;

  return (
    <div>
      <p>{fullName}</p>
    </div>
  );
}
