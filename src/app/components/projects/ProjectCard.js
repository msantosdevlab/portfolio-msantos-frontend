// components/ProjectCard.js
export function ProjectCard({ project, id }) {
    return (
      <div
        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
        data-aos="fade-up"
        data-aos-duration={ 400 + id * 500 }
        data-aos-easing="ease-in-out"
      >
        <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.type}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-600 dark:text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }