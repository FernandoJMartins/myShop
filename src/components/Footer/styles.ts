import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
    from {
        opacity: 1
    }
    to {
        opacity: 0;
    }`


export const Message = styled.div`
    position: fixed;
    top: 90vh;
    right: 10px;
    background-color: green;
    color: white;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
    animation: ${slideIn} 1s forwards, ${fadeIn} 3s forwards;
`;