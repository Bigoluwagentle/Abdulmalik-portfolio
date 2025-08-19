import "./Bottom.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Bottom() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const lastCardObserver = new IntersectionObserver((entries) => {
      const lastCard = entries[0];
      if (!lastCard.isIntersecting) return;
      lastCardObserver.unobserve(lastCard.target);
      lastCardObserver.observe(document.querySelector(".card:last-child"));
    });

    lastCardObserver.observe(document.querySelector(".card:last-child"));
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div id="mobileNva">
      <div id="bottom-bar" style={{ backgroundColor: "black" }} className="card">
        <nav>
          <NavLink to="/" className="nav-link">
            <i className="fa-solid fa-address-card"></i>
            <span>ABOUT</span>
          </NavLink>
        </nav>
        <nav>
          <NavLink to="/Skills" className="nav-link">
            <i className="fa-solid fa-house"></i>
            <span>SKILLS</span>
          </NavLink>
        </nav>
        <nav>
          <NavLink to="/Projects" className="nav-link">
            <i className="fa-solid fa-diagram-project"></i>
            <span>PROJECTS</span>
          </NavLink>
        </nav>
        <nav>
          <NavLink to="/Contact" className="nav-link">
            <i className="fa-solid fa-address-card"></i>
            <span>CONTACT</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Bottom;
