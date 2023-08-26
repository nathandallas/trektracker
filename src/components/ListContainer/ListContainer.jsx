import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ChallengeList from "../ChallengeList/ChallengeList";
import Map from "../Map/Map";
import axios from "axios";

export default function ListContainer({ challenge }) {
	// fetch data from API
	// TODO: research Lifecycle Methods to see how we can update the challenge when a new tab is selected
	const [APIdata, setAPIdata] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.steinhq.com/v1/storages/64e6c165eced9b09e9ec6ae3/${challenge}`
			)
			.then((incomingData) => {
				setAPIdata(incomingData.data);
			});
	}, []);

	return (
		<Box
			p={4}
			display={{ md: "flex" }}
			justifyContent="center"
		>
			<Box borderWidth="1px" borderRadius="2xl" overflow="hidden" minWidth="40vw" height={{ base: "80vh"}}>
				<Map APIdata={APIdata} />
			</Box>
			<Box mt={{base: "6px", md:"0"}} overflowY={{md: "auto"}} maxH="80vh" >
				<ChallengeList APIdata={APIdata} />
			</Box>
		</Box>
	);
}
