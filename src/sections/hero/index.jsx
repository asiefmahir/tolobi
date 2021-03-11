
// import styled from "styled-components";
// const HeroWrapper = styled.div`
// 	background: url(${(props) => props.url});
// 	background-repeat: no-repeat;
// 	background-size: cover;
// 	background-position: center;
// 	width: 100%;
// 	height: 65vh;
// 	position: relative;
// `;

// const Span = styled.span`
// 	color: #63a02e;
// `;

// const Heading = styled.h2`
// 	font-size: 2.625rem;
// 	padding-top: 5rem;
// 	font-weight: 300;
// 	color: #ffffff;
// 	z-index: 1;
// `;

// const Paragraph = styled.p`
// 	color: #ffffff;
// 	font-weight: 600;
// 	font-size: 1.125rem;
// 	margin-top: 1rem;
// 	text-transform: capitalize;
// 	z-index: 1;
// `;

// const Overlay = styled.div`
// 	width: 100%;
// 	top: 0;
// 	left: 0;
// 	height: 100%;
// 	position: absolute;
// 	background: linear-gradient(
// 		269.93deg,
// 		rgba(0, 0, 0, 0) 75.67% ,
// 		rgba(0, 0, 0, 0.74) 0.05%,
// 		rgba(0, 0, 0, 0.74) 25.65%
// 	);
// 	display:flex;
// `;
import HeroWrapper from "./HeroWrapper";
import Overlay from "./Overlay";
import Heading from "./Heading";
import Span from "./Span";
import Paragraph from "./Paragraph"

const Hero = ({ image }) => {
	return (
		<HeroWrapper url={image}>
			<Overlay>
				<div className='container'>
					<Heading>
						Everything You <br /> Need to{" "}
						<Span>
							Rent out <br /> Your Home
						</Span>
					</Heading>
					<Paragraph>
						Whatever your needs may be, we've got you covered. It all <br />{" "}
						depends on how hands-off you want to be!
					</Paragraph>
				</div>
			</Overlay>
		</HeroWrapper>
	);
};

export default Hero;
