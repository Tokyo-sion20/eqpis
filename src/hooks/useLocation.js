import { useEffect, useState } from "react";

export default function useLocation() {
  const [pos, setPos] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((p) => {
      setPos({
        lat: p.coords.latitude,
        lng: p.coords.longitude
      });
    });
  }, []);

  return pos;
}
