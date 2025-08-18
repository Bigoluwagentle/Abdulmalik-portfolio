import "./Header.css";
import ji from "../img/ji.jpg";
import light from "../img/light.jpg";
import jennie from "../img/image-thomas.jpg";
import emily from "../img/image-emily.jpg";
import thomas from "../img/IMG-20250710-WA0058.jpg";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
function Header(){
    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting);
            })
            }, 
            {
                threshold: 0.5,
            }
        )
        const lastCardObserver = new IntersectionObserver(entries => {
            const lastCard = entries[0];
            if(!lastCard.isIntersecting) return
            lastCardObserver.unobserve(lastCard.target)
            lastCardObserver.observe(document.querySelector(".card:last-child"))
        }, {})
        lastCardObserver.observe(document.querySelector(".card:last-child"));
        cards.forEach(card => {
            observer.observe(card);
        });
        
        const bars = document.querySelectorAll(".bar span");

        const observers = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const span = entry.target;
            const percent = parseInt(span.dataset.percent);
            const label = span.nextElementSibling;

            if (entry.isIntersecting) {
            span.style.width = percent + "%";
            let counter = 0;
            const interval = setInterval(() => {
                counter++;
                label.textContent = counter + "%";
                if (counter >= percent) clearInterval(interval);
            }, 20);
            } else {
            span.style.width = "0";
            label.textContent = "0%";
            }
        });
        }, { threshold: 0.5 });
        bars.forEach(bar => observers.observe(bar));
    }, []);
    
    function downloadPDF() {
        const pdfUrl = 'Abdulmalik_CV.docx';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Abdulmalik_CV.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
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
        <div id="header">
            <header id="card" className="card">
                <div className="head" id="card">
                    <h2>ABDULMALIK</h2>
                </div>
                
                <div className="links" id="card">
                    <a href="#" class="a">HOME</a>
                    <a href="#about" className="a">ABOUT</a>
                    <a href="#about" className="a">SKILLS</a>
                    <a href="#projects" className="a">PROJECTS</a>
                    <a href="#contact" className="a">CONTACT</a>
                </div>
                <h2 id="hamburger">PORTFOLIO</h2>
            </header>
            <main>
                <section className="card">
                    <h2 class="you">Hello, I'm</h2>
                    <h1 class="you">Abdulmalik</h1>
                    <h2 class="you">Frontend Developer</h2>
                    <p>i builds modern, responsive websites and interfaces using React, Vue, TailwindCSS, JavaScript and APIs. I focus on clean design and performance.</p>
                    <button onClick={downloadPDF}>
                        <i class="fa-solid fa-download"></i>
                        Download CV
                    </button>
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
                <div class="card" id="card">
                    <img src="img/icons8-popular-man-50.png" width="30px" alt="" id="experience"/>
                    <h4>Experience</h4>
                    <p>5 Years</p>
                </div>
                <div class="card" id="card">
                    <img src="img/icons8-check-mark.svg" width="30px" id="complete" alt=""/>
                    <h4>Completed Project</h4>
                    <p>30+</p>
                </div>
                <div class="card" id="card">
                    <img src="img/icons8-support-50.png" width="30px" id="Support" alt=""/>
                    <h4>Support</h4>
                    <p>Geegstack Academy</p>
                </div>
            </figure>

            <div id="skill">
                <h2>Skills</h2>
                <section>
                    <nav id="card" className="card">
                        <h4>HTML5</h4>
                        <div className="bar">
                            <span data-percent="95">95%</span>
                            <small>0%</small>
                        </div>
                    </nav>
                    <nav id="card" className="card">
                        <h4>CSS3</h4>
                        <div className="bar">
                          <span data-percent="75">75%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>TAILWIND CSS</h4>
                        <div className="bar">
                          <span data-percent="80">80%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>SASS</h4>
                        <div className="bar">
                          <span data-percent="98">98%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>JAVASCRIPT</h4>
                        <div className="bar">
                          <span data-percent="80">80%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>REACT.js</h4>
                        <div className="bar">
                          <span data-percent="85">85%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>VUE.js</h4>
                        <div className="bar">
                          <span data-percent="60">60%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>GIT</h4>
                        <div className="bar">
                          <span data-percent="95">95%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>Framer Motion</h4>
                        <div className="bar">
                          <span data-percent="45">45%</span>
                          <small>0%</small>
                        </div>
                    </nav>
                </section>
            </div>
            <article id="projects">
                <div class="card" id="ai">
                    <nav class="check">
                        <h4>AI NUTRITIONIST</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: HTML, OpenAI API, JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results. </p>
                        <button onClick={() => addUrl("https://nutritionapp-ze9g.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
            
                <div class="card" id="product">
                    <nav class="check">
                        <h4>Movie Website</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, API AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100+ users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-movie.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div class="card" id="land">
                    <nav class="check">
                        <h4>Job-Board</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, API AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://mmm-job-board.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div class="card" id="web">
                    <nav class="check">
                        <h4>E-CCOMERCE</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, JSON AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://too-soft-1xtd.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div class="card" id="bag">
                    <nav class="check">
                        <h4>Car Dealer</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-car.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                
                <div class="card" id="web3">
                    <nav class="check">
                        <h4>Web3 Landing Page</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: CSS, REACT AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://xend-finance-seven.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
            </article>

            <summary>
                <nav id="card" className="card">
                    <img src={thomas} alt=""/>
                    <p class="text"><q>Abdulmalik was a key part of our frontend team. He contributed reusable components, improved performance, and helped debug tricky layout issues. He’s a problem solver who brings great energy to every sprint</q></p>
                    <li class="text">Haaj Eth</li>
                    <p style={{fontSize: "12px"}} class="text">Web3 Director</p>
                </nav>
                <nav id="card" className="card">
                    <img src={jennie} alt=""/>
                    <p class="text"><q>He’s fast, reliable, and knows what he’s doing. Abdulmalik built a e ccomerce for our team in just a few days, and everything worked perfectly. Great communication and strong frontend skills.</q></p>
                    <li class="text">Ayobami</li>
                    <p style={{fontSize: "12px"}} class="text">2Soft E-CCOMERCE</p>
                </nav>
                <nav id="card" className="card">
                    <img src={emily} alt=""/>
                    <p class="text"><q>Abdulmalik exceeded our expectations. He took our Figma design and turned it into a pixel-perfect, mobile-responsive React app. His attention to detail, clean code structure, and smooth integration of APIs made the process effortless.</q></p>
                    <li class="text">Joe Kith</li>
                    <p style={{fontSize: "12px"}} class="text">Marketing Director</p>
                </nav>
            </summary>
            <Contact/>
            <footer id="contact">
                <section id="card" className="card">
                    <div>
                        <h2>ABDULMALIK</h2>
                    </div>
                    <div id="card" className="card">
                        <a href="#" class="a">HOME</a>
                        <a href="#about" class="a">ABOUT</a>
                        <a href="#about" class="a">SKILLS</a>
                        <a href="#projects" class="a">PROJECTS</a>
                        <a href="#contact" class="a">CONTACT</a>
                    </div>
                    <div id="card" className="card">
                        <a href="#" onClick={() => addUrl("https://www.facebook.com/base.man.304047")} class="a"><img src={facebook} id="face" alt=""/></a>
                        <a href="#" target="_blank" onClick={() => addUrl("https://x.com/broskiprop94216")} class="a"><img src={twitter} id="twi" alt=""/></a>
                    </div>
                    <div id="card">
                        <button onClick={() => addUrl("mailto:abdrosheedabdmalikadgmail.com")}>
                            <i class="fa-solid fa-envelope"></i>
                            Email
                        </button>
                        <button onClick={() => addUrl("https://wa.me/9076956531")}>
                            <i class="fa-brands fa-whatsapp"></i>
                            Whatsapp
                        </button>
                    </div>
                </section>
            </footer>
             {/* <Contact/> */}
            <div id="bottom-bar" style={{backgroundColor : "black"}} className="card">
                <nav>
                    <i class="fa-solid fa-house"></i>
                    <a href="#">HOME</a>
                </nav>
                <nav>
                    <i class="fa-solid fa-address-card"></i>
                    <a href="#about">ABOUT</a>
                </nav>
                <nav>
                    <i class="fa-solid fa-diagram-project"></i>
                    <a href="#projects">PROJECTS</a>
                </nav>
                <nav>
                    <i class="fa-solid fa-address-card"></i>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>
        </div>
    )
}
export default Header;