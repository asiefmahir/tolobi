import styled from "styled-components";
import { useState } from "react";

import { icons } from "../../assets/index";

const Row = ({ data, index }) => {
	const { title, checkers } = data;
	const [active, setActive] = useState(false);

	return (
		<tr
			// style={{
			// 	backgroundColor: active ? "#ffffff" : "#00A857",
			// 	boxShadow: active && "0px 4px 4px rgba(0, 0, 0, 0.25)",
			// }}
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
				// style={{
				// 	display: "flex",
				// 	backgroundColor: active ? "#ffffff" : "#00A857",
				// }}'
				style={{ display: "flex" }}
				className={active ? "active-th" : "greenish-th"}>
				<span>{title}</span>{" "}
				<img src={active ? icons.ActiveAlert : icons.alert} alt={title} />
			</th>
			{checkers.map((value, i) => (
				<th
					// style={{
					// 	borderTopLeftRadius: index === 0 && i === 0 && "10px",
					// 	borderBottomRightRadius:
					// 		index === 0 && i === checkers.length - 1 && "10px",
					// 	backgroundColor: i % 2 === 0 ? "#ffffff" : "#00A857",
					// }}

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
