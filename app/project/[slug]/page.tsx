import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

export type Project = {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
};

const fetchProjectBySlug = async (slug: string): Promise<Project> => {
  const project = await prisma.project.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
    },
  });

  if (!project) {
    notFound();
  }

  return project;
};

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
  const project = await fetchProjectBySlug(params.slug);

  const pictures = project.images;

  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {project.name}
      </h1>

      <p className="text-1xl mt-10 mb-7 border-b pb-5">{project.description}</p>

      <div className="flex flex-col">
        <div className="flex justify-start w-96 border">
          <img src={pictures[0]} alt="" />
        </div>
        <div className="flex justify-start w-96 border">
          <img src={pictures[1]} alt="" />
        </div>
        <div className="flex justify-start w-96 border">
          <img src={pictures[2]} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
