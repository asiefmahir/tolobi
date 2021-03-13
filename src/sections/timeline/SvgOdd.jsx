import styled from 'styled-components';

const SvgOdd = styled.svg`
    & {
        position: absolute;
        margin-left: 26%;
    }

    & circle:nth-child(2){
        stroke: #2f2f2f;
	    stroke-dasharray: 223px;
	    stroke-dashoffset: -108px;
    }
    
    @media (max-width: 894px) {
        & {
            margin-left: 24.5%;
        }
    }

    @media (max-width: 860px) {
	    & {
		    margin-left: 23.5%;
	    }
    }

    @media (max-width: 768px) {
	    & {
		    margin-left: 20.5%;
	    }
    }

`
export default SvgOdd;
