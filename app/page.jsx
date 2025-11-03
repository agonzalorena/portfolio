import {
  stackList,
  projectList,
  connectList,
  proyectsUrl,
} from "./utils/data.js";
import StackBtn from "./components/StackBtn";
import ProyectCard from "./components/ProyectCard";
import ConnectCard from "./components/ConnectCard";
import ConnectMobileCard from "./components/ConnectMobileCard";
import { Me, Pj } from "./utils/svgs.jsx";

export default function Home() {
  return (
    <main className="w-full  max-w-[1370px]  h-screen lg:pt-5 pt-16 px-4 lg:px-10 flex flex-col lg:flex-row justify-center gap-10">
      <section className="lg:w-3/5 flex flex-col justify-center gap-14">
        <div className="flex flex-col justify-center text-left gap-2">
          <h1 className="text-5xl font-extrabold">Agustin Gonzalorena</h1>
          <p className="text-2xl text-muted">Software Developer</p>
        </div>
        <div className="hidden lg:flex">
          <p className="font-light">
            Backend Developer specialized in Java and{" "}
            <span className="text-primary">Spring Boot</span>, with experience
            in frontend projects using React and Next.js. I’m continuously
            learning and exploring new tools that complement my work as a
            developer.
          </p>
        </div>
        <div className="hidden lg:flex gap-2 text-red-900">
          {stackList.map((tech) => (
            <StackBtn key={tech} name={tech} />
          ))}
        </div>
      </section>
      <section className="select-none lg:w-2/5 flex flex-col pt-4 justify-center gap-5">
        <div className="hidden lg:flex flex-col">
          <div className="flex gap-0.5 items-center">
            <div className="w-3 ">
              <Pj />
            </div>
            <h2 className="text-muted font-light">Selected projects</h2>
          </div>
          <div className="flex flex-col gap-2">
            {projectList.map((project) => (
              <ProyectCard
                key={project.name}
                name={project.name}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
          <a
            href={proyectsUrl}
            title="View all projects"
            target="_blank"
            rel="noopener noreferrer"
            className="select-none pt-3 text-sm font-semibold text-muted hover:underline hover:text-primary"
          >
            View all projects ➞
          </a>
        </div>
        <div className="text-left w-full hidden lg:block">
          <div className="flex gap-0.5 items-center">
            <div className="w-3">
              <Me />
            </div>
            <h2 className="select-none text-muted font-light">Connect</h2>
          </div>
          <div className="flex gap-4">
            {connectList.map((connect, index) => (
              <div key={index} className="flex gap-4">
                <ConnectCard name={connect.name} link={connect.link} />
                {index < connectList.length - 1 && (
                  <p className="text-sm text-muted">.</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:hidden flex flex-col justify-center items-center gap-5">
          {connectList.map((connect) => (
            <ConnectMobileCard
              key={connect.id}
              name={connect.name}
              link={connect.link}
              id={connect.id}
            />
          ))}
          <a
            href={proyectsUrl}
            title="View all projects"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center font-semibold py-3 text-muted active:scale-95 hover:underline hover:text-primary"
          >
            View all projects ➞
          </a>
        </div>
      </section>
    </main>
  );
}
