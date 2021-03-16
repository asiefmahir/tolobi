import styled from "styled-components";
import { images, icons } from "../../assets";

const Title = styled.h2`
	color: #ffffff;
	font-size: ${(props) =>
		props.mobileView === true ? "1.1875rem" : "2.625rem"};
	font-style: normal;
	font-weight: 700;
	line-height: ${(props) =>
		props.mobileView === true ? "1.8725rem" : "3.725rem"};
`;
const SubTitle = styled.h5`
	color: #ffffff;
	font-size: ${(props) =>
		props.mobileView === true ? "0.875rem" : "1.125rem"};
	font-style: normal;
	font-weight: 700;
	line-height: 28.38px;
	letter-spacing: 0em;
`;

const Wrapper = styled.div`
	background: url(${(props) => props.url});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 100%;
	height: ${(props) => (props.mobileView === true ? "20rem" : "25rem")};
	position: relative;
	margin-top: 3rem;
	text-transform: capitalize;
`;

const Overlay = styled.div`
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	position: absolute;
	background: rgba(0, 168, 87, 0.87);
	text-align: center;
	text-decoration: capitalize;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 1rem;
	padding-top: 2rem;
`;

const FormWrapper = styled.div`
	display: ${(props) => props.mobileView === false && "flex"};
	justify-content: space-between;
	align-items: center;
	width: ${(props) => (props.mobileView === true ? "100%" : "40%")};
	border: ${(props) => (props.mobileView ? "none" : "1px solid #ffffff")};
	margin: ${(props) => (props.mobileView === true ? "1rem auto" : "3rem auto")};
	border-radius: 10px;
`;

const Icon = styled.img`
	width: 0.9375rem;
	height: 0.70375rem;
	margin-left: 0.5rem;
`;

const InputField = styled.input`
	& {
		flex-grow: 1;
		background-color: rgba(0, 0, 0, 0);
		outline: none;
		border: none;
		margin-left: 1rem;
		height: 100%;
	}

	&::placeholder {
		color: #ddd;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 19.87px;
		latter-spacing: 10px;
	}
`;

const FormButton = styled.button`
	background-color: #ffffff;
	color: #000000;
	margin: 1rem auto;
	height: ${(props) => (props.mobileView === true ? "4rem" : "100%")};
	width: ${(props) => (props.mobileView === true ? "100%" : "10rem")};
	border: none;
	outline: none;
	border-radius: ${(props) =>
		props.mobileView === true ? "10px" : "0px 10px 10px 0px"};
	cursor: pointer;
`;

const InputWrapper = styled.div`
	border: 1px solid #ffffff;
	width: 100%;
	height: 3rem;
	display: flex;
	border-radius: 10px;
	align-items: center;
`;

const Subscription = ({ mobileView }) => {
	return (
		<Wrapper mobileView={mobileView} url={images.bgImage}>
			<Overlay className='container'>
				<Title mobileView={mobileView}>
					We manage your property like it’s our own
				</Title>
				<SubTitle mobileView={mobileView}>
					Get in touch with us to learn more.
				</SubTitle>
				<FormWrapper mobileView={mobileView}>
					<InputWrapper>
						<Icon src={icons.messageIcon} />
						<InputField
							type='email'
							name='email'
							placeholder='Enter your email address'
						/>
					</InputWrapper>
					<FormButton mobileView={mobileView}>Get Started</FormButton>
				</FormWrapper>
			</Overlay>
		</Wrapper>
	);
};

export default Subscription;
