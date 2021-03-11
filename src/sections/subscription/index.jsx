import styled from "styled-components";
import { images, icons } from "../../assets";

const Title = styled.h2`
	color: #ffffff;
	font-size: 2.625rem;
	font-style: normal;
	font-weight: 700;
	line-height: 59.6px;
`;
const SubTitle = styled.h5`
	color: #ffffff;
	font-size: 1.25rem;
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
	height: 25rem;
	position: relative;
	margin-top: 3rem;
	text-align: center;
	text-decoration: capitalize;
`;

const Overlay = styled.div`
	width: 100%;
	top: 0;
	left: 0;
	height: 100%;
	position: absolute;
	background: rgba(0, 168, 87, 0.87);
`;

const FormWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60%;
	border: 1px solid #ffffff;
`;

const Icon = styled.img`
	width: 0.9375rem;
	height: 0.70375rem;
`;

const InputField = styled.input`
	& {
		flex-grow: 1;
		background-color: transparent;
		outline: none;
		border: none;
	}

	&::placeholder {
		color: #ffffff;
		font-weight: 700;
		font-size: 0.875rem;
		line-heighy: 19.87px;
	}
`;

const FormButton = styled.button`
	background-color: #ffffff;
	color: #000000;
	font-size: 0.9375;
	margin: 1rem auto;
`;

const Subscription = () => {
	return (
		<Wrapper url={images.bgImage} className='container'>
			<Overlay>
				<Title>We manage your property like it’s our own</Title>
				<SubTitle>Get in touch with us to learn more.</SubTitle>
				<FormWrapper>
					<form>
						<Icon src={icons.messageIcon} />
						<InputField
							type='email'
							name='email'
							placeholder='Enter your email address'
						/>
						<FormButton>Get Started</FormButton>
					</form>
				</FormWrapper>
			</Overlay>
		</Wrapper>
	);
};

export default Subscription;
