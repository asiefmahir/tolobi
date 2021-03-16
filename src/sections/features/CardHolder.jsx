import styled from "styled-components";

const CardHolder = styled.div`
	display: flex;
	flex-direction: ${(props) => (props.mobileView ? "column" : "row")};
	align-items: center;
	justify-content: space-around;
	margin-top: 1.8rem;
`;
export default CardHolder;
