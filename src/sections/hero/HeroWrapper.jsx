import styled from "styled-components";

const HeroWrapper = styled.div`
	background: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	height: ${(props) => (props.mobileView ? "75vh" : "65vh")};
	position: relative;
`;

export default HeroWrapper;
