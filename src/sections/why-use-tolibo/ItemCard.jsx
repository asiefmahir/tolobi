import styled from "styled-components";

const Card = styled.div`
	width: 24%;
	height: 13.125rem;
	background-color: #ffffff;
	border-radius: 6px;
	text-align: center;
	padding: 1rem;
`;

const Image = styled.img`
	width: 2.5rem;
	height: 2.5rem;
`;

const Title = styled.h4`
	color: #000000;
	font-weight: 700;
	font-size: 1.125rem;
	line-height: 1.77625rem;
	margin-top: 1rem;
`;
const Excerpt = styled.p`
	font-weight: 500;
	color: #2e2e2e;
	font-size: 0.9rem;
	line-height: 1.381875rem;
	margin-top: 1rem;
`;

const ItemCard = ({ card }) => {
	const { icon, title, excerpt } = card;
	return (
		<Card>
			<Image src={icon} alt='' />

			<Title>{title}</Title>
			<Excerpt>{excerpt}</Excerpt>
		</Card>
	);
};

export default ItemCard;
