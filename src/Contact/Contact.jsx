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
      "service_mjig3uf",      
      "template_704dmhp",    
      e.target,              
      "TuWLoTBD5rPIKrcGa"   
    )
    .then(() => {
      alert("Message Sent Successfully ✅. We will get back to you very soon");
      e.target.reset();
    }, () => {
      alert("Ohhhh! Please connect to internet");
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
                  style={{width: "100%"}}
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
            <Stack style={{marginTop: "20px"}}>
              <Button variant="contained" color="primary" onClick={() => {
                let a = document.createElement("a");
                a.href = "https://wa.me/9076956531";
                a.target = "_blank";
                document.querySelector("body").appendChild(a);
                document.querySelector("body").removeChild(a)
                a.click();
              }}>
                Chat on Whatsapp
            </Button>
            </Stack>
            
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Contact;
