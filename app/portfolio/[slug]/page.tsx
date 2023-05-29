import { ProjectCardType } from "@/app/page"

export type ProjectDetailsProps = {
  project: ProjectCardType
}

const ProjectDetails = ({ project}: ProjectDetailsProps) => {
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  )
}

export default ProjectDetails