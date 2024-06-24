import { Link } from "react-router-dom"
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
               <div className="inner-row">
                           <div className="footer-content">
                                    <div className="footer-column">
                                               <h2>Do you have any Questions?</h2>

                                                <h4>+254 790 616 483</h4>
                                                <h4>summit@yearofreturnafrica.com</h4>
                                    </div>
                                    <div className="footer-column">
                                                  <div className="footer-box">
                                                               <h3>Sarit Expo Center, Westlands</h3>

                                                               <div className="footer-links">
                                                                        <ul>
                                                                                <li><Link to={'/'}><span><FaFacebookF /></span></Link></li>
                                                                                <li><Link to={'/'}><span><FaXTwitter /></span></Link></li>
                                                                                <li><Link to={'/'}><span><FaInstagram /></span></Link></li>
                                                                        </ul>
                                                               </div>
                                                  </div>
                                    </div>
                           </div>

                           <div className="copyright">
                                      <h3>All rights reserved &copy; { new Date().getFullYear() } YORA.</h3>
                           </div>
               </div>
    </footer>
  )
}

export default Footer