import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import About from "./components/About";
import Services from "./components/Services";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <About />
      <Services />
      <Internship />
       <Contact />
        <Footer />
    </>
  );
}

export default App;