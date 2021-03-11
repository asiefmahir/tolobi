import styled from "styled-components";
import { useState } from "react";

import { icons } from "../../assets/index";

const Row = ({ data, index }) => {
	const { title, checkers } = data;
	const [active, setActive] = useState(false);

	return (
		<tr
			className={active ? "active-tr" : "greenish-tr"}
			onMouseOver={() => {
				setActive(true);
				console.log(active);
			}}
			onMouseLeave={() => {
				setActive(false);
				console.log(active);
			}}>
			<td
				className={active ? "display-flex active-th table-row-item" : "display-flex greenish-th table-row-item"}>
				<span>{title}</span>{" "}
				<img src={active ? icons.ActiveAlert : icons.alert} alt={title} />
			</td>
			{checkers.map((value, i) => (
				<td
					className={i % 2 === 0 ? "active-th table-row-item" : "table-row-item"}>
					{value === "tick" ? (
						<img
							src={
								active === true || i % 2 === 0
									? icons.tick
									: icons.nonActiveTick
							}
							alt='Available'
						/>
					) : (
						<img src={icons.cross} alt='Not Available' />
					)}
				</td>
			))}
		</tr>
	);
};

export default Row;
