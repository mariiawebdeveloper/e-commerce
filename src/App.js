import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Shop} from "./pages/shop/shop";
import {Contact} from "./pages/contact";
import {Cart} from "./pages/cart/cart";
import {ProductDetails} from "./pages/productDetails/productDetails";
import {ShopContextProvider} from "./context/shop-context";
import {Footer} from "./components/footer";
import Aboutus from "./pages/aboutUs/aboutus";

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Shop/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path="/aboutus" element={<Aboutus/>}/>
                        <Route path="/product/:id" element={<ProductDetails/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </ShopContextProvider>
        </div>
    );
}

export default App;
