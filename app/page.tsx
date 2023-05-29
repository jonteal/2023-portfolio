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
    slug: 'ozark-airbnb'
  },
  {
    id: 2,
    name: 'Open Table Clone',
    main_image: 'open-table.png',
    slug: 'open-table-clone'
  },
  {
    id: 3,
    name: 'Java Bar Coffee',
    main_image: '',
    slug: 'java-bar-coffee'
  },
  {
    id: 4,
    name: 'Jonteal - Artist Page',
    main_image: '',
    slug: 'jonteal-artist-page'
  },
  {
    id: 5,
    name: 'Study Buddy',
    main_image: '',
    slug: 'study-buddy'
  },
  {
    id: 6,
    name: 'American Bistro',
    main_image: '',
    slug: 'american-bistro'
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
