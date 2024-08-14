import { useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer, rootReducer } from "../../redux/root-reducer";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

interface CartProps {
    showCart: boolean;
    setShowCart: (showCart: boolean) => void;
}

export const Cart: React.FC<CartProps> = ({
    showCart,
    setShowCart
}) => {

    // const [showCart, setShowCart] = useState(initialShowCart);
    
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
    const total = cart.reduce((totalCart, product) => { return totalCart + product.price}, 0);

    return (
        <S.Container showCart={showCart}>
            <S.CloseButton >
                <S.Title>Cart</S.Title>
                <FaTimes onClick={() => setShowCart(false)} size={20} color="black" className='s'/>
            </S.CloseButton>
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