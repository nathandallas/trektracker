import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
	return (
		<MapContainer center={[44.0814, -71.517]} zoom={11}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
}

export default Map;
