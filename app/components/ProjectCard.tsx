import Link from "next/link";
import { ProjectCardType } from "../page";
import OpenTableImage from '../../public/assets/open-table.png'
import Image from "next/image";

export type ProjectProps = {
  project: ProjectCardType;
};

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`/portfolio/${project.slug}`}>
        <div className="p-1 flex justify-center">
          <h3 className="font-bold text-2xl mb-2">{project.name}</h3>
        </div>
        <Image src={OpenTableImage} alt="" className="w-full h-36" />
      </Link>
    </div>
  );
};

export default ProjectCard;
