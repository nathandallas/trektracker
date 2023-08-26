import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ChallengeList from "../ChallengeList/ChallengeList";
import Map from "../Map/Map";
import axios from "axios";

export default function ListContainer() {
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
		<Box p={4} display="flex" maxH="80vh" alignItems="center" justifyContent="center">
			<Box maxW="50vw" borderWidth="1px" borderRadius="lg" overflow="hidden">
				<Map APIdata={APIdata} />
			</Box>
			<Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
				<ChallengeList APIdata={APIdata} />
			</Box>
		</Box>
	);
}
