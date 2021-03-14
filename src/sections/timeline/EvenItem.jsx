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
import CircleEven from "./CircleEven";

const OddItem = ({ rowData, index }) => {
	const { title, excerpt, icon } = rowData;

	return (
		<Timeline>
			<MainContent>
				<div>
					<img src={icon} alt='' />
				</div>
				<ContentTitleDescWrap>
					<ContentTitle>{title}</ContentTitle>
					<CircleEven></CircleEven>
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
