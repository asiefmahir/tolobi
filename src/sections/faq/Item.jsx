import { useState } from "react";
import styled from "styled-components";

import { icons } from "../../assets";

const FaqItem = styled.div`
	display: flex;
	justify-content:space-between;
	with: 100%;
	border-radius: 6px;
	text-transform: capitalize;
	margin-top:1rem;
	padding:1.5rem;
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
	font-size: 0.8rem;
	margin-left:1.5rem;
	padding-bottom:1rem;
	text-align:left;
	line-height:27.29px;
`;

const Item = ({ item, index }) => {
	const [active, setActive] = useState(false);
	const { title, excerpt } = item;

	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<div
			className={active ? "active-faq-item" : "non-active-faq-item"}
			onClick={handleClick}>
			<FaqItem>
				<Title>
					<Span>{index + 1}. </Span>
					{title}
				</Title>
				<Image src={active ? icons.minusIcon : icons.plusIcon} />
			</FaqItem>
			{excerpt && active && <Excerpt>{excerpt}</Excerpt>}
		</div>
	);
};
export default Item;
