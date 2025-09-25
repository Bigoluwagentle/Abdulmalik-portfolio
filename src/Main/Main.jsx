import "./Main.css";
import { motion } from "framer-motion";
import ji from "../img/ji.jpg";
import light from "../img/light.jpg";
import Footer from "../Footer/Footer";
function Main(){
    
    function downloadPDF() {
        const pdfUrl = 'Abdulmalik_CV.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Abdulmalik_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <div id="main">
            <main>
                <section>
                    <h2 class="you">Hello, I'm</h2>
                    <h1 class="you">Abdulmalik</h1>
                    <motion.h2 class="you"
                        initial = {{opacity: 0, x: 100}}
                        whileInView = {{opacity:1, x:0,}}
                        transition = {{duration:1.5, delay: 0.5}}
                        
                    >Frontend Engineer</motion.h2>
                    <motion.p
                        initial = {{opacity:0, y: 100}}
                        whileInView = {{opacity:1, y:0}}
                        transition={{duration: 1, delay:1.5, type: "spring", stiffness: 120}}
                    >i builds modern, responsive websites and interfaces using Next.js, React.js, Typescript Vue.js, TailwindCSS, JavaScript and APIs. I focus on clean design and performance.</motion.p>
                    <motion.button onClick={downloadPDF} 
                        initial ={{y: 100, opacity:0}}
                        whileInView={{y:0, opacity:1, scale:1}}
                        transition={{duration:2, delay: 2, type: "spring", stiffness: 200}}
                        whileHover = {{scale:1.1}}
                    >
                        <i class="fa-solid fa-download"></i>
                        Download CV
                        
                    </motion.button>
                </section>
                <img src={ji} id="card" class="change" width="400px" alt=""/>
            </main>

            <nav class="ok" id="card">
                <aside class="about" id="about">
                    <h2 class="p">ABOUT ME</h2>
                    <motion.p
                        initial={{y:100, opacity:0}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:2}}
                    >I’m a Frontend Engineer & Tutor passionate about building modern, responsive, and user-friendly web applications. Skilled in Next.js, React, Vue, Tailwind CSS, HTML, CSS, and JavaScript, I specialize in creating sleek interfaces that combine performance with great design. As a tutor, I enjoy sharing knowledge and helping others grow in frontend development—breaking down complex concepts into simple, practical lessons. Teaching has also sharpened my own skills, giving me a deeper understanding of how to write clean, scalable, and maintainable code. Whether I’m coding or teaching, my goal is the same: to create meaningful digital experiences while empowering others to do the same.</motion.p>
                </aside>
                <aside id="card">
                    <img class="mypic" src={light} alt=""/>
                </aside>
            </nav>

            <figure id="card">
                <motion.div id="card"
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1, type: "spring", stiffness: 200}}
                >
                    <i class="fa-solid fa-user"></i>
                    <h4>Experience</h4>
                    <p>3 Years +</p>
                </motion.div>
                <motion.div id="card"
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1, type: "spring", stiffness: 200}}
                >
                    <i class="fa-solid fa-diagram-project"></i>
                    <h4>Completed Project</h4>
                    <p>100+</p>
                </motion.div>
                <motion.div id="card"
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1, type: "spring", stiffness: 200}}
                >
                    <i class="fa-solid fa-square-envelope"></i>
                    <h4>Support</h4>
                    <p>Geegstack Academy</p>
                </motion.div>
            </figure>
            <Footer/>
        </div>
    )
}

export default Main;