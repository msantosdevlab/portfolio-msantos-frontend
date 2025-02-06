import Image from 'next/image';
import imageDefault from '@/app/assets/images/default_image.png';

export function ProjectCard({ project, id }) {
  return (     
    <div
      className="dark:bg-dark-primary bg-light-primary rounded-lg p-6"
      data-aos="fade-up"
      data-aos-duration={ 400 + id * 500 }
      data-aos-easing="ease-in-out"
    >
      <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
      <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
        <Image src={project.image || imageDefault} alt={project.title} srcSet="" />
      </div>
      <p className="dark:text-dark-subtitle text-light-subtitle text-sm mb-4 min-h-[6rem]">{project.description}</p>
      <div className="flex gap-2">
        {project.tech.map((tech, index) => (
          <span key={index} className="dark:bg-dark-secondary bg-light-secondary rounded-full text-sm dark:text-dark-subtitle text-light-subtitle px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}