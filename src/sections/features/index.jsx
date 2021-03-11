import styled from "styled-components";

import ItemCard from "./ItemCard";
import H3 from "../../components/H3";
import H6 from "../../components/H6";
import Container from "../../components/Container";

const CardHolder = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
const Features = ({ features }) => {
	return (
		<Container>
			<H6>Real Estate Agents</H6>
			<H3>Who Use Tolobi</H3>
			<CardHolder className='container'>
				{features.map((feature, i) => (
					<ItemCard key={i} card={feature} />
				))}
			</CardHolder>
		</Container>
	);
};

export default Features;
