import styled from "styled-components";

import Item from "./Item";

const Title = styled.h2`
	font-weight: 700;
	color: #000000;
	font-size: ${(props) =>
		props.mobileView === true ? "1.125rem" : "2.625rem"};
`;
const Wrapper = styled.div`
	text-align: center;
	margin: 32rem 1rem 1rem 1rem;
`;

const ItemWrapper = styled.div`
	margin-top: 2.5rem;
`;

const FAQ = ({ data, mobileView }) => {
	const { title, items } = data;
	return (
		<Wrapper className={mobileView === true ? "" : "container"}>
			<Title mobileView={mobileView}>{title}</Title>
			<ItemWrapper>
				{items.map((item, i) => (
					<Item mobileView={mobileView} key={i} item={item} index={i} />
				))}
			</ItemWrapper>
		</Wrapper>
	);
};

export default FAQ;
