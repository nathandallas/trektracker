import React, { useState, useEffect } from "react";
import { Checkbox, Button, Icon, Table } from "semantic-ui-react";
import axios from "axios";

function ChallengeList() {
	// fetch data from API
	// TODO: Set up buttons to change dynamic url
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
		<div>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell />
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Elevation</Table.HeaderCell>
						<Table.HeaderCell>Town</Table.HeaderCell>
						<Table.HeaderCell />
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{APIdata.map((data) => {
						return (
							<Table.Row key={data.id}>
								<Table.Cell collapsing>
									<Checkbox />
								</Table.Cell>
								<Table.Cell>{data.mountain}</Table.Cell>
								<Table.Cell>{data.elevation}</Table.Cell>
								<Table.Cell>{data.town}</Table.Cell>
								<Table.Cell collapsing>
									<Button icon basic>
										<Icon name="plus" /> More Info
									</Button>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}

export default ChallengeList;
