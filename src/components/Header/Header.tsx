import * as S from "./styles";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { Cart } from "../Cart/Cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

export const Header: React.FC = () => {

	const dispatch = useDispatch();
	const { user } = useSelector(
		(rootReducer: RootReducer) => rootReducer.userReducer);
	const isLogged = user !== null;
	const [showCart, setShowCart] = useState(false);

	const [dropdownVisible, setDropdownVisible] = useState(false);


	console.log(user)

	function handleUserAuth() {
		if (user === null){
			//dispatch login action
			dispatch(login({
				name: 'User', 
				email: 'as@sdf.cin'
			})
		);
		}
		else {
			dispatch(logout({}));
	}}


	return (
    <S.StyledHeader>
		<S.Wrapper>
			<S.HeaderTitle>My shop</S.HeaderTitle>
			

			<S.SearchBar placeholder="Search for something on the store..."/>
			<a style={{
				marginLeft: '-12rem',
				marginTop: '1.2rem',
				fontSize: '1rem',
			}}>

			<FaSearch/>
			</a>
				
			<S.ButtonsWrapper>
				<S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
					{isLogged ? 'Logout' : 'Login'}




					{/* </S.LogButton> */}
				</S.AuthButton>
				<S.CartButton onClick={() => setShowCart(!showCart)}>Cart
					
					<S.ShoppingCart><CgShoppingCart/></S.ShoppingCart>
				</S.CartButton>
			</S.ButtonsWrapper>
			
        </S.Wrapper>
		<Cart showCart={showCart} setShowCart={setShowCart}/>
		<nav style={{
            marginLeft: '-46rem',
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'navy',
            justifyItems: 'center',
            padding: '1rem',
        }}>
            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                margin: 0,
                padding: 0,
                gap: '3em',
                fontSize: '1rem',
                color: 'blue',
                position: 'relative'
            }}>
                <li><a href="/" style={{ color: "white", textDecoration: 'none' }}>Home</a></li>
                <li style={{ position: 'relative' }}
					onMouseEnter={() => setDropdownVisible(true)}
					onMouseLeave={() => setDropdownVisible(false)}
				>
                   <a href="/products" style={{ color: "white", textDecoration: 'none' }}>Products</a>
                    {dropdownVisible && (
                        <ul style={{
                            display: 'block',
                            position: 'absolute',
                            backgroundColor: 'white',
                            minWidth: '160px',
                            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                            zIndex: 1,
                            padding: 0,
                            margin: 0,
                            listStyleType: 'none'
                        }}>
                            <li><a href="/products/category1" style={{ color: 'navy', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Men's Clothing</a></li>
                            <li><a href="/products/category2" style={{ color: 'navy', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Bags & Accessories</a></li>
                            <li><a href="/products/category3" style={{ color: 'navy', padding: '12px 16px', textDecoration: 'none', display: 'block' }}>Others</a></li>
                        </ul>
                    )}
                </li>
                <li><a href="/about" style={{ color: "white", textDecoration: 'none' }}>About</a></li>
                <li><a href="/contact" style={{ color: "white", textDecoration: 'none' }}>Contact</a></li>
            </ul>
		</nav>

    </S.StyledHeader>
  );
}				