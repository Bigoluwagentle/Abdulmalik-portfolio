import "./Main.css";
import { motion } from "framer-motion";
import Illustration from "../img/illustration.svg";
import light from "../img/light.jpg";
import Footer from "../Footer/Footer";
function Main(){
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
                    <h2 className="you">Hello, I'm</h2>
                    <h1 className="you">Abdulmalik</h1>
                    <motion.h2 className="you"
                        initial = {{opacity: 0}}
                        whileInView = {{opacity:1}}
                        transition = {{duration:2}}
                        
                    >Frontend & Mobile Developer | Tutor | Problem Solver</motion.h2>
                    <motion.p
                        initial = {{opacity:0, y: 100}}
                        whileInView = {{opacity:1, y:0}}
                        transition={{duration: 1, type: "spring", stiffness: 120}}
                    >I help businesses grow online by building fast, modern, and responsive web and mobile apps. Using Next.js, TypeScript, React, React Native, and TailwindCSS, I create clean, high-performing digital experiences that attract customers and drive revenue.</motion.p>
                    <motion.button onClick={downloadPDF} 
                        initial ={{y: 100, opacity:0}}
                        whileInView={{y:0, opacity:1, scale:1}}
                        transition={{duration:2, delay: 1, type: "spring", stiffness: 200}}
                        whileHover = {{scale:1.1}}
                    >
                        <i className="fa-solid fa-download"></i>
                        Download CV
                        
                    </motion.button>
                    <motion.button 
                        initial ={{y: 100, opacity:0}}
                        whileInView={{y:0, opacity:1, scale:1}}
                        transition={{duration:2, delay: 1, type: "spring", stiffness: 200}}
                        whileHover = {{scale:1.1}}
                    >
                        View My Work
                    </motion.button>
                </section>
                <img src={Illustration} alt="illustrtion" />
            </main>

            <nav className="ok" id="card">
                <aside className="about" id="about">
                    <h2 className="p">ABOUT ME</h2>
                    <motion.p
                        initial={{y:100}}
                        whileInView={{y:0}}
                        transition={{duration:1}}
                    >I’m a <strong> Frontend and Mobile App Developer </strong> with a passion for building modern, responsive, and user-focused digital experiences. I specialize in creating sleek, high-performance interfaces using <strong> Next.js, React, React Native, Vue, Tailwind CSS, and TypeScript. </strong></motion.p>

                    <motion.p
                        initial={{y:100}}
                        whileInView={{y:0}}
                        transition={{duration:1}}
                    > Beyond development, I’m also a <strong>Tutor</strong> who enjoys breaking down complex frontend concepts into simple, practical lessons. Teaching has strengthened my ability to write <strong>clean, scalable, and maintainable code</strong>, while inspiring others to grow in tech.</motion.p>
                    <motion.p
                        initial={{y:100}}
                        whileInView={{y:0}}
                        transition={{duration:1}}
                    > Whether I’m coding a new interface or mentoring students, my goal remains the same to build meaningful digital products that help <strong>businesses grow</strong> and <strong>empower people through technology</strong>.</motion.p>
                    <button>View my Skills</button>
                </aside>
                <aside id="card">
                    <img className="mypic" src={light} alt=""/>
                </aside>
            </nav>

            <figure id="card">
                <motion.div id="card"
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1, type: "spring", stiffness: 200}}
                >
                    <i className="fa-solid fa-user"></i>
                    <h4>Experience</h4>
                    <p>3 Years +</p>
                </motion.div>
                <motion.div id="card"
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1, type: "spring", stiffness: 200}}
                >
                    <i className="fa-solid fa-diagram-project"></i>
                    <h4>Completed Project</h4>
                    <p>100+</p>
                </motion.div>
                <motion.div id="card"
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1, type: "spring", stiffness: 200}}
                >
                    <i className="fa-solid fa-square-envelope"></i>
                    <h4>Client Satisfaction</h4>
                    <p>5+</p>
                </motion.div>
                <motion.div id="card"
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1, type: "spring", stiffness: 200}}
                >
                    <i className="fa-solid fa-square-envelope"></i>
                    <h4>Support</h4>
                    <p>Geegstack Academy</p>
                </motion.div>
                
            </figure>

            <h2>MY SERVICES</h2>
            <div id="service">
                <motion.section
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <i className="fa-solid fa-code"></i>
                    <h4>Frontend Web Development</h4>
                    <p>I design and develop modern, responsive websites using React, Next.js, Typescript and Vue. My focus is on delivering fast, interactive, and user-friendly experiences</p>
                </motion.section>
                <motion.section
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <i className="fa-solid fa-code"></i>
                    <h4>Mobile App Development</h4>
                    <p>I build cross-platform mobile apps with React Native that run smoothly on both iOS and Android, offering intuitive designs and seamless performance.</p>
                </motion.section>
                
                <motion.section
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <i className="fa-solid fa-code"></i>
                    <h4>UI/UX Implementation</h4>
                    <p>I turn creative designs into functional interfaces, ensuring every element is pixel-perfect, accessible, and optimized for user engagement.</p>
                </motion.section>
                <motion.section
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <i className="fa-solid fa-code"></i>
                    <h4>Performance Optimization</h4>
                    <p>I optimize websites and apps for speed, scalability, and smooth performance, making sure they load quickly and work flawlessly across devices.</p>
                </motion.section>
                <motion.section
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <i className="fa-solid fa-code"></i>
                    <h4>Custom Web Applications</h4>
                    <p>I develop tailored web solutions, from dashboards to e-commerce platforms, that meet specific business needs and integrate with modern APIs.</p>
                </motion.section>
                <motion.section
                    initial = {{opacity:0, y: 100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration: 1}}
                >
                    <i className="fa-solid fa-code"></i>
                    <h4>Maintenance & Support</h4>
                    <p>I provide ongoing updates, bug fixes, and feature enhancements to keep websites and apps secure, stable, and aligned with the latest technology trends</p>
                </motion.section>
            </div>
            <h2>EXPERIENCE</h2>
            <div id="experince">
                <section>
                    <motion.aside
                        initial={{y:-100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <h4>Frontend Developer</h4>
                        <p>GEEGSTACK ACADEMY</p>
                        <li>April 2025 - present</li>
                        <li>- Teach students the fundamentals of frontend development including HTML, CSS, and JavaScript</li>
                        <li>- Guide learners through building real-world projects with React.js</li>
                        <li>- Explain API integration, and responsive design principles in simple, practical terms</li>
                        <li>- Encourage hands-on coding, teamwork, and problem-solving during classes.</li>
                    </motion.aside>
                </section>
                <section>
                    <motion.aside
                        initial={{y:-100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <h4>Mobile App Developer</h4>
                        {/* <p><strong>FixMate</strong></p> */}
                        <li>- Developed a mobile application for hiring professional handymen.</li>
                        <li>- Built using modern technologies — React Native, Expo, and OpenAI integration.</li>
                        <li>- Implemented dynamic service listings featuring plumbing, cleaning, and mechanic categories.</li>
                        <button onClick={() => addUrl("https://expo.dev/artifacts/eas/vEkW1kgnPrPK6GxYdbhjbE.apk")}><i class="fa-brands fa-android"></i> Download App</button>
                    </motion.aside>
                </section>
                <section>
                    <motion.aside
                        initial={{y:100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <h4>Frontend Developer</h4>
                        <p><strong>TOO SOFT COLLECTION</strong> — Freelance</p>
                        <li>- Developed a fully responsive e-commerce website for a clothing brand.</li>
                        <li>- Built with React.js and JavaScript to display product images, prices, and details.</li>
                        <li>- Implemented dynamic product listings to enhance user experience and engagement.</li>
                    </motion.aside>
                </section>
                <section>
                    <motion.aside
                        initial={{y:-100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1}}
                    >
                        <h4>Frontend Developer</h4>
                        <p><strong>OYAB AUTOS</strong> — Freelance</p>
                        <li>Freelance</li>
                        <li>- Developed an e-commerce platform for a vehicle dealership.</li>
                        <li>- Built with the latest technologies — Next.js, JavaScript, and JSON for data management.</li>
                        <li>- Implemented dynamic car listings displaying images, prices, and detailed descriptions.</li>
                    </motion.aside>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Main;