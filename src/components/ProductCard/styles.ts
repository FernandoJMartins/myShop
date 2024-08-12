import { styled } from "styled-components";



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


    object-fit: contain;
`

export const ProductTitle = styled.h2`
    font-weight: 500;
    font-size: 1.2rem;

    min-height: 3rem;
`

export const ReviewPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    margin-top: 1rem;
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
    background-color: violet;
    color: black;

    display: flex;
    align-items: center;
`

