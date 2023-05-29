import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

export type ProjectCardType = {
  id: number;
  name: string;
  main_image: string;
  slug: string;
}

export const projects = [
  {
    id: 1,
    name: 'Ozark AirBnb',
    main_image: '',
    slug: '1'
  },
  {
    id: 2,
    name: 'Open Table Clone',
    main_image: '',
    slug: '2'
  },
  {
    id: 3,
    name: 'Java Bar Coffee',
    main_image: '',
    slug: '3'
  },
  {
    id: 4,
    name: 'Jonteal - Artist Page',
    main_image: '',
    slug: '4'
  },
  {
    id: 5,
    name: 'Study Buddy',
    main_image: '',
    slug: '5'
  },
  {
    id: 6,
    name: 'American Bistro',
    main_image: '',
    slug: '6'
  }
]

const Home = async () => {

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </main>
  );
};

export default Home;
