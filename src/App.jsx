import { useState } from "react";
import EEWAlert from "./components/EEWAlert";
import QuakeList from "./components/QuakeList";
import MapView from "./components/MapView";
import Settings from "./components/Settings";

export default function App() {
  const [threshold, setThreshold] = useState(30);

  return (
    <div className="p-4">
      <h1 className="text-3xl glitch">
        ▶ EQPiS // Earthquake Intelligence System
      </h1>

      <div className="border border-green-500 p-2 mt-2">
        STATUS: ONLINE
      </div>

      <Settings setThreshold={setThreshold} />
      <EEWAlert threshold={threshold} />
      <MapView />
      <QuakeList />
    </div>
  );
}
