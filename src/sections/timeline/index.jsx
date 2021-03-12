import styled from "styled-components";
import {icons} from "../../assets"
import H3 from "../../components/H3";
import H6 from "../../components/H6";
import OddItem from "./OddItem";
import EvenItem from "./EvenItem";

const TimelineContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top:6rem;
`;
const TimelineWrapper = styled.div`
	margin-top:3rem;
`
const Timeline = ({ data }) => {
	return (
		<TimelineContainer>
			<H3>Tolobi Work</H3>
			<H6>How Our Process Works</H6>
			<div className="circle"></div>
			<TimelineWrapper>
				{data.map((d, i) =>
					i % 2 === 0 ? (
						<OddItem rowData={d} index={i} />
					) : (
						<EvenItem rowData={d} index={i} />
					),
				)}
			</TimelineWrapper>
			<div className="down-arrow"></div>
		</TimelineContainer>
	);
};

export default Timeline;
