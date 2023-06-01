import Link from "next/link";
import { ProjectCardType } from "../page";

export type ProjectProps = {
  project: ProjectCardType;
};

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="z-0 relative w-full m-3 rounded-md overflow-hidden border cursor-pointer flex-col">
      <Link href={`/project/${project.slug}`}>
        {/* <div className="p-1 flex justify-center bg-gray-800">
          <h3 className="text-2xl mb-2 text-gray-50">{project.name}</h3>
        </div> */}

        <div className="rounded-md absolute bg-gray-800 h-2/5 w-1/5 z-10 my-36 ml-10 flex justify-center">
          <p className="border font-light pl-2 pr-2 text-white text-2xl tex">
            {project.description}
          </p>
        </div>
        <img src={project.main_image} alt="" className="h-auto w-full" />
      </Link>
    </div>
  );
};

export default ProjectCard;
