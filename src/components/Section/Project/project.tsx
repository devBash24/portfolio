import { projects } from "../../../lib/portfolio_projects"
import ProjectCard from "./card"





export const Project = () => {
  return (
    <section id="project" className="w-full font-oswald min-h-screen flex flex-col justify-center items-center bg-darkGray">
      <h1 className="text-4xl text-center text-white text-bold p-2">{"Project"} <span className="text-secondary-500 text-heading">.</span></h1>
      <p className="text-body text-center my-3 text-white">Few Projects that I've worked on</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-10 mt-8">
  {projects.length === 1 ? (
    <div className="col-span-full">
      <ProjectCard key={0} project={projects[0]} />
    </div>
  ) : (
    projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))
  )}
</div>
    </section>
  )
}
