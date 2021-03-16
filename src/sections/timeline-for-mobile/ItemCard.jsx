import { useState } from "react";
import styled from "styled-components";

import { icons } from "../../assets";

const CardItem = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 6rem;
	text-transform: capitalize;
	margin-top: 1rem;
	padding: 1.5rem;
	border-radius: 0.5rem;
	overflow: hidden;

	@media (max-width: 330px) {
		padding: 0.8rem;
	}

	@media (max-width: 320px) {
		padding: 0.5rem;
	}
`;

const Image = styled.img`
	width: 4rem;
	height: 4rem;
`;

const ImageTitleWrap = styled.div`
	display: flex;
	align-items: center;
`;

const Title = styled.p`
	color: #000000;
	font-weight: bold;
`;

const Excerpt = styled.p`
	font-size: ${(props) =>
		props.mobileView === true ? "0.875rem" : "0.9375rem"};
	// margin-left: ${(props) =>
		props.mobileView === true ? "0.5rem" : "1.5rem"};
	margin-left: 1.5rem;
	padding-bottom: 1rem;
	text-align: left;
	line-height: 27.29px;
`;

const CardNumber = styled.div`
	margin-top: -1.5rem;
	margin-right: -1.5rem;
	width: 8rem;
	height: 14rem;
	background: #c1c1c1;
	clip-path: circle(32.9% at 100% 0);
`;

const Span = styled.span`
	color: #fff;
	font-size: 1.5rem;
	font-weight: 700;
	margin-left: 66%;
	display: flex;
	margin-top: 13%;

	@media (max-width: 767px) {
		margin-left: 75%;
	}

	@media (max-width: 500px) {
		margin-left: 68%;
		margin-top: 15%;
	}

	@media (max-width: 400px) {
		margin-left: 60%;
		margin-top: 15%;
	}

	@media (max-width: 340px) {
		margin-left: 40%;
		margin-top: 20%;
	}

	@media (max-width: 320px) {
		margin-left: 50%;
		margin-top: 20%;
	}

	@media (max-width: 320px) {
		margin-left: 40%;
		margin-top: 35%;
		font-size: 1rem;
	}
`;

const ItemCard = ({ item, index, mobileView }) => {
	const [active, setActive] = useState(false);
	const { title, excerpt } = item;

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<div
			className={active ? "active-faq-item" : "non-active-faq-item"}
			onClick={handleClick}>
			<CardItem mobileView={mobileView}>
				<ImageTitleWrap mobileView={mobileView}>
					{mobileView !== true && <Image src={icons.timelineIcon} />}
					<Title>{title}</Title>
				</ImageTitleWrap>

				<CardNumber>
					<Span>{index + 1}</Span>
				</CardNumber>
			</CardItem>
			{excerpt && active && (
				<Excerpt mobileView={mobileView}>{excerpt}</Excerpt>
			)}
		</div>
	);
};
export default ItemCard;
