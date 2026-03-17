import { useEffect, useState } from "react";

export default function useEEW() {
  const [eew, setEew] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.code === 556) {
        setEew(data);
      }
    };

    return () => ws.close();
  }, []);

  return eew;
}
