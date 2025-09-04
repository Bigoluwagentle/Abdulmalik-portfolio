import "./Main.css";
import { useEffect } from "react";
import ji from "../img/ji.jpg";
import light from "../img/light.jpg";
import Footer from "../Footer/Footer";
function Main(){
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
    return(
        <div id="main">
            <main>
                <section className="card">
                    <h2 class="you">Hello, I'm</h2>
                    <h1 class="you">Abdulmalik</h1>
                    <h2 class="you">Frontend Developer</h2>
                    <p>i builds modern, responsive websites and interfaces using Next.js, React.js, Vue.js, TailwindCSS, JavaScript and APIs. I focus on clean design and performance.</p>
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
                    <i class="fa-solid fa-user"></i>
                    <h4>Experience</h4>
                    <p>3 Years +</p>
                </div>
                <div class="card" id="card">
                    <i class="fa-solid fa-diagram-project"></i>
                    <h4>Completed Project</h4>
                    <p>100+</p>
                </div>
                <div class="card" id="card">
                    <i class="fa-solid fa-square-envelope"></i>
                    <h4>Support</h4>
                    <p>Geegstack Academy</p>
                </div>
            </figure>
            <Footer/>
        </div>
    )
}

export default Main;