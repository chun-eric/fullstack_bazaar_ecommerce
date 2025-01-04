import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
// import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from "./pages/Collection";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Header - Full width with contained content */}
      <div className='w-full'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <ToastContainer />
          <Navbar />
          <SearchBar />
        </div>
      </div>

      {/* Regular contained content */}
      <div className='w-full'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/orders' element={<Orders />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </div>
      </div>

      {/* Footer full width with container content */}
      <div className='w-full bg-[#111827]'>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
          <Footer />
        </div>
      </div>
      <Analytics />
    </div>
  );
};

export default App;
