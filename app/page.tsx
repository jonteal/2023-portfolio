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

const Home = async () => {
  // const projects = await fetchProjects();

  return (
    <main>
      <div className="h-64 bg-white p-2">
        <div className="text-center mt-10">
          <p className="text-1xl font-light">AVAILABLE FOR WORK</p>
          <h1 className="text-8xl font-light text-black">Jon Jackson</h1>
          <h2 className="text-black font-light text-7xl mb-2">Web Designer</h2>
        </div>
      </div>
    </main>
  );
};

export default Home;
