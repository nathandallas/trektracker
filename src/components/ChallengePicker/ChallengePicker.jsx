import React from "react";
import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import ListContainer from "../ListContainer/ListContainer";

export default function ChallengePicker() {
	return (
		<Tabs>
			<TabList pt="40px" justifyContent="center">
				<Tab>Fire Tower</Tab>
				<Tab>52 With a View</Tab>
				<Tab>48 4000 Footers</Tab>
				<Tab>Terrifying 25</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
                    <ListContainer />
                </TabPanel>
				<TabPanel>Coming soon!</TabPanel>
				<TabPanel>Coming Soon!</TabPanel>
				<TabPanel>Coming Soon!</TabPanel>
			</TabPanels>
		</Tabs>
	);
}
