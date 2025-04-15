"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import mapStyle from "@/assets/styles/mapStyle";

function Map() {
  return (
    <MapContainer>
      <TileLayer
        className={mapStyle.map}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png"
      />
    </MapContainer>
  );
}
export default Map;
