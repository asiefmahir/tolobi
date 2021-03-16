import { useState } from "react";
import styled from "styled-components";

import { icons } from "../../assets";

const FaqItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: ${(props) => props.mobileView === true && "center"};
	// flex-direction: ${(props) => props.mobileView === true && "column"};
	width: 100%;
	border-radius: 6px;
	text-transform: capitalize;
	text-align: ${(props) => props.mobileView === true && "left"};
	margin-top: 1rem;
	// padding: ${(props) => (props.mobileView === true ? "0.5rem" : "1.5rem")};
	padding: 1.5rem;
`;

const Image = styled.img`
	width: 20px;
	height: 20px;
`;

const Span = styled.span`
	color: #00a857;
`;
const Title = styled.p`
	color: #000000;
	font-weight: bold;
	font-size: 1.05rem;
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

const Item = ({ item, index, mobileView }) => {
	const [active, setActive] = useState(false);
	const { title, excerpt } = item;

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<div
			className={active ? "active-faq-item" : "non-active-faq-item"}
			onClick={handleClick}>
			<FaqItem mobileView={mobileView}>
				<Title mobileView={mobileView}>
					{mobileView !== true && <Span>{index + 1}. </Span>}
					{title}
				</Title>
				<Image src={active ? icons.minusIcon : icons.plusIcon} />
			</FaqItem>
			{excerpt && active && (
				<Excerpt mobileView={mobileView}>{excerpt}</Excerpt>
			)}
		</div>
	);
};
export default Item;
