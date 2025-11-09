import "./Footer.css";
import { motion } from "framer-motion";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import { Link } from "react-router-dom";
function Footer(){
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
    return(
        <div id="footer10">
            <section>
                <motion.h4
                    initial={{y:100}}
                    whileInView={{y:0}}
                    transition={{duration:2}}
                >Need a website that converts visitors into customers? Let’s connect.</motion.h4>
                <motion.button
                    initial={{x:-100}}
                    whileInView={{x:0}}
                    transition={{type:"spring", stiffness: 130}}
                    onClick={() => {
                        document.querySelector("#cont").click();
                    }}
                >Let’s talk about your project</motion.button>
            </section>
            <footer id="contact">
                <section id="card">
                    <div style={{width:"100%"}}>
                        <h2>ABDULMALIK</h2>
                        <p style={{textAlign: "start"}}>I help businesses grow online by building fast, modern, and responsive web and mobile apps.</p>
                    </div>
                    
                    <div id="card">
                        <h4>Quick Links</h4>
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#about").click();
                        }}>ABOUT</a>
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#skill").click();
                        }}>SKILLS</a>
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#project").click();
                        }}>PROJECTS</a>
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#cont").click();
                        }}>CONTACT</a>
                    </div>

                    <div>
                        <h4>Services</h4>
                        <p>Frontend Web Development</p>
                        <p>Mobile App Development</p>
                        <p>UI/UX Implementation</p>
                        <p>Custom Web Applications</p>
                    </div>
                    
                    <div id="card">
                        <h4>Social Media</h4>
                        <a href="https://github.com/Bigoluwagentle" onClick={() => addUrl("https://github.com/Bigoluwagentle")} class="a"><i class="fa-brands fa-github"></i></a>
                        <a href="https://www.facebook.com/base.man.304047" onClick={() => addUrl("https://www.facebook.com/base.man.304047")} class="a"><img src={facebook} id="face" alt=""/></a>
                        <a href="https://x.com/broskiprop94216" target="_blank" onClick={() => addUrl("https://x.com/broskiprop94216")} class="a"><img src={twitter} id="twi" alt=""/></a>
                    </div>
                    <div id="card">
                        <h4>Get in Touch</h4>
                        <button onClick={() => addUrl("mailto:abdrosheedabdmalikadgmail.com")}>
                            <i class="fa-solid fa-envelope"></i>
                            Email
                        </button>
                        
                        <button onClick={() => addUrl("https://wa.me/9076956531")}>
                            Whatsapp
                        </button>
                    </div>
                </section>
                <Link id="about" to="/"/>
                <Link id="skill" to="/Skills"/>
                <Link id="project" to="/Projects"/>
                <Link id="cont" to="/Contact"/>
            </footer>
            <p>Design by Abdulmalik with Reactjs.</p>
        </div>
    )
}
export default Footer;