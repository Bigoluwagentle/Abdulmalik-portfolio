import "./Footer.css";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import { Link } from "react-router-dom";
function Footer(){
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
        <div id="footer10">
            <footer id="contact">
                <section id="card">
                    <div>
                        <h2>ABDULMALIK</h2>
                    </div>
                    <div id="card">
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#about").click();
                        }}>ABOUT</a>
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#skill").click();
                        }}>SKILLS</a>
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#project").click();
                        }}>PROJECTS</a>
                        <a href="#" class="a" onClick={() => {
                            document.querySelector("#contact").click();
                        }}>CONTACT</a>
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
                <Link id="about" to="/"/>
                <Link id="skill" to="/Skills"/>
                <Link id="project" to="/Projects"/>
                <Link id="contact" to="/Contact"/>
            </footer>
        </div>
    )
}
export default Footer;