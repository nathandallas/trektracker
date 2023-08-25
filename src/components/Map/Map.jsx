import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";

function Map() {
	const [APIdata, setAPIdata] = useState([]);

	useEffect(() => {
		const challenge = "FireTower";
		axios
			.get(
				`https://api.steinhq.com/v1/storages/64e6c165eced9b09e9ec6ae3/${challenge}`
			)
			.then((incomingData) => {
				setAPIdata(incomingData.data);
			});
	}, []);

	return (
		<MapContainer center={[44.0814, -71.517]} zoom={8}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{APIdata.map((data) => {
				const position = [data.locationx, data.locationy];

				return (
					<Marker key={data.id} position={position}>
						<Popup>{data.mountain}</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
}

export default Map;
