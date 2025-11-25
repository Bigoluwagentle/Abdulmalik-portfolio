import React from "react";
import LikeButton from "./LikeButton"
import "./Products.css";
import { motion } from "framer-motion";
import Footer from "./Footer/Footer";
import Portfolio from "./img/Screenshot 2025-09-20 000341.png";
import Buycex from "./img/Screenshot 2025-09-21 093257.png";
import jennie from "./img/image-thomas.jpg";
import DevConnect from "./img/devconnect.png";
import emily from "./img/image-emily.jpg";
import thomas from "./img/GRMM1yg5.png";
import Nutrition from "./img/Screenshot 2025-08-28 095318.png";
import Movie from "./img/Screenshot 2025-08-26 135936.png";
import Eccomerce from "./img/Screenshot 2025-08-26 140836.png";
import Car from "./img/Screenshot 2025-08-26 141251.png";
import Recipe from "./img/Screenshot 2025-08-26 141603.png";
import Alquran from "./img/Screenshot 2025-08-26 141924.png";
import Skin from "./img/Screenshot 2025-08-26 142246.png";
import Audiophile from "./img/audiophile.png";
import Agro from "./img/agrolink.png";
import Burger from "./img/Screenshot 2025-08-30 073238.png";
import Creative from "./img/creative.png";
import Edu from "./img/edu.png";

