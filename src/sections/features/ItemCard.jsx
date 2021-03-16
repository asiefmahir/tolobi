import styled from "styled-components";
const Card = styled.div`
	width: ${(props) => (props.mobileView ? "100%" : "10.8125rem")};
	height: ${(props) => (props.mobileView ? "auto" : "8.8125rem")};
	margin-top: ${(props) => (props.mobileView ? "1rem" : "0rem")};
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

const ItemCard = ({ card, mobileView }) => {
	const { icon, excerpt, type } = card;
	return (
		<Card mobileView={mobileView}>
			<Image src={icon} alt={type} />
			<Excerpt>{excerpt}</Excerpt>
		</Card>
	);
};

export default ItemCard;
