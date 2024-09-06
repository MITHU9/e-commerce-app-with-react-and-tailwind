import Heading from "../shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const blogsData = [
  {
    title: "How to choose perfect stopwatch",
    subtitle:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit repudiandae, molestiae saepe doloremque qui!",
    published: "Jan 20, 2024 by Mithu",
    img: Img1,
    aosDelay: "0",
  },
  {
    title: "How to choose perfect Gadget",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit repudiandae, molestiae saepe doloremque qui!",
    published: "Feb 15, 2024 by Mithu",
    img: Img2,
    aosDelay: "200",
  },
  {
    title: "How to choose perfect VR headset",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit repudiandae, molestiae saepe doloremque qui!",
    published: "Mar 10, 2024 by Mithu",
    img: Img3,
    aosDelay: "400",
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="container">
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        <div
          className="grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-6 sm:gap-4 md:gap-7"
        >
          {blogsData.map((blog, index) => (
            <div data-aos="fade-up" data-aos-delay={blog.aosDelay} key={index}>
              <div className=" p-2 bg-white dark:bg-gray-800 dark:text-white shadow-md rounded-lg">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className=" w-full object-cover h-[210px] hover:scale-105 duration-500"
                  />
                </div>
                <p className="text-sm text-gray-400 py-1">{blog.published}</p>
                <div>
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-gray-600 line-clamp-3">{blog.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
