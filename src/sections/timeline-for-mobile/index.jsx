import styled from "styled-components";
import ItemCard from "./ItemCard";

import Item from "./ItemCard";

const Title = styled.h2`
	font-weight: 700;
	color: #000000;
	font-size: ${(props) =>
		props.mobileView === true ? "1.125rem" : "2.625rem"};
	margin-top: 4rem;
`;
const Wrapper = styled.div`
	text-align: center;
`;

const ItemWrapper = styled.div`
	margin-top: 2.5rem;
	border-radius: 10px;
`;

const MobileCard = ({ data, mobileView }) => {
	return (
		<Wrapper className={mobileView === true ? "" : "container"}>
			<ItemWrapper>
				{data.map((item, i) => (
					<ItemCard mobileView={mobileView} key={i} item={item} index={i} />
				))}
			</ItemWrapper>
		</Wrapper>
	);
};

export default MobileCard;
