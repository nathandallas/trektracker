import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "semantic-ui-react";
import axios from "axios";

function ChallengeList() {
	const [mountain, setMountain] = useState("");
	const [elevation, setElevation] = useState("");
	const [town, setTown] = useState("");
	const [APIdata, setAPIdata] = useState([]);

	const onSubmit = (e) => {
		e.preventDefault();

		const labels = { mountain, elevation, town };

		axios.post(
			"https://api.steinhq.com/v1/storages/64e6c165eced9b09e9ec6ae3/FireTower",
			labels
		);
	};

	useEffect(() => {
		axios
			.get(
				"https://api.steinhq.com/v1/storages/64e6c165eced9b09e9ec6ae3/FireTower"
			)
			.then((incomingData) => {
				setAPIdata(incomingData.data);
			});
	}, []);

	return (
		<div>
			<Form style={{ padding: 20 }}>
				<Form.Field>
					<label>Mountain</label>
					<input
						placeholder="Mountain"
						onChange={(e) => setMountain(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Elevation</label>
					<input
						placeholder="Elevation"
						onChange={(e) => setElevation(e.target.value)}
					/>
				</Form.Field>
				<Form.Field>
					<label>Town</label>
					<input placeholder="Town" onChange={(e) => setTown(e.target.value)} />
				</Form.Field>
				<Button type="submit" onClick={onSubmit}>
					Submit
				</Button>
			</Form>

			<Table fixed style={{ padding: 20 }}>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Mountain</Table.HeaderCell>
						<Table.HeaderCell>Elevation</Table.HeaderCell>
						<Table.HeaderCell>Town</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{APIdata.map((data) => {
						return (
							<Table.Row>
								<Table.Cell>{data.mountain}</Table.Cell>
								<Table.Cell>{data.elevation}</Table.Cell>
								<Table.Cell>{data.town}</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}

export default ChallengeList;
