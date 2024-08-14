import * as S from "./styles";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { CgShoppingCart } from "react-icons/cg";
import { Cart } from "../Cart/Cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";
import { FaCaretDown, FaCaretRight, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdLogout } from "react-icons/md";

export const Header: React.FC = () => {

	const dispatch = useDispatch();
	const { user } = useSelector(
		(rootReducer: RootReducer) => rootReducer.userReducer);
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
	const isLogged = user !== null;
	const [showCart, setShowCart] = useState(false);

	const [dropdownVisible, setDropdownVisible] = useState(false);
    const [subDropdownVisible, setSubDropdownVisible] = useState(false);


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
                    {isLogged? <MdLogout fill="white" style={{width:'auto', marginLeft:'5px'}} /> : <IoIosLogIn fill="white" style={{width:'auto', marginLeft:'5px'}}/>}


					{/* </S.LogButton> */}
				</S.AuthButton>
                <S.CartStyle>
				<S.CartButton onClick={() => setShowCart(!showCart)}>Cart

					<S.ShoppingCart><CgShoppingCart/></S.ShoppingCart>

				</S.CartButton>
                {cart.length > 0 &&
                <span style={{
                background: 'red',
                width: '15px',
                height: '15px',
                position: 'absolute',
                top: 8,
                left: 8,
                color:'white',
                fontSize: '12px',
                borderRadius:'15px',
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>{cart.length}</span>}
        </S.CartStyle>
			</S.ButtonsWrapper>
			
        </S.Wrapper>
        

		    <Cart showCart={showCart} setShowCart={setShowCart}/>

        
		<nav style={{
            marginLeft: '-45rem',
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
                   <a href="/products" style={{ color: "white", textDecoration: 'none' }}>Products <FaCaretDown fill="white"/></a>
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
                            <li><a href="/products/category1" style={{ color: 'white', backgroundColor: 'navy', border:'solid 1px', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '0.8rem'}}>Men's Clothing</a></li>
                            <li style={{ position: 'relative' }}
                                    onMouseEnter={() => setSubDropdownVisible(true)}
                                    onMouseLeave={() => setSubDropdownVisible(false)}
                                >
                                    <a href="/products/category2" style={{ color: 'white', backgroundColor: 'navy', border: 'solid 1px', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '0.8rem'}}>Accessories <FaCaretRight fill="white" style={{marginRight:'20px'}}/></a>
                                    {subDropdownVisible && (
                                        <ul style={{
                                            display: 'block',
                                            position: 'absolute',
                                            left: '100%',
                                            top: 0,
                                            backgroundColor: 'white',
                                            minWidth: '160px',
                                            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
                                            zIndex: 1,
                                            padding: 0,
                                            margin: 0,
                                            listStyleType: 'none'
                                        }}>
                                            <li><a href="/products/category2/subcategory1" style={{ color: 'white', backgroundColor: 'navy', border: 'solid 1px', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '0.8rem' }}>Handbags</a></li>
                                            <li><a href="/products/category2/subcategory2" style={{ color: 'white', backgroundColor: 'navy', border: 'solid 1px', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '0.8rem' }}>Bracelet</a></li>
                                            <li><a href="/products/category2/subcategory3" style={{ color: 'white', backgroundColor: 'navy', border: 'solid 1px', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '0.8rem' }}>Rings</a></li>
                                        </ul>
                                    )}
                                </li>
                                <li><a href="/products/category3" style={{ color: 'white', backgroundColor: 'navy', border: 'solid 1px', padding: '12px 16px', textDecoration: 'none', display: 'block', fontSize: '0.8rem' }}>Others</a></li>
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