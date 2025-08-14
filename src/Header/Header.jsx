import "./Header.css";
import ji from "../img/ji.jpg";
import light from "../img/light.jpg";
import jennie from "../img/image-jennie.jpg";
import emily from "../img/image-emily.jpg";
import thomas from "../img/image-thomas.jpg";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
function Header(){
    {
        const cards = document.querySelectorAll("#card")
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
    }
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
            <header id="card">
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

            <main class="ok">
                <section id="card">
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

            <figure class="ok" id="card">
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

            <div id="skill" className="ok">
                <h2>Skills</h2>
                <section>
                    <nav id="card" className="card">
                        <h4>HTML5</h4>
                        <div>
                          <input type="text" value="95%" style={{width: "95%"}} readOnly />  
                        </div>
                    </nav>
                    <nav id="card" className="card">
                        <h4>CSS3</h4>
                        <div>
                          <input type="text" value="90%" style={{width: "90%"}} readOnly />  
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>TAILWIND CSS</h4>
                        <div>
                          <input type="text" value="80%" style={{width: "80%"}} readOnly />  
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>SASS</h4>
                        <div>
                          <input type="text" value="98%" style={{width: "98%"}} readOnly />  
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>JAVASCRIPT</h4>
                        <div>
                          <input type="text" value="80%" style={{width: "80%"}} readOnly />  
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>REACT</h4>
                        <div>
                          <input type="text" value="85%" style={{width: "85%"}} readOnly />  
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>VUE</h4>
                        <div>
                          <input type="text" value="60%" style={{width: "60%"}} readOnly />  
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>GIT</h4>
                        <div>
                          <input type="text" value="95%" style={{width: "95%"}} readOnly />  
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>Framer</h4>
                        <div>
                          <input type="text" value="45%" style={{width: "45%"}} readOnly />  
                        </div>
                    </nav>
                </section>
            </div>
            <article class="ok" id="projects">
                <div class="ai" id="card">
                    <nav class="check">
                        <h4>AI NUTRITIONIST</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: HTML, OpenAI API, JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results. </p>
                        <button onClick={() => addUrl("https://nutritionapp-ze9g.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
            
                <div class="product" id="card">
                    <nav class="check">
                        <h4>Movie Website</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, API AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100+ users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-movie.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div class="land" id="card">
                    <nav class="check">
                        <h4>Job-Board</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, API AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://mmm-job-board.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div class="web" id="card">
                    <nav class="check">
                        <h4>E-CCOMERCE</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, JSON AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://too-soft-1xtd.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div class="bag" id="card">
                    <nav class="check">
                        <h4>MY AI</h4>
                        <p>Tech:REACT AND API</p>
                        <p>Result: Over 200+ users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-coding-ai.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                
                <div class="web3" id="card">
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

            <footer id="contact">
                <h2>CONTACT</h2>
                <section id="card">
                    <div>
                        <h2>ABDULMALIK</h2>
                    </div>
                    <div id="card">
                        <a href="#" class="a">HOME</a>
                        <a href="#about" class="a">ABOUT</a>
                        <a href="#about" class="a">SKILLS</a>
                        <a href="#projects" class="a">PROJECTS</a>
                        <a href="#contact" class="a">CONTACT</a>
                    </div>
                    <div id="card">
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

            <div id="bottom-bar" style={{backgroundColor : "black"}}>
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