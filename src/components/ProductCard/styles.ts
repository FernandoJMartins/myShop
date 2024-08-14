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


export const Card = styled.article`
    background-color: white;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-content: center;
    box-shadow: 0 0 5px rgba(0,0,0,0.15);
    border-radius: 25px;
`

export const ProductImage = styled.img`
    width: 250px;
    height: 400px;
    margin: 0 auto;


    object-fit: scale-down;
`

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;
    max-height: 0.2em;

    min-height: 3rem;
`

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-top: -1em;
`

export const Review = styled.span`

`

export const Price = styled.strong`

`

export const AddToCardButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    width: 100%;
    align-items: center;
    justify-content: center;
`




export const AddToCartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 2rem;
    background-color: blue;
    color: white;

    display: flex;
    align-items: center;
`


export const RemoveToCartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    padding: 0 2rem;
    background-color: orange;
    color: black;

    display: flex;
    align-items: center;
`

export const ShoppingCart = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 2rem;
    color: white;
`


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