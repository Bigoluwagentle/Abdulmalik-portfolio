import "./Header.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
    
    return(
        <div id="header">
            <header id="card" className="card">
                <div className="head" id="card">
                    <h2>ABDULMALIK</h2>
                </div>
                
                <div className="links" id="card">
                    <a href="#" className="a" onClick={() => {
                        document.querySelector("#about").click();
                    }}>ABOUT</a>
                    <a href="#" className="a" onClick={() => {
                        document.querySelector("#skills").click();
                    }}>SKILLS</a>
                    <a href="#" className="a" onClick={() => {
                        document.querySelector("#Projects").click();
                    }}>PROJECTS</a>
                    <a href="#" className="a" onClick={() => {
                        document.querySelector("#Contact").click();
                    }}>CONTACT</a>
                </div>
                <h2 id="hamburger">PORTFOLIO</h2>
            </header>
            <Link to="/Skills" id="skills" />
            <Link to="/Projects" id="Projects" />
            <Link to="/Contact" id="Contact" />
            <Link to="/" id="about" />
        </div>
    )
}
export default Header;