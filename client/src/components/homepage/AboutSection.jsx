import about1 from "../../assets/about2.webp"
import about2 from "../../assets/about1.webp"

const AboutSection = () => {
  return (
    <div className="about-section">
               <div className="inner-row">
                         <div className="about-section-content">
                                     <div className="description-side">
                                                <h3>About YORA Summit</h3>
                                                <h1>Welcome to The Year of Return Africa</h1>
                                                <p>The First Year Of Return was a campaign pioneered by the president of Ghana in 2019 as a major landmark spiritual and birth-right journey inviting the Global African family, home and abroad to reconnect, heal, and rebuild the homeland. Africa is blessed with a wealth of natural resources and vibrant young minds. The Year of Return, Africa 2024, aims to empower African youth & businesses through innovation, entrepreneurship, and skill-building initiatives. The program will entail two days of keynote speeches, panel discussions, workshops, exhibitions, pitch competitions, awards, and a final day of outdoor engagements in the environs of Nairobi, with attendees selecting between golf, game drives, or corporate tours.</p>
                                     </div>
                                     <div className="images-side">
                                                <img src={about1} alt="" />
                                                <img src={about2} alt="" />
                                     </div>
                         </div>
               </div>
    </div>
  )
}

export default AboutSection