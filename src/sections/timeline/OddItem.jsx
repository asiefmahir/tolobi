import { icons } from "../../assets";

const OddItem = ({ rowData, index }) => {
	const { title, excerpt, icon } = rowData;

	return (
		<section className='timeline odd'>
			<div className='timeline__content'>
				<div className='timeline__icon'>
					<img src={icon} alt='' />
				</div>
				<div className='timeline__title-desc'>
					<h3 className='timeline__title'>{title}</h3>
					<p className='timeline__desc'>{excerpt}</p>
				</div>
			</div>
			<div className='timeline__curve-section'>
				<svg className='svg-even'>
					<circle cx='70' cy='70' r='70'></circle>
					<circle cx='70' cy='70' r='70'></circle>
				</svg>
				<div className='timeline__middle-icon'>
					<div className='round'>{index + 1}</div>
				</div>
			</div>
			<div className='timeline__empty-section'></div>
		</section>
	);
};

export default OddItem;
