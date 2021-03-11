import styled from "styled-components";
import Row from "./Row";

const Button = styled.button`
	background-color: #00a857;
	text-align: center;
	color: #ffffff;
	padding: 10px 0;
	font-size: 19px;
	font-weight: 700;
	line-height: 27px;
	outline: none;
	border: none;
	width: 20.25rem;
	border-radius: 5px;
`;

const Paragraph = styled.p`
	text-transform: capitalize;
	font-size: 13px;
	font-weight: 700;
	line-height: 25.78px;
	text-align: center;
	color: #373737;
	margin-top: 1rem;
`;

const Wrapper = styled.div`
	margin-top: 4rem;
	text-align: center;
`;
const Table = styled.table`
	width: 100%;
	background: #ffffff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
`;

const CompetitorTable = ({ data }) => {
	return (
		<Wrapper className='container'>
			<Button>Vs Competitors</Button>
			<Paragraph>
				Example Shown Is Based On a property renting for $2,500 per month on{" "}
				<br />
				Onerent’s Basic Management plan.
			</Paragraph>
			<Table>
				<tr>
					<th>{data[0].title}</th>
					<th>{data[0].competitor}</th>
					<th>
						<img src={data[0].tolobi} alt='' />
					</th>
				</tr>
				{data.map((d) => (
					<Row rowData={d} />
				))}
			</Table>
		</Wrapper>
	);
};

export default CompetitorTable;
