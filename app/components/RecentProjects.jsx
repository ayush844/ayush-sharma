import Image from "next/image";
import project1 from '../../public/images/project1.png';
import project2 from '../../public/images/project2.png';
import project3 from '../../public/images/project3.png';

const projects = [
    {
        _id: 1,
        link: "https://github.com/ayush844/Tradezy",
        imageUrl: project1,
        title: "Tradezy",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, iure! Sunt saepe mollitia temporibus ullam vitae similique iste, eos facilis voluptatibus sit aspernatur culpa inventore soluta voluptatem amet adipisci optio id eaque deleniti cumque nobis, minima officiis? Officia blanditiis non, adipisci laboriosam atque in quae dignissimos earum provident! Quia hic delectus dignissimos quasi aliquid facere fugiat sed reiciendis id nobis.",
        tags: ["ReactJS", "Firebase", "Tailwind CSS"]
    },
    {
        _id: 2,
        link: "https://github.com/ayush844/house_mart",
        imageUrl: project2,
        title: "House Mart",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, iure! Sunt saepe mollitia temporibus ullam vitae similique iste, eos facilis voluptatibus sit aspernatur culpa inventore soluta voluptatem amet adipisci optio id eaque deleniti cumque nobis, minima officiis? Officia blanditiis non, adipisci laboriosam atque in quae dignissimos earum provident! Quia hic delectus dignissimos quasi aliquid facere fugiat sed reiciendis id nobis.",
        tags: ["NextJS", "ReactJS", "MongoDB", "Tailwind CSS"]
    },
    {
        _id: 3,
        link: "https://github.com/ayush844/HomeDecorFrontend",
        imageUrl: project3,
        title: "Elegant Dwell",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, iure! Sunt saepe mollitia temporibus ullam vitae similique iste, eos facilis voluptatibus sit aspernatur culpa inventore soluta voluptatem amet adipisci optio id eaque deleniti cumque nobis, minima officiis? Officia blanditiis non, adipisci laboriosam atque in quae dignissimos earum provident! Quia hic delectus dignissimos quasi aliquid facere fugiat sed reiciendis id nobis.",
        tags: ["NextJS", "ReactJS", "Framer Motion", "Tailwind CSS"]
    }
]



export async function RecentProjects() {

  return (
    <div className=" flex flex-col items-center mt-24">
    <h1 className="text-4xl lg:text-6xl font-bold">My Recent Projects</h1>
    <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 mt-8 mb-8">
      {projects.map((item) => (
        <a
          href={item.link}
          key={item._id}
          className="group block"
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
          </div>
        </a>
      ))}
    </div>
    </div>
  );
}