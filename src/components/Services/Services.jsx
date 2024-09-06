import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Return & Refund",
    description: "30 Days Return & Refund Policy",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "100% Secure Payment Processing",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "24/7 Customer Service",
    description: "24/7 Customer Service Available",
  },
];

const Services = () => {
  return (
    <div className="dark:bg-gray-800">
      <div className="container py-7 lg:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 ">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="flex  items-center gap-4 flex-col sm:flex-row justify-center text-center md:text-left"
            >
              {service.icon}
              <div>
                <h3 className="text-xl font-bold tracking-widest text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-sm tracking-wider text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
