import styled from "styled-components";

import { TableBody } from "../../sections/pricing-table";
import { icons } from "../../assets/index";

const Wrapper = styled.div`
	margin-top: 1rem;
`;

const ItemDetails = styled.div`
	background-color: #00a857;
	color: #ffffff;
	width: 100%;
	height: 5rem;
	border-radius: 0.8rem;
	display: flex;
	justify-content: space-between;
	align-items: start;
	padding: 1rem;
`;
const Title = styled.p`
	font-size: 1.8rem;
	font-weight: 700;
	line-height: 1.315625rem;
	border-bottom: 1px solid #30c97f;
	padding-bottom: 2rem;
`;

const Image = styled.img`
	width: 2rem;
`;

const TitleCardButton = styled.button`
	width: 12.3125rem;
	height: 3rem;
	background: #f5f1ff;
	color: #00a857;
	text-align: center;
	border: none;
	outline: none;
	border-radius: 4px;
	margin: 1rem auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Comfortaa;
	font-size: 1.25rem;
`;
const TitleCard = ({ data }) => {
	return (
		<Wrapper>
			<TableBody>
				{data.map((item) => (
					<ItemDetails>
						<Title>{item.title}</Title>
						<Image src={icons.alert} alt='Info' />
					</ItemDetails>
				))}
				<TitleCardButton>Sign Up</TitleCardButton>
			</TableBody>
		</Wrapper>
	);
};
export default TitleCard;
