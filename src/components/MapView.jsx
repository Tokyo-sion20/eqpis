import { MapContainer, TileLayer } from "react-leaflet";

export default function MapView() {
  return (
    <MapContainer center={[35, 139]} zoom={5} className="h-64 mt-3">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
}
