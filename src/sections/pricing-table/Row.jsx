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
			<th
				className={active ? "display-flex active-th" : "display-flex greenish-th"}>
				<span>{title}</span>{" "}
				<img src={active ? icons.ActiveAlert : icons.alert} alt={title} />
			</th>
			{checkers.map((value, i) => (
				<th
					className={i % 2 === 0 && "active-th"}>
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
				</th>
			))}
		</tr>
	);
};

export default Row;
