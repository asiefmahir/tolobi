import { icons } from "../../assets";
import Timeline from './Timeline';
import Empty from './Empty';
import CurveSection from './CurveSection';
import SvgOdd from './SvgOdd';
import MiddleIconWrap from './MiddleIconWrap'
import MiddleIcon from "./MiddleIcon";
import MainContent from "./MainContent";
import ContentTitle from "./ContentTitle";
import ContentDesc from "./ContentDesc";
import ContentTitleDescWrap from "./ContentTitleDescWrap";

const EvenItem = ({ rowData, index }) => {
	const { title, excerpt, icon } = rowData;
	return (
		<Timeline>
			<Empty></Empty>

			<CurveSection>
				<svg class='svg-odd'>
					<circle cx='70' cy='70' r='70'></circle>
					<circle cx='70' cy='70' r='70'></circle>
				</svg>
				<MiddleIconWrap>
					<MiddleIcon>{index + 1}</MiddleIcon>
				</MiddleIconWrap>
			</CurveSection>
			<MainContent>
				<ContentTitleDescWrap>
					<ContentTitle>{title}</ContentTitle>
					<ContentDesc>
						{excerpt}
					</ContentDesc>
				</ContentTitleDescWrap>

				<div class='timeline__icon'>
					<img src={icon} alt='' />
				</div>
			</MainContent>
		</Timeline>
	);
};

export default EvenItem;
