import { GiShoppingCart } from 'react-icons/gi';
import styled from 'styled-components';


export const StyledHeader = styled.header`
    background-color: navy;
    color: white;
    padding: 20px;
    


`;

export const HeaderTitle = styled.h1`
    color: white;
    margin: 0.1em 1em`;
    
export const SearchBar = styled.input`
    padding: 0 2rem;
    margin: 1em 1em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 5px;
    width: 400px;
    
`;


interface AuthButtonProps {
    isLogged: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 2rem;
    background-color: ${(props) => props.isLogged ? 'red' : 'green'};
    color: white;
    margin: 1em 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.5rem;
    max-width:7.5rem;
`;

export const LogButton = styled.button`
    border: none;
    height: 30px;
    margin: 0 0.5em;
    background-color: white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 2rem;
    margin: 1em 1em;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    width: 7.5rem;
    `;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;

    max-width: 1240px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 60px;
`    ;

export const ButtonsWrapper = styled.div`
    display: flex;
    
    
    `;


export const ShoppingCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.5em;
    color: white;
    `;
