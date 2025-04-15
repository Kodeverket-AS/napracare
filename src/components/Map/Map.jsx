"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

// export const dynamic = "force-dynamic";

const Map = () => {
  if (typeof window === "undefined") {
    return <></>;
  }
  return (
    <div>
      <MapContainer
        className="w-[500px] h-[300px] mt-[12rem]"
        center={[60.39370528147853, 5.327892840119501]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png"
        />
      </MapContainer>
    </div>
  );
};
export default Map;
