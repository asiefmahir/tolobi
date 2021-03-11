import styled from "styled-components";
const Card = styled.div`
	width: 10.8125rem;
	height: 8.8125rem;
`;

const Image = styled.img`
	text-align: center;
	width: 45px;
`;

const Excerpt = styled.h4`
	color: #000000;
	font-weight: 700;
	font-size: 14px;
	margin-top: 1.5rem;
`;

const ItemCard = ({ card }) => {
	const { icon, excerpt, type } = card;
	return (
		<Card>
			<Image src={icon} alt={type} />
			<Excerpt>{excerpt}</Excerpt>
		</Card>
	);
};

export default ItemCard;
