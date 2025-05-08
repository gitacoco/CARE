import React from "react";
import { ContainerByAnima } from "./sections/ContainerByAnima/ContainerByAnima";
import { TopAreaByAnima } from "./sections/TopAreaByAnima";

export const UnitConcept = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen items-start gap-2 pt-2 pb-4 px-4 relative bg-[#f7f9fb]">
      <TopAreaByAnima />
      <ContainerByAnima />
    </div>
  );
};
