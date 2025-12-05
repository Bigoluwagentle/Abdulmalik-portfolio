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
                        <span>Problem</span>
                        <p>Farmers often receive low profits due to middlemen, while buyers struggle to access fresh produce directly from trusted sources. This creates an inefficient and costly supply chain.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I built a full-stack platform that connects farmers directly to buyers, allowing farmers to list products and buyers to purchase instantly. Using <strong>Next.js, TypeScript, Tailwind CSS, and Firebase,</strong> the platform provides real-time data, secure authentication, and a fast, seamless experience—giving farmers fairer prices and buyers better access to fresh goods.</p>
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
                        <span>Problem</span>
                        <p>Developers often struggle to find collaborators, communicate in real time, and stay updated with the latest tech news—all in one place.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I built DevConnect, a full-stack platform where developers can connect, chat in real time, discuss projects, and access up-to-date tech news. Using <strong> Next.js, TypeScript, Tailwind CSS, and Firebase,</strong> it delivers seamless authentication, live messaging, and dynamic content updates in a single, easy-to-use hub.</p>
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
                        <span>Problem</span>
                        <p>Audiophiles often struggle to find a reliable, dedicated platform for high-end audio products with accurate listings, secure data handling, and a smooth shopping experience.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I created Adiophile, an e-commerce platform focused on premium audio gear—including headphones, earphones, and speakers. Built with <strong> Next.js and TypeScript and powered by Convex,</strong> it offers real-time product management, secure data operations, and a fast, seamless checkout experience tailored for audio enthusiasts.</p>
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
                        <span>Problem</span>
                        <p>Many crypto users face slow, confusing, or unreliable platforms when trying to swap digital assets, often lacking smooth UI and intuitive interactions.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I’m building Buycex, a Web3-powered exchange focused on fast, seamless crypto asset swapping. Developed with <strong> Next.js and enhanced using Framer Motion,</strong> it delivers a clean, modern interface with fluid, interactive animations for a better user experience. (Project still in progress.)</p>
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
                        <span>Problem</span>
                        <p>Many adults struggle to access flexible, easy-to-use learning platforms that support skill improvement while fitting into busy schedules.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I built Adult-Edu, a learning platform that provides adults with accessible educational resources and a simple, intuitive interface for continuous growth. Developed with <strong> Next.js and Firebase,</strong> it offers secure authentication, smooth content delivery, and a user-friendly experience designed for lifelong learning</p>
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
                        <span>Problem</span>
                        <p>Creative professionals often struggle to find a dedicated space to discover industry-specific job opportunities with a clean, engaging browsing experience.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I built Creative Jobboard, a modern platform for listing and discovering creative industry jobs. Developed with <strong> React and JavaScript,</strong> and enhanced using Framer Motion, it delivers smooth, engaging animations and an intuitive interface for easier job exploration.</p>
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
                        <span>Problem</span>
                        <p>Many people struggle to understand what to eat for their specific goals, often lacking quick, personalized nutrition guidance.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I created AI Nutritionist, a simple tool that provides instant, AI-powered meal and nutrition recommendations based on user input. Built with <strong> HTML, JavaScript, and the OpenAI API,</strong> it delivers fast, accessible diet guidance through an easy-to-use interface.</p>
                        <nav>
                            <button onClick={() => addUrl("https://nutritionapp-ze9g.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="nutritionist" />
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
                        <span>Problem</span>
                        <p>Shoppers often need a simple and reliable platform to browse products, view details, and make purchases without slow or confusing interfaces.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I built a clean and user-friendly E-Commerce platform that lets users browse items, view product data, and shop smoothly. Developed with <strong> React, JavaScript, and JSON,</strong> it delivers fast rendering, organized product management, and an intuitive shopping experience.</p>
                        <nav>
                            <button onClick={() => addUrl("https://too-soft-1xtd.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="ecommerce" />
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