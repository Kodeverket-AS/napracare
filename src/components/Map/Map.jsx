"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapProvider = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
});

export function Map() {
  return (
    <MapProvider>
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
    </MapProvider>
  );
}
