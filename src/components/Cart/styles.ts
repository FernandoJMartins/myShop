import { styled } from "styled-components";

interface ContainerProps{
    showCart: boolean;
}


export const Container = styled.aside<ContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => props.showCart ? '0' : '-500px'};
    transition: 0.5s;

    width: 500px;
    background-color: white;
    height: 50vh;
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

export const CartProductItem = styled.li``;


export const CartTotal = styled.strong``;