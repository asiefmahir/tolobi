

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
