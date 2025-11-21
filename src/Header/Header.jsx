import "./Header.css";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {motion} from "framer-motion";

function Header() {
  useEffect(() => {
    const bars = document.querySelectorAll(".bar span");
    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
      },
      { threshold: 0.5 }
    );
    bars.forEach((bar) => observers.observe(bar));
  }, []);

  return (
    <div id="header">
      <header id="card">
        <div className="head" id="card">
          <Link to="/">
          <motion.h2
            initial = {{opacity:0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
              ABDULMALIK
            </motion.h2>
            </Link>
        </div>

        <motion.div className="links" id="card"
          initial = {{opacity: 0, x: 100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration: 1}}
        >
          <NavLink to="/" className="a">
            ABOUT
          </NavLink>
          <NavLink to="/Skills" className="a">
            SKILLS
          </NavLink>
          <NavLink to="/Projects" className="a">
            PROJECTS
          </NavLink>
          <NavLink to="/Contact" className="a">
            CONTACT
          </NavLink>
        </motion.div>
        <h2 id="port">PORTFOLIO</h2>
      </header>
    </div>
  );
}
export default Header;