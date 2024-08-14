import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer, rootReducer } from "../../redux/root-reducer";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useState } from "react";
import { removeItemFromCart } from "../../redux/Cart/cart-slice";
import { Product } from "../../data/products";

interface CartProps {
    showCart: boolean;
    setShowCart: (showCart: boolean) => void;
}

export const Cart: React.FC<CartProps> = ({
    showCart,
    setShowCart
}) => {

    const dispatch = useDispatch();
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
    const total = cart.reduce((totalCart, product) => { return totalCart + product.price}, 0);

    const [showModal, setShowModal] = useState(false);
    const [itemToRemove, setItemToRemove] = useState<Product | null>(null);
    const [showRemoveFromCartMessage, setShowRemoveFromCartMessage] = useState(false);

    
    const handleRemoveClick = (product: Product) => {
        setItemToRemove(product);
        setShowModal(true);
    };

    const confirmRemove = () => {
        if (itemToRemove) {
            dispatch(removeItemFromCart(itemToRemove.id));
            setShowRemoveFromCartMessage(true);
            setTimeout(() => setShowRemoveFromCartMessage(false), 3000); // Mensagem desaparece após 3 segundos
        }
        setShowModal(false);
        setItemToRemove(null);
    };

    return (
        <S.Container showCart={showCart}>
            <S.CloseButton >
                <S.Title>Cart</S.Title>
                <FaTimes onClick={() => setShowCart(false)} size={20} color="black" className='s'/>
            </S.CloseButton>
            <hr></hr>
            <S.CartProductList>
                {cart.map((product) => (
                    <S.CartProductItem style={{fontSize: '13px'}} key={product.id}>
                        <strong>{product.title}</strong> - {product.price} R$
                        <i style={{margin: '10px'}}onClick={() => handleRemoveClick(product)}><FaTrash />
                        </i>
                        {/* <button style={{ backgroundColor: "navy", color: "white" }} onClick={() => handleRemoveClick(product)}>Remove</button> */}
                    </S.CartProductItem>
                ))}
            </S.CartProductList>
            <S.CartTotal> Total: {total.toFixed(2)} R$</S.CartTotal>
            {showModal && (
                <S.Modal>
                    <S.ModalContent>
                        <h1 style={{ fontSize: '18px', color: '#333', marginBottom: '20px' }}>
                            Are you sure you want to remove this item?
                        </h1>
                        <button
                            onClick={confirmRemove}
                            style={{
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                margin: '5px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            Yes
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                margin: '5px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            No
                        </button>
                    </S.ModalContent>
                </S.Modal>
            )}
        {showRemoveFromCartMessage && <S.MessageRemoved>Product removed from cart!</S.MessageRemoved>}

        </S.Container > 
    )
}