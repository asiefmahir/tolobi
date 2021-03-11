import { useState } from "react";

import styled from "styled-components";
import { icons } from "../../assets/index";

import Row from "./Row";

const Table = styled.table`
	border-collapse: collapse;
	margin-top: 5rem;
	border-radius: 10px;
	background: #ddd;
`;

const TableBody = styled.tbody`
	background-color: #00a857;
	border-radius: 10px;
	width: 60rem;
	padding: 1rem;
`;
const TableHeadActive = styled.th`
	background-color: #00a857;
	padding: 1rem;
`;

const TableHeadItem = styled.th`
	padding: 2rem 2rem 0.5rem 2rem;
`;

const TableHeadItemActive = styled.td`
	font-size: 16px;
	font-weight: 700;
`;
const Button = styled.button`
	width: 7.875rem;
	height: 2.25rem;
	background: #f5f1ff;
	color: #00a857;
	text-align: center;
	border: none;
	outline: none;
	border-radius: 4px;
	margin-top: 1rem;
`;

const TableRowItem = styled.td`
	padding: 1rem;
`;
const TableRowHeadingActive = styled.h2`
	color: white;
`;
const TableRowHeading = styled.h2`
	font-size: 16px;
	font-weight: 700;
`;

const PricingTable = ({ datas, info }) => {
	return (
		<Table className='container'>
			<tr>
				<TableHeadItem></TableHeadItem>
				<TableHeadItem>
					<TableRowHeading>Basic (Beta)</TableRowHeading>
					<Button>Sign Up</Button>
				</TableHeadItem>
				<TableHeadActive>
					<TableRowHeadingActive>Rental Assistance</TableRowHeadingActive>
					<Button>Sign Up</Button>
				</TableHeadActive>
				<TableHeadItem>
					<TableRowHeading>Rental Assistance (Pro)</TableRowHeading>
					<Button>Sign Up</Button>
				</TableHeadItem>
			</tr>
			<TableBody>
				{datas.map((data, i) => (
					<Row
						key={i}
						data={data}
						index={i}
					/>
				))}

				<tr>
					<TableRowItem>
						<p>{info.title}</p>
						<p>
							{" "}
							<span>{info.subTitle}</span> <img src={icons.alert} alt='' />
						</p>
					</TableRowItem>
					{info?.data.map((d, i) => (
						<TableRowItem
							style={{
								borderBottomLeftRadius: i === 0 ? "10px" : "",
								borderTopRightRadius: i === info.data.length - 1 ? "10px" : "",
								backgroundColor: i % 2 === 0 && "#ffffff",
							}}>
							<p>{d.percentage}%</p>
							<p>{d.excerpt}</p>
						</TableRowItem>
					))}
				</tr>
			</TableBody>
		</Table>
	);
};

export default PricingTable;
