import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import { PrismaClient } from "@prisma/client";

export type ProjectCardType = {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  description: string;
};

const prisma = new PrismaClient();

const fetchProjects = async (): Promise<ProjectCardType[]> => {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      description: true,
      // images: true,
    },
  });

  return projects;
};

export const projects = [
  {
    id: 1,
    name: "Ozark AirBnb",
    main_image: "/images/ozark-airbnb.png",
    slug: "ozark-airbnb",
    description: "A sleek and modern reservation site for an Airbnb company.",
  },
  {
    id: 2,
    name: "Open Table Clone",
    main_image: "/images/open-table.png",
    slug: "open-table-clone",
    description:
      "A fully functioning, limited version of the popular reservation and restaurant review website Open Table.",
  },
  // {
  //   id: 3,
  //   name: "Java Bar Coffee",
  //   main_image: "",
  //   slug: "java-bar-coffee",
  // },
  // {
  //   id: 4,
  //   name: "Jonteal - Artist Page",
  //   main_image: "",
  //   slug: "jonteal-artist-page",
  // },
  // {
  //   id: 5,
  //   name: "Study Buddy",
  //   main_image: "",
  //   slug: "study-buddy",
  // },
  // {
  //   id: 6,
  //   name: "American Bistro",
  //   main_image: "",
  //   slug: "american-bistro",
  // },
];

const Home = async () => {
  // const projects = await fetchProjects();

  return (
    <main>
      {/* <Header /> */}
      <div className="h-64 bg-white p-2">
        <div className="text-center mt-10">
          <p className="text-1xl font-light">AVAILABLE FOR WORK</p>
          <h1 className="text-7xl font-light text-black">Jon Jackson</h1>
          <h2 className="text-black font-light text-7xl mb-2">Web Designer</h2>
        </div>
      </div>
    </main>
  );
};

export default Home;
