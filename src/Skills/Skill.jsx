import Footer from "../Footer/Footer";
import "./Skill.css";
import { useEffect } from "react";
function Skill(){
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
    return(
        <div>
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
                        <h4>SASS</h4>
                        <div className="bar">
                          <span data-percent="98">98%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>BOOSTRAP</h4>
                        <div className="bar">
                          <span data-percent="75">75%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>TAILWIND CSS</h4>
                        <div className="bar">
                          <span data-percent="70">70%</span>
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
                        <h4>Next.js</h4>
                        <div className="bar">
                          <span data-percent="50">50%</span>
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
                          <span data-percent="90">90%</span>
                          <small>0%</small>
                        </div>
                    </nav>

                    <nav id="card" className="card">
                        <h4>Framer Motion</h4>
                        <div className="bar">
                          <span data-percent="80">80%</span>
                          <small>0%</small>
                        </div>
                    </nav>
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Skill;