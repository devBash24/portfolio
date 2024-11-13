import { useTranslation } from "react-i18next";
import Skills from "./skills";
import Education from "./education";
import AboutMe from "./about_me";


export const About = () => {
  const [t] = useTranslation("global");
  return (
    <section id="about" className="min-h-screen font-oswald flex flex-col items-center justify-center px-5 bg-test">
      <h1 className="text-4xl text-center text-white text-bold p-4">{t("about.title")} <span className="text-secondary-500 text-heading">.</span></h1>
      <div className="flex gap-8 flex-col lg:flex-row">
      <AboutMe/>
      <Skills/>
      </div>

      <div>
        <Education />
      </div>
    </section>
  )
}
