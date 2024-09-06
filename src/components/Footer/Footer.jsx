import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const footerLinks = ["Home", "About Us", "Contact Us", "Blog"];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              className="text-primary font-bold tracking-widest text-2xl uppercase sm:text-3xl"
              href="#"
            >
              <p data-aos="zoom-out">E-Shop</p>
            </a>
            <p
              data-aos="zoom-out"
              className="text-gray-600 lg:pr-14 pt-3 dark:text-white/50"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
              placeat consequatur, totam repudiandae quis tempore.
            </p>
            <p
              data-aos="zoom-out"
              className="text-gray-500 mt-4 dark:text-white/50"
            >
              Made With ❤️ by Shahariar Mithu
            </p>
          </div>

          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4 ">
              <ul className="list-none pl-6 leading-10 ">
                <h4
                  data-aos="zoom-out"
                  className="text-xl font-bold uppercase text-gray-800 dark:text-white/60"
                >
                  Important Links
                </h4>

                {footerLinks.map((link, index) => (
                  <li
                    data-aos="zoom-out"
                    key={index}
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href="#"
                      className="text-gray-600 dark:text-white/50 dark:hover:text-primary "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 ">
              <ul className="list-none pl-6 leading-10 ">
                <h4
                  data-aos="zoom-out"
                  className="text-xl font-bold uppercase text-gray-800 dark:text-white/60"
                >
                  Quick Links
                </h4>
                {footerLinks.map((link, index) => (
                  <li
                    data-aos="zoom-out"
                    key={index}
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <a
                      href="#"
                      className="text-gray-600 dark:text-white/50 dark:hover:text-primary "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <div>
                <h4
                  data-aos="zoom-out"
                  className="text-xl font-bold uppercase text-gray-800 dark:text-white/60"
                >
                  Address
                </h4>
                <div
                  data-aos="zoom-out"
                  className="flex items-center gap-3 dark:text-white/50 mt-3"
                >
                  <FaLocationArrow />
                  <p>Savar , Dhaka</p>
                </div>
                <div
                  data-aos="zoom-out"
                  className="flex items-center gap-3 mt-5 dark:text-white/50"
                >
                  <FaMobileAlt />
                  <p>+91 12345678</p>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3 mt-6">
                <a data-aos="zoom-out" href="#">
                  <FaInstagram className="text-2xl hover:text-primary" />
                </a>
                <a data-aos="zoom-out" href="#">
                  <FaFacebook className="text-2xl hover:text-primary" />
                </a>
                <a data-aos="zoom-out" href="#">
                  <FaLinkedin className="text-2xl hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
