import "./Home.css";
import Product  from './Product';
import Header  from "./Header";

const Home=()=>{
    return(
        <div>
            <Header />
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
                                alt="" className="home__image"/>
                    <div className="home__row">
                        <Product
                            id="12321341"
                            title="Bennet Mystic 15.6 inch Laptop Shoulder Messenger sling Office Bag, Water
                            Repellent Fabric for Men and Women (Blue)"
                            price={11.96}
                            rating={5}
                            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        <Product
                            id="12321342"
                            title="Farberware Classic FMO07AHTBKJ 0.7 Cu. 
                            Ft. 700-Watt Microwave Oven with LED Lighting, Brushed Stainless Steel"
                            price={239.0}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/81GfrNisjZL._AC_UY218_.jpg"
                        />

                    </div>
                    <div className="home__row">
                        <Product
                            id="12321343"
                            title="Publication Manual (OFFICIAL) 7th Edition of the American 
                            Psychological Association Seventh Edition"
                            price={199.99}
                            rating={3}
                            image="https://images-na.ssl-images-amazon.com/images/I/71lk10uajiL._AC_UL210_SR195,210_.jpg"
                        />
                        <Product
                            id="12321344"
                            title="Echo Dot (3rd Gen, 2018 release) - Smart speaker with Alexa - Charcoal"
                            price={98.99}
                            rating={5}
                            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQb3ypLiHIOVLwlwF14ZQz5Y7WcgQHCVPY-M-WA6k5Zo_nQ9dtW-krosi6bzPyMfo75EQ59TIrKnKmi&usqp=CAc"
                        />
                        <Product
                            id="12321345"
                            title="2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Sky Blue (4th Generation)"
                            price={598.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/71FePRgkiZL._AC_UY218_.jpg"
                        />
                    </div>
                    <div className="home__row">
                        <Product
                            id="12321346"
                            title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R
                             Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black"
                            price={1094.98}
                            rating={4}
                            image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UY218_.jpg"/>
                    </div>
                
                </div>
            
            </div>
        
        </div>
    );
}
export default Home;