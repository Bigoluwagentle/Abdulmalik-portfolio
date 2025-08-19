import "./Bottom.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Bottom(){
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
    return(
        <div id="mobileNva">
            <div id="bottom-bar" style={{backgroundColor : "black"}} className="card">
                
                <nav onClick={() => {
                    document.querySelector("#about").click();
                }}>
                    <i class="fa-solid fa-address-card"></i>
                    <a href="#about">ABOUT</a>
                </nav>
                <nav onClick={() => {
                    document.querySelector("#skills").click();
                }}>
                    <i class="fa-solid fa-house"></i>
                    <a href="#">SKILLS</a>
                </nav>
                <nav onClick={() => {
                    document.querySelector("#Projects").click();
                }}>
                    <i class="fa-solid fa-diagram-project"></i>
                    <a href="#projects">PROJECTS</a>
                </nav>
                <nav onClick={() => {
                    document.querySelector("#Contact").click();
                }}>
                    <i class="fa-solid fa-address-card"></i>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>
            <Link to="/Skills" id="skills" />
            <Link to="/Projects" id="Projects" />
            <Link to="/Contact" id="Contact" />
            <Link to="/" id="about" />
        </div>
    )
}
export default Bottom;