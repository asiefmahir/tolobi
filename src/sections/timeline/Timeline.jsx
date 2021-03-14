import styled from 'styled-components';

const Timeline = styled.section`
    & {
        display: flex;
        margin-top: 8.5rem; 
    }

    @media (max-width: 860px) {
        & {
            margin-top: 8.7rem;
        }  
    }

    @media (max-width: 768px) {
        & {
            margin-top:8.9rem;
        }
    }
    
`


export default Timeline;