import { GiShoppingCart } from "react-icons/gi";
import * as S from "./styles";
import { Modal } from "./styles";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeItemFromCart, removeProduct } from '../../redux/Cart/cart-slice';
import React from "react";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
}


export const ProductCard: React.FC<ProductCardProps> = ({product }) => {

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [itemToRemove, setItemToRemove] = useState<Product | null>(null);

    const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);
    const [showRemoveFromCartMessage, setShowRemoveFromCartMessage] = useState(false);

    const isProductOnCart = cart.find((productOnCart) => productOnCart.id === product.id) !== undefined; //Variavel Booleana

    function handleAddProductToCart(){
        dispatch(addProduct(product));

        setShowAddToCartMessage(true);
        setTimeout(() => {
            setShowAddToCartMessage(false);
        }, 3000);
    };

    function handleRemoveProductToCart(){
        dispatch(removeProduct(product))

        setShowRemoveFromCartMessage(true);
        setTimeout(() => {
            setShowRemoveFromCartMessage(false);
        }, 3000);
    }

    const handleRemoveClick = () => {
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
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description}/>


            <S.ProductTitle>{product.title}</S.ProductTitle>

            <S.ReviewPriceContainer>{product.price} R$</S.ReviewPriceContainer>


            <S.AddToCardButtonWrapper>

            {isProductOnCart ? (
                <S.RemoveToCartButton onClick={handleRemoveClick}>
                    Remove from Cart
                </S.RemoveToCartButton>
            ) : (
                <S.AddToCartButton onClick={handleAddProductToCart}>
                    Add to Cart
                </S.AddToCartButton>
            )}

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
                
            </S.AddToCardButtonWrapper>

            {showAddToCartMessage && <S.Message>Product added from cart!</S.Message>}
            {showRemoveFromCartMessage && <S.MessageRemoved>Product removed from cart!</S.MessageRemoved>}
        </S.Card>


    )
}