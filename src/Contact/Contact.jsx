import "./Contact.css";
import { Stack, TextField, Button } from "@mui/material";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
function Contact() { 
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
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wihdvep",      
      "template_704dmhp",   
      e.target,               
      "TuWLoTBD5rPIKrcGa"
    )
    .then(() => {
      alert("Message Sent Successfully ✅");
      e.target.reset(); // clear form after success
    }, (error) => {
      alert("ohhhh! please click on the email button");
    });
  };

  return (
    <div id="contact5">
      <div id="contact2">
        <div className="contact">
          <form onSubmit={handleSubmit} className="card">
            <h2>Contact Me</h2>
            <nav>
              <Stack>
                <TextField 
                  name="name"
                  label="Name"
                  helperText="Enter your Name"
                  required
                  type="text"
                  variant="outlined"
                />
              </Stack>
            </nav>

            <nav>
              <Stack>
                <TextField 
                  name="email" 
                  label="Email"
                  helperText="Enter your Email Address"
                  required
                  type="email"
                  variant="outlined"
                />
              </Stack>
            </nav>

            <nav>
              <Stack>
                <TextField 
                  name="project"          
                  label="Project"
                  helperText="Enter your project"
                  required
                  type="text"
                  variant="outlined"
                />
              </Stack>
            </nav>

            <nav>
              <Stack>
                <Button type="submit" variant="contained" color="info">
                  Send
                </Button>
              </Stack>
            </nav>
          </form>
        </div>
      </div>
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

export default Contact;
