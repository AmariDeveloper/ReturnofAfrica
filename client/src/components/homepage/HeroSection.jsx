import hero1 from "../../assets/hero1.jpg"
import hero2 from "../../assets/hero5.jpg"
import hero3 from "../../assets/hero3.jpg"
import hero4 from "../../assets/hero6.jpg"
import { Link } from "react-router-dom"
import { LiaCocktailSolid } from "react-icons/lia";

const HeroSection = () => {
  return (
    <div className="hero-section">
               <div className="inner-row">
                          <div className="hero-section-content">
                                    <div className="hero-texts">
                                                <h3>The year of return of Africa 2024</h3>
                                                <h1>Igniting Africa&apos;s Entrepreneurship: Fueling Unicorns</h1>

                                                <Link to={'/'}>Register For the Cocktail <span><LiaCocktailSolid /></span> <span className="overlay"></span></Link>
                                    </div>
                          </div>
               </div>

               <div className="hero-pictorials">
                        <div className="hero-pictorials-wrapper">
                                <div className="left-pictorials">
                                           <img src={hero1} alt="" />
                                           <img src={hero3} alt="" />
                                 </div>
                                 <div className="right-pictorials">
                                             <img src={hero2} alt="" />
                                             <img src={hero4} alt="" />
                                 </div>
                        </div>
               </div>
    </div>
  )
}

export default HeroSection