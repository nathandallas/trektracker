import React from "react";
import { Segment } from "semantic-ui-react";
import ChallengeList from "../ChallengeList/ChallengeList";

export default function ListContainer() {
	return (
		<Segment.Group secondary style={{ padding: 20 }} compact>
			<Segment>
				<h2>Fire Tower Challenge</h2>
			</Segment>
			<Segment>
				<ChallengeList />
			</Segment>
		</Segment.Group>
	);
}
