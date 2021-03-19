import styled from "styled-components";
const SectionWrapper = styled.div`
	width: 100%;
	padding: 1rem;
	margin-top: 2rem;
`;
const HeadingWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Heading = styled.div`
	font-size: 1.1875rem;
	text-align: center;
`;
const ItemCard = styled.div``;
const ItemHeading = styled.div`
	text-align: center;
	font-weight: 600;
	font-size: 1rem;
	padding: 1rem;
	color: #312f2f;
	background-color: #eeeeee;
`;
const ItemInfoWrapper = styled.div`
	& {
		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 767px) {
		width: ${(props) => (props.hasWidth ? "83%" : "auto")};
		margin: ${(props) => (props.hasMargin ? "auto" : "inherite")};
	}
	@media (max-width: 625px) {
		width: ${(props) => (props.hasWidth ? "77%" : "auto")};
		margin: ${(props) => (props.hasMargin ? "auto" : "inherite")};
	}
	@media (max-width: 500px) {
		width: ${(props) => (props.hasWidth ? "72%" : "auto")};
		margin: ${(props) => (props.hasMargin ? "auto" : "inherite")};
	}
`;
const CompetitorTableForMobileVersion = ({ data }) => {
	console.log(data.slice(1));
	return (
		<SectionWrapper>
			<HeadingWrapper>
				<Heading>Competitors</Heading>
				<Heading>
					<img src={data[0].tolobi} alt='Tolobi' />
				</Heading>
			</HeadingWrapper>
			{data.slice(1).map((item, i) => (
				<>
					<ItemHeading>{item.title}</ItemHeading>
					<ItemInfoWrapper hasWidth={i % 2 === 1} hasMargin={i % 2 === 1}>
						{typeof item.competitor !== "object" ? (
							<div>
								<h2>{item.competitor}</h2>
							</div>
						) : (
							<div style={{ textAlign: "center" }}>
								<h2>{item.competitor.percentage}</h2>
								<p>{item.competitor.condition}</p>
							</div>
						)}
						{typeof item.tolobi !== "object" ? (
							<div>
								<h2>{item.tolobi}</h2>
							</div>
						) : (
							<div style={{ textAlign: "center" }}>
								<h2>{item.tolobi.percentage}</h2>
								<p>{item.tolobi.condition}</p>
							</div>
						)}
					</ItemInfoWrapper>
				</>
				// <ItemInfoWrapper>
				//  {
				//      typeof (item.competitor !== "object" ? (
				//          <ItemHeading>{item.title}</ItemHeading>
				//      ) : (
				//          <ItemHeading>
				//              <h2>{item?.competitor?.percentage}</h2>
				//              <p>{item?.competitor?.condition}</p>
				//          </ItemHeading>
				//      ))
				//  }
				//  {
				//      typeof (item.tolobi !== "object" ? (
				//          <ItemHeading>{item.tolobi}</ItemHeading>
				//      ) : (
				//          <ItemHeading>
				//              <h2>{item?.tolobi?.percentage}</h2>
				//              <p>{item?.tolobi?.condition}</p>
				//          </ItemHeading>
				//      ))
				//  }
				// </ItemInfoWrapper>
			))}
		</SectionWrapper>
	);
};
export default CompetitorTableForMobileVersion;
