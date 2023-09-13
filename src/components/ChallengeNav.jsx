import {
	Tabs,
	TabList,
	TabIndicator,
	Tab,
	TabPanel,
	TabPanels,
} from '@chakra-ui/react';
import ListContainer from './ListContainer';

export default function ChallengeNav() {
	const challenges = ['FireTower', '52WAV', '484K'];

	return (
		<Tabs>
			<TabList
				pt='40px'
				justifyContent='center'>
				<Tab>Fire Tower</Tab>
				<Tab>52 With a View</Tab>
				<Tab>48 Over 4000 Footers</Tab>
			</TabList>
			<TabIndicator
				mt='-1.5px'
				height='2px'
				bg='blue.500'
				borderRadius='1px'
			/>

			<TabPanels>
				{challenges.map((selection) => {
					return (
						<TabPanel key={selection}>
							<ListContainer challenge={selection} />
						</TabPanel>
					);
				})}
			</TabPanels>
		</Tabs>
	);
}
