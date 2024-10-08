/* eslint-disable react/prop-types */
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from "../shared/Button";

const heroSlide = [
  {
    id: 1,
    title: "Wireless",
    title2: "Headphones",
    subtitle: "Beats Solo",
    image: Image1,
  },
  {
    id: 2,
    title: "Wireless",
    title2: "Virtual",
    subtitle: "Beats Solo",
    image: Image2,
  },
  {
    id: 1,
    title: "Branded",
    title2: "laptops",
    subtitle: "Beats Solo",
    image: Image3,
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    draggable: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex items-center justify-center ">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {heroSlide.map((item) => (
              <div key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h3
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-center"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold"
                    >
                      {item.subtitle}
                    </h3>
                    <h2
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-center"
                      className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {item.title}
                    </h2>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-anchor-placement="top-center"
                      className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold "
                    >
                      {item.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        text="Shop By Category"
                        bgColor="bg-primary"
                        textColor="text-white"
                        handleClick={handleOrderPopup}
                      />
                    </div>
                  </div>

                  <div className="order-1 sm:order-2 ">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="z-10 relative"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40 pr-1 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
