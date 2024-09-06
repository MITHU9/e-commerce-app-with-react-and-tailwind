import Button from "../shared/Button";

/* eslint-disable react/prop-types */
const ProductCart = ({ data }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {data.map((product) => (
          <div
            data-aos="fade-up"
            data-aos-delay={product.aosDelay}
            className="group"
            key={product.id}
          >
            <div className=" relative  max-w-[280px]">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-[200px] object-cover rounded-xl"
              />
              <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full text-center group-hover:backdrop-blur-sm rounded-md duration-200 items-center justify-center">
                <Button
                  text={"Add to Cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className="text-xl">
              <h3 className="font-bold">{product.title}</h3>
              <p className=" font-semibold">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
