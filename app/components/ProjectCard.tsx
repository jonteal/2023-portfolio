'use client';

import Link from "next/link";
import { ProjectCardType } from "../page";
import image from '../../public/Content/open-table.png'
import { notFound } from "next/navigation";

export type ProjectProps = {
  project: ProjectCardType;
};

interface Project {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
}

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
      slug: true
    }
  });

  if(!project) {
    notFound()
  }

  return project;
}

const ProjectCard = ({ params }: {params: { slug: string}}) => { 

  const project = await fetchProjectBySlug(params.slug)
  // console.log('project: ', project);
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/portfolio/${project.slug}`}>
        <div className="p-1 flex justify-center">
          <h3 className="font-bold text-2xl mb-2">{project.name}</h3>
        </div>
        <img src={`/public/images/${project.main_image}`} alt="" className="w-full h-36" />
      </Link>
    </div>
  );
};

export default ProjectCard;
