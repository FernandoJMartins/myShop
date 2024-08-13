import { useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer, rootReducer } from "../../redux/root-reducer";

interface CartProps {
    showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({
    showCart
}) => {

    
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
    const total = cart.reduce((totalCart, product) => { return totalCart + product.price}, 0);

    return (
        <S.Container showCart={showCart}>
            <S.Title>Cart</S.Title>
            <hr></hr>
            <S.CartProductList>
                {cart.map((product) => (
                    <S.CartProductItem key={product.id}><strong>{product.title}</strong> - {product.price} R$</S.CartProductItem>
                ))}
            </S.CartProductList>


            <S.CartTotal> Total: {total} R$</S.CartTotal>
        </S.Container > 
    )
}