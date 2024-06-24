import AboutSection from "../components/homepage/AboutSection"
import HeroSection from "../components/homepage/HeroSection"
import Partners from "../components/homepage/Partners"
import Navbar from "../components/common/navigation/Navbar"
import "../css/home.css"
import Footer from "../components/common/Footer"
const Home = () => {
  return (
    <>
           <div className="landing">
                   <Navbar />
                    <div className="bg-left"></div>
                    <div className="bg-right"></div>
                    <HeroSection />
           </div>

           <Partners />
           <AboutSection />
           <Footer />
    </>
  )
}

export default Home