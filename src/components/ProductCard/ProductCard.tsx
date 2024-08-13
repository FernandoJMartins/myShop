import { GiShoppingCart } from "react-icons/gi";
import * as S from "./styles";
import { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';

interface ProductCardProps {
    product: Product;
}


export const ProductCard: React.FC<ProductCardProps> = ({product }) => {

    const { cart} = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);
    const dispatch = useDispatch();


    const isProductOnCart = cart.find((productOnCart) => productOnCart.id === product.id) !== undefined; //Variavel Booleana

    function handleAddProductToCart(){
        dispatch(addProduct(product));
    }

    function handleRemoveProductToCart(){
        dispatch(removeProduct(product))
    }

    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description}/>


            <S.ProductTitle>{product.title}</S.ProductTitle>

            <S.ReviewPriceContainer>{product.price} R$</S.ReviewPriceContainer>


            <S.AddToCardButtonWrapper>

                { isProductOnCart ? (
                    <S.RemoveToCartButton onClick={handleRemoveProductToCart}>
                        Remove from Cart
                    </S.RemoveToCartButton>

                ) : (
                    <S.AddToCartButton onClick={handleAddProductToCart}>
                        Add to Cart
                    </S.AddToCartButton>
                )} 
                
            </S.AddToCardButtonWrapper>
        </S.Card>

    )
}