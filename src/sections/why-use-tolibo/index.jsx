import styled from "styled-components";

import ItemCard from "./ItemCard";
const Wrapper = styled.div`
	background: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 25rem;
	position: relative;
	margin-top:3rem;
`;

const Overlay = styled.div`
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	position: absolute;
	background: rgba(0, 168, 87, 0.87);
`;

const CardWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h5`
	color: #ffffff;
	font-style: normal;
	font-weight: 500;
	line-height: 25px;
	text-align: center;
`;
const SubTitle = styled.h2`
	color: #ffffff;
	font-style: normal;
	font-size: 1.875rem;
	font-weight: 700;
	line-height: 47.37px;
	text-align: center;
`;

const ItemWrapper = styled.div`
	margin-top: 3.5rem;
`;

const WhyUseTolobi = ({ data }) => {
	const { title, subTitle, bgImage, cards } = data;
	return (
		<Wrapper url={bgImage}>
			<Overlay>
				<ItemWrapper>
					<Title>{title}</Title>
					<SubTitle>{subTitle}</SubTitle>
					<CardWrapper className='container'>
						{cards.map((card) => (
							<ItemCard card={card} />
						))}
					</CardWrapper>
				</ItemWrapper>
			</Overlay>
		</Wrapper>
	);
};

export default WhyUseTolobi;
