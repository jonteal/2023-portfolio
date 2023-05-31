import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";

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

const WorksPage = () => {
  return (
    <main>
      <div className="py-2 px-10 mt-10 flex flex-wrap justify-center">
        {/* <ul className="flex-col"> */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        {/* </ul> */}
      </div>
    </main>
  );
};

export default WorksPage;
