import "./Products.css";
import Portfolio from "./img/Macbook-Air-localhost.png";
import jennie from "./img/image-thomas.jpg";
import emily from "./img/image-emily.jpg";
import thomas from "./img/IMG-20250710-WA0058.jpg";
import Nutrition from "./img/Screenshot 2025-08-28 095318.png";
import Movie from "./img/Screenshot 2025-08-26 135936.png";
import Eccomerce from "./img/Screenshot 2025-08-26 140836.png";
import Car from "./img/Screenshot 2025-08-26 141251.png";
import Recipe from "./img/Screenshot 2025-08-26 141603.png";
import Alquran from "./img/Screenshot 2025-08-26 141924.png";
import Skin from "./img/Screenshot 2025-08-26 142246.png";
import Url from "./img/Screenshot 2025-08-26 142503.png";
import Weather from "./img/Screenshot 2025-08-27 023114.png";
import Lms from "./img/Screenshot 2025-08-27 024007.png";
import Blog from "./img/Screenshot 2025-08-27 024215.png";
import Job from "./img/Screenshot 2025-08-27 061615.png";
function Project(){
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
        <div id="allProject">
            <h2>PROJECTS</h2>
            <article id="projects">
                <div id="portfolio">
                    <img src={Portfolio} alt="" />
                    <nav class="check">
                        <h4>My Portfolio</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT and JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-portfolio-steel.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div id="ai">
                    <img src={Nutrition} alt="" />
                    <nav class="check">
                        <h4>AI NUTRITIONIST</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: HTML, OpenAI API, JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results. </p>
                        <button onClick={() => addUrl("https://nutritionapp-ze9g.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
            
                <div id="product">
                    <img src={Movie} alt="" />
                    <nav class="check">
                        <h4>Movie Website</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, API AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100+ users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-movie.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div>
                    <img src={Job} alt="" />
                    <nav class="check">
                        <h4>Job-Board</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, API AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://mmm-job-board.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div>
                    <img src={Eccomerce} alt="" />
                    <nav class="check">
                        <h4>E-CCOMERCE</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT, JSON AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://too-soft-1xtd.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div>
                    <img src={Car} alt="" />
                    <nav class="check">
                        <h4>Car Dealer</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-car.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div>
                    <img src={Recipe} alt="" />
                    <nav class="check">
                        <h4>Recipe</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND API</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-recipe.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
                <div>
                    <img src={Alquran} alt="" />
                    <nav class="check">
                        <h4>Al-Quran Audio</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND API</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-phi.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>

                <div>
                    <img src={Skin} alt="" />
                    <nav class="check">
                        <h4>Skin Care</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND API</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://skin-care-opal.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>

                <div>
                    <img src={Url} alt="" />
                    <nav class="check">
                        <h4>URL Shorten</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-url-shorten.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>

                <div>
                    <img src={Weather} alt="" />
                    <nav class="check">
                        <h4>Weather App</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND API</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://weather-app-two-khaki-77.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>

                <div>
                    <img src={Lms} alt="" />
                    <nav class="check">
                        <h4>LMS Dashboard</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND API</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://geegstack.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>

                <div>
                <img src={Blog} alt="" />
                    <nav class="check">
                        <h4>My Blog</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND API</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://abdulmalik-blog.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>

                {/* <div>
                    <nav class="check">
                        <h4>Skin Care</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: REACT AND API</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://skin-care-opal.vercel.app/")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div> */}
                
                <div id="web3">
                    <nav class="check">
                        <h4>Web3 Landing Page</h4>
                        <p>Role: Frontend Developer</p>
                        <p>Tech: CSS, REACT AND JAVASCRIPT</p>
                        <p>Challenge: Deliver real-time suggestions via API</p>
                        <p>Result: Over 100 test users used it with positive results.</p>  
                        <button onClick={() => addUrl("https://xend-finance-seven.vercel.app")}>View Project <i class="fa-solid fa-eye-slash"></i></button>
                    </nav>
                </div>
            </article>

            <summary>
                <nav id="card">
                    <img src={thomas} alt=""/>
                    <p class="text"><q>Abdulmalik was a key part of our frontend team. He contributed reusable components, improved performance, and helped debug tricky layout issues. He’s a problem solver who brings great energy to every sprint</q></p>
                    <li class="text">Haaj Eth</li>
                    <p style={{fontSize: "12px"}} class="text">Web3 Director</p>
                </nav>
                <nav id="card">
                    <img src={jennie} alt=""/>
                    <p class="text"><q>He’s fast, reliable, and knows what he’s doing. Abdulmalik built a e ccomerce for our team in just a few days, and everything worked perfectly. Great communication and strong frontend skills.</q></p>
                    <li class="text">Ayobami</li>
                    <p style={{fontSize: "12px"}} class="text">2Soft E-CCOMERCE</p>
                </nav>
                <nav id="card">
                    <img src={emily} alt=""/>
                    <p class="text"><q>Abdulmalik exceeded our expectations. He took our Figma design and turned it into a pixel-perfect, mobile-responsive React app. His attention to detail, clean code structure, and smooth integration of APIs made the process effortless.</q></p>
                    <li class="text">Joe Kith</li>
                    <p style={{fontSize: "12px"}} class="text">Marketing Director</p>
                </nav>
            </summary>
        </div>
    )
}
export default Project;