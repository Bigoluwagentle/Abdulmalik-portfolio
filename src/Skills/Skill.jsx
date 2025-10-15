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
                        <h4>REACT NATIVE</h4>
                    </nav>
                    <nav id="card" className="card">
                        <h4>EXPO</h4>
                    </nav>
                    <nav id="card" className="card">
                        <h4>Next.js</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>REACT.js</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>TYPESCRIPT</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>VUE.js</h4>
                    </nav>
                    <nav id="card" className="card">
                        <h4>REDUX</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>TAILWIND CSS</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>JAVASCRIPT</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>HTML5</h4>
                    </nav>
                    <nav id="card" className="card">
                        <h4>CSS3</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>SASS</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>BOOSTRAP</h4>
                    </nav>

                    <nav id="card" className="card">
                        <h4>GIT</h4>
                    </nav>
                    
                    <nav id="card" className="card">
                        <h4>Firebase</h4>
                    </nav>
                    <nav id="card" className="card">
                        <h4>Material UI</h4>
                    </nav>
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Skill;