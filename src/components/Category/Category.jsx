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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First Row */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div>
              <div className="mb-4">
                <p className="mb-1 text-gray-400 ">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt="earphone"
              className="w-[320px] absolute bottom-0"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/90 text-white rounded-3xl relative h-[320px] flex items-end ">
            <div>
              <div className="mb-4">
                <p className="mb-1 text-white ">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gadget
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt="earphone"
              className="w-[320px] absolute -right-8 lg:top-10"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end col-span-2 ">
            <div>
              <div className="mb-4">
                <p className="mb-1 text-white ">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Laptop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt="earphone"
              className="w-[250px] absolute right-0 lg:bottom-10"
            />
          </div>

          {/* Second Row */}

          <div className="py-10 pl-5 bg-gradient-to-b from-gray-400 to-gray-200 text-white rounded-3xl relative h-[320px] flex items-end col-span-2 ">
            <div>
              <div className="mb-4">
                <p className="mb-1 text-white ">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Gaming
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image4}
              alt="earphone"
              className="w-[250px] absolute bottom-10 lg:right-0"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start ">
            <div>
              <div className="mb-4">
                <p className="mb-1 text-white ">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Virtual
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              src={Image5}
              alt="earphone"
              className="w-[320px] absolute right-0 lg:bottom-0"
            />
          </div>

          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start ">
            <div>
              <div className="mb-4">
                <p className="mb-1 text-white ">Enjoy</p>
                <p className="text-2xl font-semibold mb-1">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Sound
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
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
