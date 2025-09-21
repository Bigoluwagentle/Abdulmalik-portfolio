import React from "react";
import "./Products.css";
import { motion } from "framer-motion";
import Footer from "./Footer/Footer";
import Portfolio from "./img/Screenshot 2025-09-20 000341.png";
import Buycex from "./img/Screenshot 2025-09-21 093257.png";
import jennie from "./img/image-thomas.jpg";
import emily from "./img/image-emily.jpg";
import thomas from "./img/IMG-20250710-WA0058.jpg";
import Nutrition from "./img/Screenshot 2025-08-28 095318.png";
import Movie from "./img/Screenshot 2025-08-26 135936.png";
import Eccomerce from "./img/Screenshot 2025-08-26 140836.png";
import Car from "./img/Screenshot 2025-08-26 141251.png";
import Recipe from "./img/Screenshot 2025-08-26 141603.png";
import Alquran from "./img/Screenshot 2025-08-26 141924.png";
import Skin from "./img/Screenshot 2025-08-26 142246.png";
import Url from "./img/Screenshot 2025-08-26 142503.png";
import Weather from "./img/Screenshot 2025-08-27 023114.png";
import Blog from "./img/Screenshot 2025-08-27 024215.png";
import Job from "./img/Screenshot 2025-08-27 061615.png";
import Burger from "./img/Screenshot 2025-08-30 073238.png";
import Creative from "./img/creative.png";
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
            <article id="projects" >
                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Buycex} alt="" />
                    <nav class="check">
                        <h4>Buycex Exchange</h4>
                        <p>Tech: NEXTJS, Javascript and Sass</p>
                        <p>Still ongoing</p>
                        <button onClick={() => addUrl("https://abdulmalik-buycex-14nu.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>
                <motion.div id="portfolio"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Portfolio} alt="" />
                    <nav class="check">
                        <h4>Car Repair</h4>
                        <p>Tech: REACT, Javascript and API</p>
                        <button onClick={() => addUrl("https://abdulmalik-car-repair.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>
                <motion.div id="ai" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Nutrition} alt="" />
                    <nav class="check">
                        <h4>AI NUTRITIONIST</h4>
                        <p>Tech: HTML, OpenAI API, JAVASCRIPT</p>
                        <button onClick={() => addUrl("https://nutritionapp-ze9g.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
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
                        <p>Tech:REACT AND JAVASCRIPT</p>
                        <button onClick={() => addUrl("https://creative-jobboard.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Burger} alt="" />
                    <nav class="check">
                        <h4>Burger Store</h4>
                        <p>Tech: REACT AND API</p>
                        <button onClick={() => addUrl("https://code-with-faith-burger-home.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Eccomerce} alt="" />
                    <nav class="check">
                        <h4>E-CCOMERCE</h4>
                        <p>Tech: REACT, JSON AND JAVASCRIPT</p>
                        <button onClick={() => addUrl("https://too-soft-1xtd.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Car} alt="" />
                    <nav class="check">
                        <h4>Car Dealer</h4>
                        <p>Tech: REACT AND JAVASCRIPT</p>
                        <button onClick={() => addUrl("https://abdulmalik-car.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

            
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Recipe} alt="" />
                    <nav class="check">
                        <h4>Recipe</h4>
                        <p>Tech: REACT AND API</p>
                        <button onClick={() => addUrl("https://abdulmalik-recipe.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Movie} alt="" />
                    <nav class="check">
                        <h4>Movie Website</h4>
                        <p>Tech: HTML, API AND JAVASCRIPT</p>
                        <button onClick={() => addUrl("https://abdulmalik-movie.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={Job} alt="" />
                    <nav class="check">
                        <h4>Job-Board</h4>
                        <p>Tech: REACT, API AND JAVASCRIPT</p>
                        <button onClick={() => addUrl("https://mmm-job-board.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>
                
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Alquran} alt="" />
                    <nav class="check">
                        <h4>Al-Quran Audio</h4>
                        <p>Tech: REACT AND API</p>
                        <button onClick={() => addUrl("https://abdulmalik-phi.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Skin} alt="" />
                    <nav class="check">
                        <h4>Skin Care</h4>
                        <p>Tech: REACT</p>
                        <button onClick={() => addUrl("https://skin-care-opal.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Url} alt="" />
                    <nav class="check">
                        <h4>URL Shorten</h4>
                        <p>Tech: REACT AND JAVASCRIPT</p>
                        <button onClick={() => addUrl("https://abdulmalik-url-shorten.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Weather} alt="" />
                    <nav class="check">
                        <h4>Weather App</h4>
                        <p>Tech: REACT AND API</p>
                        <button onClick={() => addUrl("https://weather-app-two-khaki-77.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </motion.div>

                <div>
                <img src={Blog} alt="" />
                    <nav className="check">
                        <h4>My Blog</h4>
                        <p>Tech: REACT</p>
                        <button onClick={() => addUrl("https://abdulmalik-blog.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
            </article>

            <summary>
                <nav id="card">
                    <img src={thomas} alt=""/>
                    <p class="text"><q>Abdulmalik was a key part of our frontend team. He contributed reusable components, improved performance, and helped debug tricky layout issues. He’s a problem solver who brings great energy to every sprint</q></p>
                    <li class="text">Haaj Eth</li>
                    <p style={{fontSize: "12px"}} class="text">Web3 Director</p>
                </nav>
                <nav id="card">
                    <img src={jennie} alt=""/>
                    <p class="text"><q>He’s fast, reliable, and knows what he’s doing. Abdulmalik built a e ccomerce for our team in just a few days, and everything worked perfectly. Great communication and strong frontend skills.</q></p>
                    <li class="text">Ayobami</li>
                    <p style={{fontSize: "12px"}} class="text">2Soft E-CCOMERCE</p>
                </nav>
                <nav id="card">
                    <img src={emily} alt=""/>
                    <p class="text"><q>Abdulmalik exceeded our expectations. He took our Figma design and turned it into a pixel-perfect, mobile-responsive React app. His attention to detail, clean code structure, and smooth integration of APIs made the process effortless.</q></p>
                    <li class="text">Joe Kith</li>
                    <p style={{fontSize: "12px"}} class="text">Marketing Director</p>
                </nav>
            </summary>
            <Footer/>
        </div>
    )
}
export default Project;