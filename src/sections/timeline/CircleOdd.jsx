import styled from 'styled-components';

const CircleOdd = styled.div`
    &{
        position:relative;
    }
    &::after{
        content:'';
        position:absolute;
        width:10px;
        height:10px;
        background:#2f2f2f;
        border-radius:50%;
        top:-6px;
        right:-5px;
    }
`

export default CircleOdd;