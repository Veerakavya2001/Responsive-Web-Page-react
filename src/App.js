import { useState } from "react";
import Campus from "./Components/Campus/Campus";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Vedioplayer from "./Components/Vedioplayer/Vedioplayer";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Title from "./Components/title/title";
import About from "./about/about";

function App() {
const [playState,setPlayState]=useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Vedioplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
