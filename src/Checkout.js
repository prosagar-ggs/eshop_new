import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue} from "./StateProvider";
import Header  from "./Header";

const Checkout=()=>{

    const [{basket}, dispatch] = useStateValue();
    return(
        <div>
            <Header />
            <div className="checkout">
                <div className="checkout__left">
                    <img src="https://uploads-ssl.webflow.com/6170113bcee52976966547f4/62037f7b81efb140ca1ed98d_amazonads-logo.png"
                        alt="" className="checkout__ad" />
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                
                </div>
                <div className="checkout__right">
                    <Subtotal/>
                
                
                </div>
            </div>
        </div>

    );
}
export default Checkout;