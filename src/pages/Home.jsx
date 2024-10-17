import Navbar from "../components/Navbar"
import pattern from '../assets/pattern.svg'
import team from '../assets/team.jpg'
import members from '../assets/members.jpg'
import photo1 from '../assets/photo1.jpg'

import { useState } from "react"
import Card from "../components/Card";
import UpdateCard from '../components/UpdateCard';
import Footer from "../components/Footer"

const tabData = [
    {
        id:1,
        title : "Climate",
        desc : "We invest in companies targeting the worst emission sources – in Energy, Industry, Agri and Food.",
        imgLink : "https://www.bvp.ie/wp-content/uploads/2023/11/michael-pointner-ZGzMr04QdmU-unsplash-1200x800.jpg"
    },
    {
        id:2,
        title : "Health",
        desc : "We invest in companies that are enabling personalized, accessible care through technology integrations, data and patient centered models.",
        imgLink : "https://www.bvp.ie/wp-content/uploads/2024/04/Untitled-design-19-1.jpg"
    },
    {
        id:3,
        title : "Mobility",
        desc : "The future of transportation lies in efficient, eco-friendly, and connected transit, we envision a world where mobility is seamless and sustainable.",
        imgLink : "https://www.bvp.ie/wp-content/uploads/2024/04/Untitled-design-23.jpg"
    },
    {
        id:4,
        title : "Emerging Technology",
        desc : "In an era where technology underpins every aspect of our lives our focus is broad yet precise. We back high impact ventures across fields such AI, IOT and Robotics– where technology meets real world applications.",
        imgLink : "https://www.bvp.ie/wp-content/uploads/2023/11/clayton-cardinalli-v457LSvrvuI-unsplash-1200x800.jpg"
    }
]

export default function Home(){
    const [activeTab,setActiveTab] = useState(1);

    function changeActiveTab(id){
        setActiveTab(id);
        return;
    }



    return(
        <>
            <Navbar />

            <section className="banner">
                <div className="container">
                    <div className="content">
                        <h1>Where Does Your <br /> Vision Take Us?</h1>
                        <p>We partner with companies that have the global ambition and <br /> the vision to make a positive impact on the world.</p>
                        <div className="cta-btns">
                            <button className="primary-btn">Portfolio</button>
                            <button className="secondary-btn">About Us</button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="pattern-img">
                    <img src={pattern} alt="" width="100%"/>
                </div>
            </section>

            <section className="invest-focus">
                <div className="container">
                    <h1>Our Investment Focus</h1>

                    <div className="invest-tab">
                        <div className="tab-left item">
                            <ul>
                                {
                                    tabData.map((data)=>{
                                        if(data.id === activeTab){
                                            return(
                                                <li className="active" onClick={()=>changeActiveTab(data.id)}>
                                                    <h1>{data.title}</h1>
                                                    <p>{data.desc}</p>
                                                </li>
                                            )
                                        }
                                        return(
                                            <li onClick={()=>changeActiveTab(data.id)}>
                                                <h1>{data.title}</h1>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="tab-right item">
                            <ul>
                                {
                                    tabData.map((data)=>{
                                        if(data.id === activeTab){
                                            return(
                                                <li>
                                                    <img src={data.imgLink} alt="" />
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partners">
                <div className="container">
                    <div className="header">
                        <div>
                            <span>Relationships</span>
                            <h1>We Build Enduring <br /> Partnerships</h1>
                        </div>
                        <div>
                            <button className="secondary-btn">View our portfolio</button>
                        </div>
                    </div>

                    <div className="cards">
                        <Card 
                            tt="Growth"
                            title="Spectrum"
                            desc="Digital and onsite wellbeing, all through one connected solution."
                            tag="Health"
                        />
                        <Card 
                            tt="Seed"
                            title="UFODrive"
                            desc="The first all-digital, all-electric car rental company."
                            tag="Mobality"
                        />
                        <Card 
                            tt="Project"
                            title="Astatine"
                            desc="Enabling a hassle free transition to renewable energy"
                            tag="Climate"
                        />
                    </div>
                </div>
            </section>

            <section className="funding">
                <div className="container">
                    <div className="left">
                        <span>Funding</span>
                        <h1>Flexible Solutions</h1>
                        <p>We provide tailored and flexible solutions depending on your <br /> company’s plan. From Seed to Growth across Equity and Debt.</p>
                        <button className="primary-btn">Find out more</button>
                    </div>
                    <div className="right">
                        <img src={team} alt="" />
                    </div>
                </div>
            </section>

            <section className="investing">
                <div className="container">
                    <div className="header">
                        <span>Investing with BVP</span>
                        <h1>Investment Products</h1>
                    </div>

                    <div className="cards">
                        <div className="card">
                            <h2>EIIS</h2>
                            <p>Targets Compelling Returns alongside Tax Relief Benefits</p>
                            <a href="#">Explore EIIS</a>
                        </div>
                        <div className="card">
                            <h2>Bonds</h2>
                            <p>Targets Fixed Returns on High Impact Investments</p>
                            <a href="#">Explore BVP Bonds</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="funding">
                <div className="container">
                    
                    <div className="right">
                        <img src={members} alt=""/>
                    </div>
                    <div className="left">
                        <span>
                        PEOPLE</span>
                        <h1>Our people bring unique perspectives and a shared dedication to helping you succeed</h1>
                        
                        <button className="primary-btn">Meet the team</button>
                    </div>
                </div>
            </section>

            <section className="partners">
                <div className="container">
                    <div className="header">
                        <div>
                            <span>UPDATES</span>
                            <h1>The latest from BVP & <br /> our portfolio <br /> companies</h1>
                        </div>
                        <div>
                            <button className="secondary-btn">View all updates</button>
                        </div>
                    </div>

                    <div className="update-cards">
                        <UpdateCard 
                            imgLink={photo1}
                            title = "The Irish VC ep20: Taking Dublin by Storm, Alexander Theuma, Founder of Saastock"
                            subtitle = "Podcast"
                            date= "09/10/2024"
                            footertitle="LISTEN NOW"
                        />
                        <UpdateCard 
                            imgLink={photo1}
                            title = "The Irish VC ep20: Taking Dublin by Storm, Alexander Theuma, Founder of Saastock"
                            subtitle = "Podcast"
                            date= "09/10/2024"
                            footertitle="LISTEN NOW"
                        />
                        <UpdateCard 
                            imgLink={photo1}
                            title = "The Irish VC ep20: Taking Dublin by Storm, Alexander Theuma, Founder of Saastock"
                            subtitle = "Podcast"
                            date= "09/10/2024"
                            footertitle="LISTEN NOW"
                        />
                        <UpdateCard 
                            imgLink={photo1}
                            title = "The Irish VC ep20: Taking Dublin by Storm, Alexander Theuma, Founder of Saastock"
                            subtitle = "Podcast"
                            date= "09/10/2024"
                            footertitle="LISTEN NOW"
                        />
                    </div>
                </div>
            </section>

            <section className="newsletter">
                <div className="container">
                    <div>
                        <h1>Subscribe for regular <br /> updates from BVP</h1>
                    </div>
                    <div>
                        <p>Receive Updates</p>
                        <form>
                            <input type="email" name="email" id="email" placeholder="Email" /> <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
