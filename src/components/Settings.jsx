import { useState } from "react";

export default function Settings({ setThreshold }) {
  const [value, setValue] = useState(30);

  return (
    <div>
      <input
        type="range"
        min="10"
        max="70"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setThreshold(e.target.value);
        }}
      />
    </div>
  );
}
