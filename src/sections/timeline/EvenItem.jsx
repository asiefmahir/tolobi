import { icons } from "../../assets";

const EvenItem = ({ rowData, index }) => {
	const { title, excerpt, icon } = rowData;
	return (
		<section class='timeline'>
			<div class='timeline__empty-section'></div>

			<div class='timeline__curve-section'>
				<svg class='svg-odd'>
					<circle cx='70' cy='70' r='70'></circle>
					<circle cx='70' cy='70' r='70'></circle>
				</svg>
				<div class='timeline__middle-icon'>
					<div class='round'>{index + 1}</div>
				</div>
			</div>
			<div class='timeline__content'>
				<div class='timeline__title-desc'>
					<h3 class='timeline__title'>{title}</h3>
					<p class='timeline__desc'>{excerpt}</p>
				</div>

				<div class='timeline__icon'>
					<img src={icon} alt='' />
				</div>
			</div>
		</section>
	);
};

export default EvenItem;
