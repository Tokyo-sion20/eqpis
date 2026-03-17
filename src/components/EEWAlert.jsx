import useEEW from "../hooks/useEEW";
import useLocation from "../hooks/useLocation";
import { useEffect } from "react";

export default function EEWAlert({ threshold }) {
  const eew = useEEW();
  const location = useLocation();

  useEffect(() => {
    if (!eew) return;

    if (eew.earthquake.maxScale < threshold) return;

    const audio = new Audio("/alert.mp3");
    audio.play();

    if (Notification.permission === "granted") {
      new Notification("EEW ALERT", {
        body: eew.earthquake.hypocenter.name
      });
    }
  }, [eew]);

  if (!eew) return null;

  return (
    <div className="border border-red-500 p-3 mt-3 animate-pulse">
      🚨 EEW: {eew.earthquake.hypocenter.name}
    </div>
  );
}
