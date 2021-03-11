import styled from "styled-components";

import Item from "./Item";

const Title = styled.h2`
	font-weight: 700;
	color: #000000;
	font-size: 2.625rem;
`;
const Wrapper = styled.div`
	text-align: center;
`;

const FAQ = ({ data }) => {
	const { title, items } = data;
	return (
		<Wrapper>
			<Title>{title}</Title>
			{items.map((item, i) => (
				<Item key={i} item={item} index={i} />
			))}
		</Wrapper>
	);
};

export default FAQ;
