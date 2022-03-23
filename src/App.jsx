import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <div className="bg-gradient-to-b dark:from-purple-900 dark:to-purple-900 from-white to-purple-600 dark:text-white ">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
