import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ APIdata }) {
	return (
		<MapContainer center={[44.0814, -71.517]} zoom={9}>
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
