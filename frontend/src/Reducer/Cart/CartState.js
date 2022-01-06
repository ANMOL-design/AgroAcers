import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEMS} from "./Types"

const CartState = ({children}) => {

    const initialState = {
        showcart: false,
        cartItems: []
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    console.log(state);

    const addToCart = (item) => {
        // console.log(item);
        dispatch( {type: ADD_TO_CART, payload: item})
    }

    const showhidecart = () => {
        dispatch( {type: SHOW_HIDE_CART})
    }

    const removeitem = id => {
        console.log(id);
        dispatch( {type: REMOVE_ITEMS, payload: id})
    }

    return(
        <CartContext.Provider value={{
            showcart: state.showcart,
            cartItems: state.cartItems,
            addToCart,
            showhidecart,
            removeitem
        }}>{children}

        </CartContext.Provider>
    )
}

export default CartState;