import "./Main.css";
import { motion } from "framer-motion";
import ji from "../img/ji.jpg";
import light from "../img/light.jpg";
import Footer from "../Footer/Footer";
function Main(){
    
    function downloadPDF() {
        const pdfUrl = 'Abdulmalik_CV.docx';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Abdulmalik_CV.docx';
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
                    >i builds modern, responsive websites and interfaces using Next.js, React.js, Vue.js, TailwindCSS, JavaScript and APIs. I focus on clean design and performance.</motion.p>
                    <motion.button onClick={downloadPDF} 
                        initial ={{x: 100, opacity:0}}
                        whileInView={{x:0, opacity:1, scale:1}}
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
                    <p>I'm a front-end developer with a passion for crafting engaging, user-friendly digital experiences. I specialize in building modern UI/UX-focused interfaces that are not only visually appealing but also highly functional. With a strong design sense and coding skills to match, I thrive on transforming complex ideas into elegant, interactive web solutions. I'm also exploring the future of the web through Web3 technologies, creating decentralized applications that put users first. From sleek landing pages to dynamic dApps, I’m driven by a commitment to clean code, seamless design, and next-gen user experiences.</p>
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