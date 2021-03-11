import { icons } from "../../assets";

const OddItem = ({ rowData }) => {
	const { title, excerpt, icon } = rowData;

	return (
		<section class='timeline odd'>
			<div class='timeline__content'>
				<div class='timeline__icon'>
					<img src={icon} alt='' />
				</div>
				<div class='timeline__title-desc'>
					<h2 class='timeline__title'>{title}</h2>
					<p class='timeline__desc'>{excerpt}</p>
				</div>
			</div>
			<div class='timeline__curve-section'>
				<svg class='svg-even'>
					<circle cx='70' cy='70' r='70'></circle>
					<circle cx='70' cy='70' r='70'></circle>
				</svg>
				<div class='timeline__middle-icon'>
					<div class='round'>1</div>
				</div>
			</div>
			<div class='timeline__empty-section'></div>
		</section>
	);
};

export default OddItem;
