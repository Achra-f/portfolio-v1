import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
