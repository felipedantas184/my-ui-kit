import { useContext, useEffect, useState } from "react"
import getCommerce from "../utils/commerce"
import { CART_RETRIEVE_REQUEST, CART_RETRIEVE_SUCCESS } from "../utils/constants"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { Store } from "./Store"

const Layout = ({ children, commercePublicKey }) => {
	//Sidebar//
	const [isOpen, setIsOpen] = useState(false)

	const toggle = () =>{
		setIsOpen(!isOpen);
	}
	//Sidebar//

	const { state, dispatch } = useContext(Store);
	const { cart } = state;

	useEffect(() => {
		const fetchCart = async () => {
		const commerce = getCommerce(commercePublicKey);
		dispatch({ type: CART_RETRIEVE_REQUEST });
		const cartData = await commerce.cart.retrieve();
		dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
    };
    fetchCart();
	}, []);
	
	return ( 
		<div className="content">
			<Navbar toggle={toggle} cart={cart} />
			<Sidebar isOpen={isOpen} toggle={toggle} />
			{children}
			<Footer />
		</div>
	);
}
 
export default Layout;