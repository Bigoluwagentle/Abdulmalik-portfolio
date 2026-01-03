import React from "react";
import LikeButton from "./LikeButton"
import "./Products.css";
import { motion } from "framer-motion";
import Footer from "./Footer/Footer";
import Buycex from "./img/Screenshot 2025-09-21 093257.png";
import jennie from "./img/image-thomas.jpg";
import DevConnect from "./img/devconnect.png";
import emily from "./img/image-emily.jpg";
import thomas from "./img/GRMM1yg5.png";
import Nutrition from "./img/coach.png";
import CareerBuilder from "./img/careerbuilder.png";
import Audiophile from "./img/audiophile.png";
import Agro from "./img/agrolink.png";
import Creative from "./img/skill.png";
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
            
            <article id="projects" >
                <motion.div id="ai" 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    <img src={Nutrition} alt="" />
                    <nav className="check">
                        <h4>CoachCam</h4>
                        <span>Problem</span>
                        <p>Coaches spend hours manually reviewing training and match videos, making analysis slow, subjective, and inefficient. This delays feedback and limits data-driven performance improvement.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>CoachCam is an AI-powered video analysis platform that automatically analyzes sports footage and provides real-time, actionable insights, helping coaches make faster, smarter decisions and improve athlete performance.</p>
                        <nav>
                            <button onClick={() => addUrl("https://coach-cam-nu.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="nutritionist" />
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
                        <h4>SkillBridge</h4>
                        <span>Problem</span>
                        <p>Finding reliable skilled workers is often difficult, time-consuming, and risky due to lack of trust, verification, and clear information.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>A community-based platform that connects users with verified skilled professionals—such as plumbers, electricians, and mechanics—making it easy to find trusted experts and get quality work done.</p>
                        <nav>
                            <button onClick={() => addUrl("https://skill-bridge-liard-nine.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="creative" />

                        </nav>
                    </nav>
                </motion.div>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    exit="exit"
                >
                    <img src={CareerBuilder} alt="CareerBuilder" />
                    <nav className="check">
                        <h4>AI Career Builder</h4>
                        <span>Problem</span>
                        <p>Many people struggle to create professional resumes and personal portfolios due to confusing tools, limited customization options, and a lack of guidance. Without design skills or clear content direction, users often feel overwhelmed and unable to build strong career materials.</p>
                        <span style={{color: "green"}}>Solution</span>
                        <p>I created an intuitive Resume & Portfolio Builder using <strong>Next.js, TypeScript, Tailwind, Firebase, and Gemini AI.</strong> It lets users generate content with AI, customize layouts, and securely save their work delivering a fast, smooth, and modern creation experience.</p>
                        <nav>
                            <button onClick={() => addUrl("https://ai-career-builder-teal.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                            <LikeButton projectId="ecommerce" />
                        </nav>
                    </nav>
                </motion.div>
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