import "./Contact.css";
import { Stack, TextField, Button } from "@mui/material";
import emailjs from "emailjs-com";

function Contact() { 

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
    <div id="contact2">
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          
          <nav>
            <Stack>
              <TextField 
                name="name"               // ✅ must match {{name}} in template
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
                name="email"              // ✅ must match {{email}} in template
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
                name="project"            // ✅ must match {{project}} in template
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
  )
}

export default Contact;
