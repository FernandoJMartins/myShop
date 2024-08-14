import styled, { keyframes } from 'styled-components';

interface ContainerProps{
    showCart: boolean;
}

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

export const Container = styled.aside<ContainerProps>`
    position: fixed;
    z-index: 99;
    top: 0;
    right: ${(props) => props.showCart ? '0' : '-500px'};
    transition: 0.5s;
    width: 385px;
    background-color: white;
    height: 100vh;
    padding: 2rem;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);
`;



export const Title = styled.h1``;

export const CartProductList = styled.ul`
    padding: 1rem 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CartProductItem = styled.li`
    color: black;
    justify-content: space-between;
    gap: 1rem;
    `;



export const CartTotal = styled.strong``;

export const CloseButton = styled.div`
    display:flex;
    justify-content: space-between;
    color: black;
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
`;

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

export const MessageRemoved = styled.div`
    position: fixed;
    top: 90vh;
    right: 10px;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
    animation: ${slideIn} 1s forwards, ${fadeIn} 3s forwards;
`;