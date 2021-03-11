import styled from "styled-components";

import H3 from "../../components/H3";
import H6 from "../../components/H6";
import OddItem from "./OddItem";
import EvenItem from "./EvenItem";

const TimelineContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background-color: blue;
`;

const Timeline = ({ data }) => {
	return (
		<TimelineContainer>
			<H3>Tolobi Work</H3>
			<H6>How Our Process Works</H6>
			{data.map((d, i) =>
				i % 2 === 0 ? <OddItem rowData={d} /> : <EvenItem rowData={d} />,
			)}
		</TimelineContainer>
	);
};

export default Timeline;
