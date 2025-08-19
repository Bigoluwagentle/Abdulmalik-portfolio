import "./Footer.css";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
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
        </div>
    )
}
export default Footer;