import styled from 'styled-components';


export const StyledHeader = styled.header`
    background-color: navy;


`;

export const HeaderTitle = styled.h1`
    color: white`;


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

    display: flex;
    align-items: center;


`;

export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 2rem;
    background-color: violet;
    color: black;

    display: flex;
    align-items: center;
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