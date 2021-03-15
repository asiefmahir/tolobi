import { useState } from "react";
import styled from "styled-components";

import MainContainer from "../../components/MainContainer";
import { icons } from "../../assets/index";
import Row from "./Row";

const Table = styled.div`
	width: 100%;
	border-collapse: collapse;
	padding: 1rem;
`;
const TableHeading = styled.div`
	padding: 2rem 2rem 0.5rem 2rem;
	background-color: ${(props) => (props.even ? "#ffffff" : "#00a857")};
	color: ${(props) => (props.even ? "#000000" : "#ffffff")};
	width: 25%;
`;
const TableBody = styled.div`
	background-color: #00a857;
	border-radius: 0.8rem;
	padding: 1rem;
`;

export const TableDetails = styled.div`
	background-color: ${(props) =>
		props.even || props.active ? "#ffffff" : "#00a857"};
	color: ${(props) => (props.active ? "#00a857" : "#ffffff")};
	width: 25%;
	height: 5rem;
	border-top-left-radius: ${(props) => props.firstStart && "10px"};
	border-top-right-radius: ${(props) => props.firstEnd && "10px"};
	border-bottom-left-radius: ${(props) => props.lastStart && "10px"};
	border-bottom-right-radius: ${(props) => props.lastEnd && "10px"};
	display: ${(props) => props.flex && "flex"};
	padding: 1rem;
`;
export const TableRow = styled.div`
	box-shadow: ${(props) => props.active && "0px 4px 4px rgba(0, 0, 0, 0.25)"};
	display: flex;
	justify-content: space-between;
	align-items: center
	background-color: ${(props) => props.active && "#ffffff !important"};
	border-radius: ${(props) => props.active && "10000000rem"};
	transform: ${(props) => props.active && "scale(1)"};
	color: ${(props) => props.active && "#008a57"};
	// border: 1px solid reds
`;

const Button = styled.button`
	width: 7.875rem;
	height: 2.25rem;
	background: #f5f1ff;
	color: #00a857;
	text-align: center;
	margin-left: 1rem;
	border: none;
	outline: none;
	border-radius: 4px;
	margin-top: 1rem;
`;

export const Image = styled.img`
	width: ${(props) => props.width};
`;

const Pricingtable = ({ datas, info }) => {
	const { title, subTitle, headings, data } = info;
	const [active, setActive] = useState(false);

	return (
		<MainContainer>
			<Table>
				<TableRow>
					<TableHeading even></TableHeading>
					{headings.map((heading, index) => (
						<>
							<TableHeading even={index % 2 === 0}>
								{heading}
								<Button>Sign Up</Button>
							</TableHeading>
						</>
					))}
				</TableRow>

				<TableBody>
					{datas.map((data) => (
						<Row data={data} datas={datas} />
						
					))}
				</TableBody>
			</Table>
		</MainContainer>
	);
};

export default Pricingtable;
