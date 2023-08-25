import React from "react";
import { Grid } from "semantic-ui-react";
import ChallengeList from "../ChallengeList/ChallengeList";
import Map from "../Map/Map";

export default function ListContainer() {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column width={9}>
					<Map />
				</Grid.Column>
				<Grid.Column>
					<ChallengeList />
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}
