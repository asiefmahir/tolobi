import styled from 'styled-components';

const CurveSection = styled.div`
    &{
        position: relative;
        width: 33%;
    }

    &::after {
        content: "";
        width: 3px;
        height: 60%;
        background: #2f2f2f;
        position: absolute;
        top: -92px;
        left: 50%;
    }

    @media (max-width: 894px) {
        &::after {
            top: -105px;
        }
    }

    @media (max-width: 860px) {

        &::after {
            height:71%;
            top: -131px;
        }
    }

    @media (max-width: 768px) {
        &::after {
            height: 66%;
            top: -123px;
        }
    }
`

export default CurveSection;