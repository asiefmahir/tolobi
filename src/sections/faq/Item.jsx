import { useState } from "react";
import styled from "styled-components";

const FaqItem = styled.div`
	display: flex;
	with: 100%;
`;

const Item = ({ item }) => {
	const [active, setActive] = useState(false);
	const { title, excerpt } = item;

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return <FaqItem onClick={handleClick}>
        
    </FaqItem>;
};
export default Item;
