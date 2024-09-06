import Heading from "../shared/Heading";
import ProductCart from "./ProductCart";
import Img1 from "../../assets/product/p-1.jpg";
import Img2 from "../../assets/product/p-2.jpg";
import Img3 from "../../assets/product/p-3.jpg";
import Img4 from "../../assets/product/p-4.jpg";
import Img5 from "../../assets/product/p-5.jpg";
import Img6 from "../../assets/product/p-7.jpg";
import Img7 from "../../assets/product/p-9.jpg";

const productsData = [
  // Add products data here
  {
    id: 1,
    img: Img1,
    title: "Boat Headphones",
    price: "120",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Smart Watch",
    price: "100",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Earbuds",
    price: "80",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Headphones",
    price: "150",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Bluetooth Headphones",
    price: "180",
    aosDelay: "800",
  },
  {
    id: 6,
    img: Img6,
    title: "Noise Cancelling Headphones",
    price: "200",
    aosDelay: "1000",
  },
  {
    id: 7,
    img: Img7,
    title: "In-ear Headphones",
    price: "130",
    aosDelay: "1200",
  },
  {
    id: 8,
    img: Img2,
    title: "Smart Watch",
    price: "160",
    aosDelay: "1400",
  },
];

const Products = () => {
  return (
    <div className="dark:bg-gray-800 dark:py-4">
      <div>
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Product Components */}
        <ProductCart data={productsData} />
      </div>
    </div>
  );
};

export default Products;
