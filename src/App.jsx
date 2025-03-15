import React from "react";
import Navbar from "./Components/Header/Navbar";
import Home from "./Components/Content/Home";
import About from "./Components/Content/About";
import TechStack from "./Components/Content/TechStack";
import Projects from "./Components/Content/Projects";
import Contact from "./Components/Content/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(false);

  //for loading screen
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="bg-slate-900 min-h-screen flex justify-center items-center">
          <RotatingTriangles
            height={100}
            width={100}
            radius={5}
            color="#d946ef"
            ariaLabel="Rotating-Triangles"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
