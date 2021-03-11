import styled from "styled-components";

const Button = styled.button`
	backgroun-color: "#00A857";
	text-align: center;
	color: #ffffff;
	padding: 10px 0;
`;

const CompetitorTable = ({ data }) => {
	return (
		<>
			<Button>Vs Competitors</Button>
			<p style={{ textTransform: "capitalize" }}>
				Example Shown Is Based On a property renting for $2,500 per month on
				Onerent’s Basic Management plan.
			</p>
			<table>
				{data.map((d) => (
					<Row rowData={d} />
				))}
			</table>
		</>
	);
};

export default CompetitorTable;
