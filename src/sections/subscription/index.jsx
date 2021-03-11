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
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction:column;
`;

const FormWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 40%;
	border: 1px solid #ffffff;
	margin:3rem auto;
	border-radius:10px;
`;

const Icon = styled.img`
	width: 0.9375rem;
	height: 0.70375rem;
	margin-left: .5rem;
`;

const InputField = styled.input`
	& {
		flex-grow: 1;
		background-color: rgba(0,0,0,0.0);
		outline: none;
		border: none;
		margin-left:1rem;
		height:100%;
	}

	&::placeholder {
		color: #ddd;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 19.87px;
		latter-spacing:10px;
	}
`;

const FormButton = styled.button`
	background-color: #ffffff;
	color: #000000;
	margin: 1rem auto;
	height:100%;
	width:10rem;
	border:none;
	outline:none;
	border-radius:0px 10px 10px 0px;
	cursor:pointer;
`;

const Subscription = () => {
	return (
		<Wrapper url={images.bgImage}>
			<Overlay  className='container'>
				<Title>We manage your property like it’s our own</Title>
				<SubTitle>Get in touch with us to learn more.</SubTitle>
				<FormWrapper>
						<Icon src={icons.messageIcon} />
						<InputField
							type='email'
							name='email'
							placeholder='Enter your email address'
						/>
						<FormButton>Get Started</FormButton>

				</FormWrapper>
			</Overlay>
		</Wrapper>
	);
};

export default Subscription;
