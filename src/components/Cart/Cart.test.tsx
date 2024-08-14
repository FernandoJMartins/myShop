import { render } from "@testing-library/react"
import { Cart } from "./Cart"
import { Provider } from "react-redux";
import { store } from "../../redux/store";

jest.mock('react-redux')

describe('Cart > Unit tests', () => {
    it('should render an empty cart', () => {
        render(
        <Provider store={store}>
            <Cart showCart={true} setShowCart={() => {}}/>
        </Provider>
    );
    })
})