import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import men_banner from "./components/assets/banner_mens.jpg";
import kid_banner from "./components/assets/banner_kids.jpg";
import Footer from "./components/Footer/Footer";
import PlaceOrder from "./pages/PlaceOrder";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import Contacts from "./pages/Contact";
import Services from "./pages/Services";
import Feedback from "./pages/Feedback"; 
import SearchResults from './pages/SearchResults';
import PaymentPage from "./pages/PaymentPage";
function App() {
  return (
    <div>
      <ToastContainer/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/order" element={<PlaceOrder/>}/>
          <Route path="/verify" element={<Verify/>}/>
          <Route path="myorders" element={<MyOrders/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contacts/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/payment" element={<PaymentPage />} />

        </Routes>
        <Footer />
    </div>
  );
}

export default App;
