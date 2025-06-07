import BOOKBAZAR from "../assets/BOOKBAZAR.png";
import Bubb from "../assets/Bubb.png";
import pp from "../assets/pp.png";
import reso from "../assets/reso.png";
import video from "../assets/video.png";
import weather from "../assets/weather.png";

const projects = [
  {
    id: 1,
    name: "Book Bazar",
    technologies: "MERN Stack",
    image: BOOKBAZAR,
    github: "https://book-store-app-7f2f.vercel.app/",
  },
  {
    id: 2,
    name: "Book Restaturent",
    technologies: "MERN Stack",
    image: reso,
    github: "https://github.com/Mayur-Mhaske/restaurant-app.git",
  },
  {
    id: 3,
    name: "Tech Tutorial Live Stream",
    technologies: "MERN Stack",
    image: video,
    github: "https://live-streaming-app-chi.vercel.app/",
  },

  {
    id: 4,
    name: "Personal Portfolio",
    technologies: "MERN Stack",
    image: pp,
    github: "https://personal-portfolio-nine-mu-71.vercel.app/",
  },

  {
    id: 5,
    name: "Bubble Game",
    technologies: "MERN Stack",
    image: Bubb,
    github: "https://bubble-game-app-1w5r.vercel.app/",
  },

  {
    id: 6,
    name: "Weather App",
    technologies: "MERN Stack",
    image: weather,
    github: "https://github.com/YouafKhan1",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
