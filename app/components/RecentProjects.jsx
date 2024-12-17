import Image from "next/image";
import project1 from "../../public/images/project1.png";
import project2 from "../../public/images/project2.png";
import project3 from "../../public/images/project3.png";
import project4 from "../../public/images/project4.png";
import project5 from "../../public/images/project5.png";

const projects = [
  {
    _id: 1,
    link: "https://github.com/ayush844/makemyreadme",
    imageUrl: project5,
    title: "MakeMyReadMe",
    description:
      "MakeMyReadMe is a platform where developers can create professional README files for their GitHub projects. Users can choose from templates or start from scratch, leveraging built-in components like headings, tags, dividers, and more. Cloudinary integration ensures seamless image uploads, while a live Markdown preview simplifies the creation process.",
    tags: ["NextJS", "ReactJS", "Tailwind CSS", "Cloudinary"],
  },
  {
    _id: 2,
    link: "https://github.com/ayush844/Tradezy",
    imageUrl: project1,
    title: "Tradezy",
    description:
      "Tradezy is an e-commerce platform where users can explore products across categories, add them to their cart, and make purchases. The admin manages all products, with options to add, edit, or delete items.",
    tags: ["ReactJS", "Firebase", "Tailwind CSS"],
  },
  {
    _id: 3,
    link: "https://github.com/ayush844/house_mart",
    imageUrl: project2,
    title: "House Mart",
    description:
      "HouseMart is a real estate platform where users can rent apartments or list their own properties for rent. Users have full control over their listings, with options to edit or delete them as needed. Additionally, the platform features an integrated map, allowing users to view the exact location of properties, making it easier for both renters and listers to navigate and connect.",
    tags: ["NextJS", "ReactJS", "MongoDB", "Tailwind CSS"],
  },
  {
    _id: 4,
    link: "https://github.com/ayush844/HomeDecorFrontend",
    imageUrl: project3,
    title: "Elegant Dwell",
    description:
      "Elegant Dwell is a stylish landing page for a home interior design website, emphasizing sleek animations and designs. Built using Framer Motion and Tailwind CSS, it offers a visually engaging experience that highlights modern interior aesthetics.",
    tags: ["NextJS", "ReactJS", "Framer Motion", "Tailwind CSS"],
  },
  {
    _id: 5,
    link: "https://github.com/ayush844/crypto_flux",
    imageUrl: project4,
    title: "Crypto Flux",
    description:
      "Crypto Flux is a cryptocurrency tracking platform that monitors around 100 different cryptocurrencies. Users can compare the price, market cap, or total volume of any two cryptocurrencies over a one-year period using detailed graphical data for insightful analysis.",
    tags: ["ReactJS", "Framer Motion", "Tailwind CSS", "Coingecko API"],
  },
];

export async function RecentProjects() {
  return (
    <div className=" flex flex-col items-center mt-24">
      <h1 className="text-4xl lg:text-6xl font-bold">My Recent Projects</h1>
      <div className="py-10 grid md:grid-cols-2 gap-8 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 mt-8 mb-8">
        {projects.map((item) => (
          <a
            href={item.link}
            key={item._id}
            className="group block bg-gray-100 px-6 py-4 rounded-[10px]"
            target="_blank"
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative">
              <Image
                src={item.imageUrl}
                alt="Image Description"
                //   fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
                priority
                height={200}
                width={550}
              />
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-xl hover:underline">
                {item.title}
              </h2>
              <p className="mt-1 text-muted-foreground text-lg line-clamp-10">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tagItem, index) => (
                  <span
                    className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                    key={index}
                  >
                    {tagItem}
                  </span>
                ))}
              </div>
              {item._id == 2 && (
                <div className=" px-2 py-1 border border-yellow-600 bg-yellow-200 mt-2 flex justify-center rounded-lg">
                  <p className=" font-bold text-yellow-800">
                    Project under construction
                  </p>
                </div>
              )}

              {item._id == 5 && (
                <div className=" px-2 py-1 border border-yellow-600 bg-yellow-200 mt-2 flex justify-center rounded-lg">
                  <p className=" font-bold text-yellow-800">
                    the project is using free version of the coingecko API, so
                    may take some time to respond, if the request limit is
                    reached
                  </p>
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