function Project(){
    function addUrl(urlin){
        let urlink = "";
        urlink = urlin;
        const link = document.createElement("a");
        link.href = urlink;
        link.target = "_blank";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    const containerVariants = {
        hidden: {
            opacity: 0, 
            y:100
        },
        visible: {
            opacity: 1, y: 0,
            transition: {
                duration: 1, type: "spring", stiffness: 300
            }
        }
    };
    return(
        <div id="allProject">
            <h2>PROJECTS</h2>
            {/* <aside>
                <button className="activeFocus">Web Projects</button>
                <button>Mobile Projects</button>
            </aside> */}
            <article id="projects" >
                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Agro} alt="" />
                    <nav className="check">
                        <h4>AgroLink</h4>
                        <p>A full-stack platform that connects farmers directly to buyers by removing the middleman. Farmers can list their products, and buyers can purchase them instantly. Built with <b> Next.js, TypeScript, Tailwind CSS, and Firebase</b> for real-time data, authentication, and secure storage.</p>
                        <nav>
                            <button onClick={() => addUrl("https://agro-links.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="jobboard" />
                        </nav>
                    </nav>
                </motion.div>
                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={DevConnect} alt="DevConnect" />
                    <nav className="check">
                        <h4>DevConnect</h4>
                        <p>DevConnect is a full-stack platform that connects developers for collaboration, real-time chat, project discussions, and access to the latest tech news. Built with <b> Next.js, TypeScript, Tailwind CSS, and Firebase</b>, it provides seamless authentication, live messaging, and dynamic content updates</p>
                        <nav>
                            <button onClick={() => addUrl("https://devconnect-vert.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="urlshoten" />
                        </nav>
                    </nav>
                </motion.div>
                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Audiophile} alt="" />
                    <nav className="check">
                        <h4>Adiophile</h4>
                        <p>An e-commerce platform for high-end audio products, featuring categories like headphones, earphones, and speakers. Built with <b> Next.js and TypeScript</b>, and powered by Convex for real-time product management, secure data handling, and a smooth checkout experience.</p>
                        <nav>
                            <button onClick={() => addUrl("https://audiophile-539a.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="adiophile" />
                        </nav>
                    </nav>
                </motion.div>
                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Buycex} alt="" />
                    <nav className="check">
                        <h4>Buycex Exchange</h4>
                        <p>Buycex is a Web3-powered platform designed for seamless crypto asset swapping with a smooth, modern UI. Built with <b>Next.js and enhanced with Framer Motion for elegant </b>, interactive animations that elevate the user experience.</p>
                        <p>Still ongoing</p>
                        <nav>
                            <button onClick={() => addUrl("https://abdulmalik-buycex-14nu.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="buycex" />
                        </nav>
                    </nav>
                </motion.div>
                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Edu} alt="" />
                    <nav className="check">
                        <h4>Adult-Edu</h4>
                        <p>Adult-Edu is a learning platform designed to help adults access educational resources and improve their skills. Built with <b> Next.js and Firebase</b>, it provides secure authentication, smooth content delivery, and an easy-to-use interface for continuous learning.</p>
                        <nav>
                            <button onClick={() => addUrl("https://adult-edu.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="adult" />
                        </nav>
                    </nav>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Creative} alt="" />
                    <nav className="check">
                        <h4>Creative Jobboard</h4>
                        <p>Creative Jobboard is a modern platform for discovering and listing creative industry jobs. Built with <b> React and JavaScript, and enhanced with Framer Motion for smooth</b>, engaging animations that improve the browsing experience.</p>
                        <nav>
                            <button onClick={() => addUrl("https://creative-jobboard.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="creative" />

                        </nav>
                    </nav>
                </motion.div>
                
                <motion.div id="ai" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Nutrition} alt="" />
                    <nav className="check">
                        <h4>AI NUTRITIONIST</h4>
                        <p>Tech: HTML, OpenAI API, JAVASCRIPT</p>
                        <nav>
                            <button onClick={() => addUrl("https://nutritionapp-ze9g.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="nutritionist" />
                        </nav>
                    </nav>
                </motion.div>
                

                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Portfolio} alt="" />
                    <nav className="check">
                        <h4>Car Repair</h4>
                        <p>Tech: REACT, Javascript, API & REACT NAVITE & EXPO</p>
                        <nav>
                            <button onClick={() => addUrl("https://abdulmalik-car-repair.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            {/* <button onClick={() => addUrl("https://expo.dev/artifacts/eas/vEkW1kgnPrPK6GxYdbhjbE.apk")}><i class="fa-brands fa-android"></i> Download App</button> */}
                            <LikeButton projectId="carrepair" />
                        </nav>
                    </nav>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Burger} alt="" />
                    <nav className="check">
                        <h4>Burger Store</h4>
                        <p>Tech: REACT AND API</p>
                        <nav>
                            <button onClick={() => addUrl("https://code-with-faith-burger-home.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="burger" />
                        </nav>
                    </nav>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Eccomerce} alt="" />
                    <nav className="check">
                        <h4>E-CCOMERCE</h4>
                        <p>Tech: REACT, JSON AND JAVASCRIPT</p>
                        <nav>
                            <button onClick={() => addUrl("https://too-soft-1xtd.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="ecommerce" />
                        </nav>
                    </nav>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Car} alt="" />
                    <nav className="check">
                        <h4>Car Dealer</h4>
                        <p>Tech: REACT AND JAVASCRIPT</p>
                        <nav>
                            <button onClick={() => addUrl("https://abdulmalik-car.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="cardealer" />
                        </nav>
                    </nav>
                </motion.div>

            
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Recipe} alt="" />
                    <nav className="check">
                        <h4>Recipe</h4>
                        <p>Tech: REACT AND API</p>
                        <nav>
                            <button onClick={() => addUrl("https://abdulmalik-recipe.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="recipe" />
                        </nav>
                    </nav>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Movie} alt="" />
                    <nav className="check">
                        <h4>Movie Website</h4>
                        <p>Tech: HTML, API AND JAVASCRIPT</p>
                        <nav>
                            <button onClick={() => addUrl("https://abdulmalik-movie.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="movie" />
                        </nav>
                    </nav>
                </motion.div>
                
                
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Alquran} alt="" />
                    <nav className="check">
                        <h4>Al-Quran Audio</h4>
                        <p>Tech: REACT AND API</p>
                        <nav>
                            <button onClick={() => addUrl("https://abdulmalik-phi.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="alquran" />
                        </nav>
                    </nav>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Skin} alt="" />
                    <nav className="check">
                        <h4>Skin Care</h4>
                        <p>Tech: REACT</p>
                        <nav>
                            <button onClick={() => addUrl("https://skin-care-opal.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="skincare" />
                        </nav>
                    </nav>
                </motion.div>

                

            </article>

            <summary>
                <nav id="card">
                    <img src={thomas} alt=""/>
                    <p className="text"><q>Abdulmalik is an outstanding frontend tutor. He simplifies complex topics, supports students with real projects, and inspires confidence in every session.</q></p>
                    <li class="text">Ibrahim</li>
                    <p style={{fontSize: "12px"}} class="text">Geestack Academy</p>
                </nav>
                <nav id="card">
                    <img src={jennie} alt=""/>
                    <p className="text"><q>He’s fast, reliable, and knows what he’s doing. Abdulmalik built a e ccomerce for our team in just a few days, and everything worked perfectly. Great communication and strong frontend skills.</q></p>
                    <li class="text">Ayobami</li>
                    <p style={{fontSize: "12px"}} class="text">2Soft E-CCOMERCE</p>
                </nav>
                <nav id="card">
                    <img src={emily} alt=""/>
                    <p className="text"><q>Abdulmalik exceeded our expectations. He took our Figma design and turned it into a pixel-perfect, mobile-responsive React app. His attention to detail, clean code structure, and smooth integration of APIs made the process effortless.</q></p>
                    <li class="text">Joe Kith</li>
                    <p style={{fontSize: "12px"}} class="text">Marketing Director</p>
                </nav>
            </summary>
            <Footer/>
        </div>
    )
}
export default Project;