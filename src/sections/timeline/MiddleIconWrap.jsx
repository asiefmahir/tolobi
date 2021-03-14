import styled from 'styled-components';
 

const MiddleIconWrap = styled.div`
    &{
        margin-top: -4px;
        margin-left: 27%;
    }


    @media (max-width: 1024px) {
        & {
            margin-left: 27%;
        }
    }

    @media (max-width: 860px) {
        & {
            margin-left: 24%;
        }
    }

    @media (max-width: 768px) {
        & {
            margin-left: 20.5%;
        }
    }
`

export default MiddleIconWrap;