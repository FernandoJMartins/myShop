import * as S from "./styles";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { Cart } from "../Cart/Cart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {

	const dispatch = useDispatch();
	const { user } = useSelector(
		(rootReducer: RootReducer) => rootReducer.userReducer);
	const isLogged = user !== null;
	const [showCart, setShowCart] = useState(false);

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

			<S.ButtonsWrapper>
				<S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
					{isLogged ? 'Logout' : 'Login'}
					{isLogged ? <FiLogOut /> : <FiLogIn />}
				</S.AuthButton>
				<S.CartButton onClick={() => setShowCart(!showCart)}>Carrinho
					<GiShoppingCart />
				</S.CartButton>
			</S.ButtonsWrapper>
			
        </S.Wrapper>
		<Cart showCart={showCart}/>

    </S.StyledHeader>
  );
}				