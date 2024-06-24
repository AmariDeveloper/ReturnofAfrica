import partner1 from "../../assets/partner1.webp"
import partner2 from "../../assets/partner2.webp"
import partner3 from "../../assets/partner3.jpeg"
import partner4 from "../../assets/partner4.png"
import partner5 from "../../assets/partner5.webp"
import partner6 from "../../assets/partner6.png"
import partner7 from "../../assets/partner8.png"
import partner8 from "../../assets/partner9.png"
import partner9 from "../../assets/partner7.png"

const Partners = () => {
  return (
    <div className="partners-section">
                <div className="inner-row">
                          <div className="partners-content">
                                   <h3>Partners & Exhibitors</h3>

                                   <div className="partners-row">
                                              <img src={partner1} alt="" />
                                              <img src={partner9} alt="" />
                                              <img src={partner2} alt="" />
                                              <img src={partner3} alt="" />
                                              <img src={partner4} alt="" />
                                              <img src={partner5} alt="" />
                                              <img src={partner6} alt="" />
                                              <img src={partner7} alt="" />
                                              <img src={partner8} alt="" />
                                   </div>
                          </div>
                </div>
    </div>
  )
}

export default Partners