import Home from "./sections/landing";
import About from "./sections/about";
import Services from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function HomePage() {
  return (
    <main>
      <Home />
      <About />
      <Services />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
