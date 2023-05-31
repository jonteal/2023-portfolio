import Link from "next/link";
import { ProjectCardType } from "../page";

export type ProjectProps = {
  project: ProjectCardType;
};

const ProjectCard = ({ project }: ProjectProps) => { 

  return (
    <div className="w-80 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/project/${project.slug}`}>
        <div className="p-1 flex justify-center">
          <h3 className="font-bold text-2xl mb-2">{project.name}</h3>
        </div>
        <img src={project.main_image} alt="" className="w-full h-36" />
        <p className="pl-2 pr-2">{project.description}</p>
      </Link>
    </div>
  );
};

export default ProjectCard;
