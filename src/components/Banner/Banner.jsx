/* eslint-disable react/prop-types */
const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center mt-3">
      <div className="container md:p-1">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl py-4 md:py-1"
        >
          <div className="px-8">
            <p data-aos="slide-right" className="text-xl">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="text-4xl lg:text-7xl font-bold uppercase "
            >
              {data.title}
            </h1>
            <span data-aos="fade-up">{data.date}</span>
          </div>
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={data.Image}
              alt={data.title}
              className="w-[250px] md:w-[340px] scale-125 object-cover mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] "
            />
          </div>
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <h3 data-aos="zoom-out" className="text-xl font-bold">
              {data.title2}
            </h3>
            <h1 data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">
              {data.title3}
            </h1>
            <p data-aos="fade-up">{data.description}</p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                style={{ color: data.bgColor }}
                className="bg-white py-2 px-6  rounded-full"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
