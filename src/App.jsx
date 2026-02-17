import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import About from "./components/About";
import Services from "./components/Services";
import Internship from "./components/Internship";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";



function App() {

  useEffect(() => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));
}, []);
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