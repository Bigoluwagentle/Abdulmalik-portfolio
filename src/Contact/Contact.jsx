import "./Contact.css";
import { Stack, TextField, Button } from "@mui/material";
import { useEffect } from "react";
import emailjs from "emailjs-com";
import Footer from "../Footer/Footer";

function Contact() { 
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    }, { threshold: 0.5 });

    const lastCardObserver = new IntersectionObserver(entries => {
      const lastCard = entries[0];
      if (!lastCard.isIntersecting) return;
      lastCardObserver.unobserve(lastCard.target);
      lastCardObserver.observe(document.querySelector(".card:last-child"));
    }, {});

    lastCardObserver.observe(document.querySelector(".card:last-child"));
    cards.forEach(card => {
      observer.observe(card);
    });
  }, []);

  function addUrl(urlin) {
    const link = document.createElement("a");
    link.href = urlin;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mjig3uf",       // your EmailJS service ID service_mjig3uf
      "template_704dmhp",      // your EmailJS template ID
      e.target,                // form element
      "TuWLoTBD5rPIKrcGa"      // your EmailJS public key
    )
    .then(() => {
      alert("Message Sent Successfully ✅");
      e.target.reset();
    }, () => {
      alert("Ohhhh! Please click on the email button");
    });
  };

  return (
    <div id="contact5">
      <div id="contact2">
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <h2>Contact Me</h2>

            <nav className="card">
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

            <nav className="card">
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

            <nav className="card">
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

            <nav className="card">
              <Stack>
                <Button type="submit" variant="contained" color="info">
                  Send
                </Button>
              </Stack>
            </nav>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Contact;
