import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import Headphone from "./assets/hero/headphone.png";
import Watch from "./assets/category/smartwatch.png";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const bannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  Image: Headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis?",
  bgColor: "#f42c37",
};

const bannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 28 Jan",
  Image: Watch,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis?",
  bgColor: "#2dcc6f",
};

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white overflow-hidden duration-200 px-4 md:px-0">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Category />
      <Services />
      <Banner data={bannerData} />
      <Products />
      <Banner data={bannerData2} />
      <Blogs />
      <Partner />
      <Footer />
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
    </div>
  );
}

export default App;
