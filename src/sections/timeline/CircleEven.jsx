import styled from 'styled-components';

const CircleEven = styled.div`
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
        left:-5px;
    }
`

export default CircleEven;