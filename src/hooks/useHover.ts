import { useState } from "react";

export function useHover() {
  const [showDetails, setShowDetails] = useState(false);

  function onmouseover() {
    setShowDetails(true);
  }

  function onmouseleave() {
    setShowDetails(false);
  }

  return {
    onmouseleave,
    onmouseover,
    showDetails,
  };
}
