import { useState } from "react";

import styled from "styled-components";
import { icons } from "../../assets/index";

import Row from "./Row";

const TableBody = styled.div`
	background-color: #00a857;
	border-radius: 10px;
	width: 100%;
`;

const PricingTable = ({ datas, info }) => {
	const { active, setActive } = useState(false);
	return (
		<table className='container'>
			<tr>
				<th>
					<h2>Basic (Beta)</h2>
					<button>Sign Up</button>
				</th>
				<th style={{ backgroundColor: "#00A857" }}>
					<h2>Rental Assistance</h2>
					<button>Sign Up</button>
				</th>
				<th>
					<h2>Rental Assistance (Pro)</h2>
					<button>Sign Up</button>
				</th>
			</tr>
			<TableBody>
				{datas.map((data, i) => (
					<Row
						onMouseOver={() => setActive(true)}
						onMouseLeave={() => setActive(false)}
						key={data.title}
						active={active}
						data={data}
						index={i}
					/>
				))}

				<tr>
					<th>
						<p>{info.title}</p>
						<p>
							{" "}
							<span>{info.subTitle}</span> <img src={icons.alert} alt='' />
						</p>
					</th>
					{info?.data.map((d, i) => (
						<th
							style={{
								borderBottomLeftRadius: i === 0 ? "10px" : "",
								borderBottomRightRadius:
									i === info.data.length - 1 ? "10px" : "",
							}}>
							<p>{d.percentage}%</p>
							<p>{d.excerpt}</p>
						</th>
					))}
				</tr>
			</TableBody>
		</table>
	);
};

export default PricingTable;
