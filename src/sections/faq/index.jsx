import styled from "styled-components";

import Item from "./Item";

const Title = styled.h2`
	font-weight: 700;
	color: #000000;
	font-size: 2.625rem;
	margin-top:4rem;
`;
const Wrapper = styled.div`
	text-align: center;
`;

const ItemWrapper = styled.div`
	margin-top:2.5rem;
`

const FAQ = ({ data }) => {
	const { title, items } = data;
	return (
		<Wrapper className="container">
			<Title>{title}</Title>
			<ItemWrapper>
				{items.map((item, i) => (
					<Item key={i} item={item} index={i} />
				))}
			</ItemWrapper>
		</Wrapper>
	);
};

export default FAQ;
