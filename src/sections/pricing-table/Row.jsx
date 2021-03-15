import styled from "styled-components";
import { useState } from "react";

import { icons } from "../../assets/index";
// const Td = styled.td`
// 	height:5rem;
// `
// const Row = ({ data, index }) => {
// 	const { title, checkers } = data;
// 	const [active, setActive] = useState(false);

// 	return (
// 		<tr
// 			className={active ? "active-tr" : "greenish-tr"}
// 			onMouseOver={() => {
// 				setActive(true);
// 				console.log(active);
// 			}}
// 			onMouseLeave={() => {
// 				setActive(false);
// 				console.log(active);
// 			}}>
// 			<Td
// 				className={active ? "display-flex active-th table-row-item" : "display-flex greenish-th table-row-item"}>
// 				<span>{title}</span>{" "}
// 				<img src={active ? icons.ActiveAlert : icons.alert} alt={title} />
// 			</Td>
// 			{checkers.map((value, i) => (
// 				<td
// 					className={i % 2 === 0 ? "active-th table-row-item" : "table-row-item"}>
// 					{value === "tick" ? (
// 						<img
// 							src={
// 								active === true || i % 2 === 0
// 									? icons.tick
// 									: icons.nonActiveTick
// 							}
// 							alt='Available'
// 						/>
// 					) : (
// 						<img src={icons.cross} alt='Not Available' />
// 					)}
// 				</td>
// 			))}
// 		</tr>
// 	);
// };

// export default Row;

import { TableDetails, TableRow, Image } from "./index";

const Row = ({ data, datas }) => {
	const [active, setActive] = useState(false);

	return (
		<TableRow
			onMouseEnter={() => setActive(true)}
			onMouseLeave={() => setActive(false)}
			active={active}>
			<TableDetails flex first active={active}>
				{data.title}
				<Image
					src={active ? icons.ActiveAlert : icons.alert}
					alt=''
					width='1.1125rem'
				/>
			</TableDetails>
			{data.checkers.map((checker, i) => (
				<TableDetails
					active={active}
					style={{ textAlign: "center" }}
					even={i % 2 === 0}
					firstEnd={datas.indexOf(data) === 0 && i === data.checkers.length - 1}
					lastStart={datas.indexOf(data) === datas.length - 1 && i === 0}
					lastEnd={
						datas.indexOf(data) === datas.length - 1 &&
						i === data.checkers.length - 1
					}
					firstStart={datas.indexOf(data) === 0 && i === 0}>
					{checker === "tick" ? (
						<Image
							src={
								active === true || i % 2 === 0
									? icons.tick
									: icons.nonActiveTick
							}
							alt='Available'
						/>
					) : (
						<Image src={icons.cross} />
					)}
				</TableDetails>
			))}
		</TableRow>
	);
};

export default Row;
