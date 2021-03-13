import { icons } from "../../assets";
import Timeline from './Timeline';
import Empty from './Empty';
import CurveSection from './CurveSection';
import MiddleIconWrap from "./MiddleIconWrap";
import MiddleIcon from "./MiddleIcon";
import MainContent from "./MainContent";
import ContentTitle from "./ContentTitle";
import ContentDesc from "./ContentDesc";
import ContentTitleDescWrap from "./ContentTitleDescWrap";

const OddItem = ({ rowData, index }) => {
	const { title, excerpt, icon } = rowData;

	return (
		<Timeline>
			<MainContent>
				<div className='timeline__icon'>
					<img src={icon} alt='' />
				</div>
				<ContentTitleDescWrap>
					<ContentTitle>{title}</ContentTitle>
					<ContentDesc>{excerpt}</ContentDesc>
				</ContentTitleDescWrap>
			</MainContent>
			<CurveSection>
				<svg className='svg-even'>
					<circle cx='70' cy='70' r='70'></circle>
					<circle cx='70' cy='70' r='70'></circle>
				</svg>
				<MiddleIconWrap>
					<MiddleIcon>
						{index + 1}
					</MiddleIcon>
				</MiddleIconWrap>
			</CurveSection>
			<Empty></Empty>
		</Timeline>
	);
};

export default OddItem;
