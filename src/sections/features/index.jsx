import styled from "styled-components";

import ItemCard from "./ItemCard";
// import H3 from "../../components/H3";
// import H6 from "../../components/H6";
// import Container from "../../components/Container";

const H6 = styled.h6`
	font-weight: 500;
	color: #10ad62;
`;

const Container = styled.div`
	text-align: center;
	margin-top: 4rem;
`;

const H3 = styled.h3`
	margin-top: 0.5rem;
`;
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