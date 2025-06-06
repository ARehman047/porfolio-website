import About from "./components/about/About"
import Hero from "./components/Hero/Hero"
import Portfolio from "./components/porfolio/Porfolio"
import Services from "./components/services/Services"
import Faqs from "./components/FAQs/Faqs"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/NavBar"
function App() {

  return (
    <div id="showcase" className="font-poppins">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
