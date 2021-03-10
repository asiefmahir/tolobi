import styled from "styled-components";
const Card = styled.div`
	width: 173px;
	height: 141px;
`;

const Image = styled.img`
	text-align: center;
	width: 60px;
`;

const Excerpt = styled.h4`
	color: #000000;
	font-weight: 700;
	font-size: 17px;
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
