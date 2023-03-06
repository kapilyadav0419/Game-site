import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/Cart-context";
import "./Header.css"
const Header = ()=> {
    const {cartData} = useContext(CartContext);
    const navigate = useNavigate();
    return(
        <>
            <nav className="navbar">
                <h1 className="log">
                    Game Site
                </h1>
                <h1 onClick={()=> {navigate('/cart')}}>
                    <span>{cartData.length}</span>
                    <i className="fa  fa-shopping-cart"></i>
                </h1>
            </nav>
        </>
    )
}
export default Header;