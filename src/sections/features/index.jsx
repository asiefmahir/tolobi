import ItemCard from "./ItemCard";
import Container from "./Container";
import CardHolder from "./CardHolder";
import H6 from "./H6";
import H3 from "./H3";

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
