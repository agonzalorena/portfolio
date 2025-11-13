import Hero from "./components/sections/Hero.jsx";
import MobileConnect from "./components/sections/MobileConnect.jsx";
import Projects from "./components/sections/Projects.jsx";
import DesktopConnect from "./components/sections/DesktopConnect.jsx";

export default function Home() {
  return (
    <main className="w-full  max-w-[1370px]  h-screen lg:pt-5 pt-16 px-4 lg:px-10 flex flex-col lg:flex-row justify-center lg:items-center gap-10">
      <Hero />
      <section className="select-none lg:w-2/5 flex flex-col justify-center gap-10 pt-3 lg:h-1/2">
        <Projects />
        <DesktopConnect />
        <MobileConnect />
      </section>
    </main>
  );
}
