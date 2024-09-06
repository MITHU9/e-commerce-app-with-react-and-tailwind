import img1 from "../../assets/brand/br-1.png";
import img2 from "../../assets/brand/br-2.png";
import img3 from "../../assets/brand/br-3.png";
import img4 from "../../assets/brand/br-4.png";
import img5 from "../../assets/brand/br-5.png";

const Partner = () => {
  return (
    <div className=" mt-16 py-4 bg-gray-200 dark:bg-gray-800">
      <div className="container ">
        <div
          data-aos="zoom-out"
          className="grid grid-cols-1 lg:grid-cols-5  p-6 gap-4 place-items-center opacity-50"
        >
          <img
            src={img1}
            alt="brand"
            className="w-[100px]  object-cover dark:invert"
          />

          <img
            src={img2}
            alt="brand"
            className="w-[100px] object-cover dark:invert"
          />

          <img
            src={img3}
            alt="brand"
            className="w-[100px] object-cover dark:invert"
          />

          <img
            src={img4}
            alt="brand"
            className="w-[100px] object-cover dark:invert"
          />

          <img
            src={img5}
            alt="brand"
            className="w-[100px] object-cover dark:invert"
          />
        </div>
      </div>
    </div>
  );
};

export default Partner;
