import styled from "styled-components";
import { icons } from "../../assets/index";

const Row = ({ data, index, active, setActive }) => {
	const { title, checkers } = data;
	return (
		<tr
			style={{
				backgroundColor: active && "#ffffff",
				boxShadow: active && "0px 4px 4px rgba(0, 0, 0, 0.25)",
			}}
			onMouseEnter={() => {
				setActive(true);
				console.log(active);
			}}
			onMouseLeave={() => {
				setActive(false);
				console.log(active);
			}}>
			<th style={{ display: "flex", backgroundColor: "#00A857" }}>
				<span>{title}</span>{" "}
				<img src={active ? icons.ActiveAlert : icons.alert} alt={title} />
			</th>
			{checkers.map((value, i) => (
				<th
					style={{
						borderTopLeftRadius: index === 0 && i === 0 && "10px",
						borderBottomRightRadius:
							index === 0 && i === checkers.length - 1 && "10px",
						backgroundColor: i % 2 === 0 ? "#ffffff" : "#00A857", 
					}}>
					{value === "tick" ? (
						<img
							src={active === true ? icons.nonActiveTick : icons.tick}
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
