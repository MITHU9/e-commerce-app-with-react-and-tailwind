import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/gaming.png";
import Image5 from "../../assets/category/vr.png";
import Image6 from "../../assets/category/speaker.png";
import Button from "../shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Row */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="mb-1 text-gray-400 "
                >
                  Enjoy
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl font-semibold mb-1"
                >
                  With
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-4xl xl:text-5xl font-bold text-gray-500 mb-2"
                >
                  Earphone
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              src={Image1}
              alt="earphone"
              className="w-[320px] absolute bottom-0"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="mb-1 text-white "
                >
                  Enjoy
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl font-semibold mb-1"
                >
                  With
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-4xl xl:text-5xl font-bold text-white/40 mb-2"
                >
                  Gadget
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandYellow"}
                  />
                </div>
              </div>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              src={Image2}
              alt="earphone"
              className="w-[320px] absolute -right-8 lg:top-10"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end md:col-span-2 ">
            <div>
              <div className="mb-4">
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="mb-1 text-white/80 "
                >
                  Enjoy
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl font-semibold mb-1"
                >
                  With
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-4xl xl:text-5xl font-bold text-white/40 mb-2"
                >
                  Laptop
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-primary"}
                  />
                </div>
              </div>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              src={Image3}
              alt="earphone"
              className="w-[250px] absolute right-0 lg:bottom-10"
            />
          </div>

          {/* Second Row */}

          <div className="py-10 pl-5 bg-gradient-to-b from-gray-400 to-gray-200 text-white rounded-3xl relative h-[320px] flex items-end  md:col-span-2">
            <div>
              <div className="mb-4">
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="mb-1 text-white "
                >
                  Enjoy
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl font-semibold mb-1"
                >
                  With
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-4xl xl:text-5xl font-bold text-white/40 mb-2"
                >
                  Gaming
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="500"
                  data-aos-delay="200"
                >
                  <Button
                    text="Browse"
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              src={Image4}
              alt="earphone"
              className="w-[250px] absolute bottom-10 lg:right-0"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="mb-1 text-white "
                >
                  Enjoy
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl font-semibold mb-1"
                >
                  With
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-4xl xl:text-5xl font-bold text-white/40 mb-2"
                >
                  Virtual
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="500"
                  data-aos-delay="200"
                  className="relative z-10"
                >
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandGreen"}
                  />
                </div>
              </div>
            </div>

            <img
              data-aos="zoom-in"
              data-aos-once="true"
              src={Image5}
              alt="earphone"
              className="w-[320px] absolute right-0 lg:bottom-0"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="mb-1 text-white "
                >
                  Enjoy
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-2xl font-semibold mb-1"
                >
                  With
                </p>
                <p
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-4xl xl:text-5xl font-bold text-white/40 mb-2"
                >
                  Sound
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="500"
                  data-aos-delay="200"
                  className="relative z-10"
                >
                  <Button
                    text="Browse"
                    bgColor={"bg-white"}
                    textColor={"text-brandBlue"}
                  />
                </div>
              </div>
            </div>
            <img
              data-aos="zoom-in"
              data-aos-once="true"
              src={Image6}
              alt="earphone"
              className="w-[220px] absolute right-0 lg:bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
