import styled from "styled-components";

const Heading = styled.h2`
	font-size: ${(props) => (props.mobileView ? "1.5rem" : "2.625rem")};
	padding-top: 5rem;
	font-weight: 300;
	color: #ffffff;
	z-index: 1;
`;

export default Heading;
