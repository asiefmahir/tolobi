import styled from 'styled-components';

const CurveSection = styled.div`
    &{
        position: relative;
        width: 33%;
    }

    &::after {
        content: "";
        width: 3px;
        height: 100%;
        background: #2f2f2f;
        position: absolute;
        top: -156px;
        left: 50%;
    }

    // @media (max-width: 894px) {
    //     &::after {
    //         top: -171px;
    //     }
    // }

    @media (max-width: 860px) {

        &::after {
            top: -188px;
        }
    }

    @media (max-width: 768px) {
        &::after {
            top: -190px;
        }
    }
`

export default CurveSection;