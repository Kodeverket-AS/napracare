"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export function Map() {
  if (typeof window === "undefined") return <></>;
  return (
    <div>
      <MapContainer
        className="w-[500px] h-[300px]"
        center={[60.388103254544305, 5.332078267107137]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[60.388103254544305, 5.332078267107137]}>
          <Popup>
            Naprapat Örjan Bask <br />
            Bjørns gate 1, 5012 Bergen
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
