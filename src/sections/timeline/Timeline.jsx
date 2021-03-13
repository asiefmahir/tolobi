import styled from 'styled-components';

const Timeline = styled.section`
    display: flex;
    margin-top: 4.5rem; 

    @media (max-width: 860px) {
        .timeline {
            margin-top: 5rem;
        }  
    }

    @media (max-width: 768px) {
        
        .timeline{
            margin-top:6rem;
        }
    }
    
`


export default Timeline;