import { useState } from "react";
import styled from "styled-components";

const Tableheading = styled.div`
	background-color: ${(props) =>
		props.active === props.index ? "#00a857" : "#ffffff"};
	color: ${(props) => (props.active === props.index ? "#ffffff" : "#00a857")};
	border-radius: 0.4rem;
	font-weight: 700;
	text-align: center;
	padding: 2rem;
	width: 100%;
	margin-top: 1rem;
	box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.25);
`;
const HeaderItem = ({ item, index, active, setActive }) => {
	return (
		<Tableheading
			active={active}
			index={index}
			onClick={() => setActive(index)}>
			{item}
		</Tableheading>
	);
};

export default HeaderItem;
