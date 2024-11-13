import Footer from "./components/Footer/footer"
import Header from "./components/Header/header"
import { About } from "./components/Section/About/about"
import { Contact } from "./components/Section/Contact/contact"
import { Hero } from "./components/Section/Hero/hero"
import { Project } from "./components/Section/Project/project"

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto relative">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
