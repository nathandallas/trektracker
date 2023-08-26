import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Checkbox,
	Button,
} from "@chakra-ui/react";

function ChallengeList({ APIdata }) {
	return (
		<div>
			<TableContainer>
				<Table size="sm">
					<Thead>
						<Tr>
							<Th />
							<Th>Name</Th>
							<Th>Elevation</Th>
							<Th />
						</Tr>
					</Thead>

					<Tbody>
						{APIdata.map((data) => {
							return (
								<Tr key={data.id}>
									<Td>
										<Checkbox />
									</Td>
									<Td>{data.mountain}</Td>
									<Td isNumeric>{data.elevation} ft</Td>
									<Td>
										<Button>More Info</Button>
									</Td>
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default ChallengeList;
