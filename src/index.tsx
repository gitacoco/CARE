import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UnitConcept } from "./screens/UnitConcept/UnitConcept";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <UnitConcept />
  </StrictMode>,
);
