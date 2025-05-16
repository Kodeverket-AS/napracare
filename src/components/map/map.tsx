"use client";

import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ICON_WIDTH = 30;
const ICON_HEIGHT = 40;

const customUserIcon = new L.Icon({
  iconUrl: '/marker-icon-red.png',
  
  iconSize: [ICON_WIDTH, ICON_HEIGHT],
  iconAnchor: [ICON_WIDTH / 2, ICON_HEIGHT],
  popupAnchor: [0, -ICON_HEIGHT + 5]
});

export function Map() {
  if (typeof window === "undefined") return <></>;

  const jawgAccessToken = "9lo4lQHtzOXjHY3j3FizrL4CWhERC2pRShDQP5LZlOdT1MDPtgZsCYOKslNNpaXU";

  return (
    <div className="w-full max-w-[700px] mx-auto h-[300px] lg:h-full rounded-[12px] overflow-hidden shadow-xl">
      <MapContainer
        className="w-full h-full"
        center={[60.388103254544305, 5.332078267107137]}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=${jawgAccessToken}`}
          minZoom={0}
          maxZoom={22}
        />
        <Marker position={[60.388103254544305, 5.332078267107137]} icon={customUserIcon}>
          <Popup>
            Naprapat Örjan Bask <br />
            Bjørns gate 1, 5012 Bergen
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
