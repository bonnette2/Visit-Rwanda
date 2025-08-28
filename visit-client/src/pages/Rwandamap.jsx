import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  return (
    <div className="h-[500px] w-full my-8 rounded shadow-lg overflow-hidden">
      <MapContainer
        center={[-1.9403, 29.8739]} // Kigali
        zoom={8}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-1.9403, 29.8739]}>
          <Popup>
            Kigali – Capital of Rwanda 🇷🇼
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;

