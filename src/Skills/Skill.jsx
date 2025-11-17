import Footer from "../Footer/Footer";
import "./Skill.css";
function Skill(){
    return(
        <div>
            <div id="skill">
                <h2>Skills</h2>
                <section>
                    <nav>
                        <i className="devicon-nextjs-original-wordmark"></i>
                        <h4>Next.js</h4>
                    </nav>

                    <nav>
                        <i className="devicon-typescript-plain"></i>
                        <h4>TYPESCRIPT</h4>
                    </nav>

                    <nav>
                        <i className="devicon-react-original colored"></i>
                        <h4>REACT.js</h4>
                    </nav>

                    <nav>
                        <i className="devicon-reactnative-original"></i>
                        <h4>REACT NATIVE</h4>
                    </nav>
                    <nav>
                        <i className="devicon-expo-original"></i>
                        <h4>EXPO</h4>
                    </nav>
                    <nav>
                        {/* <i className="devicon-vuejs-plain"></i> */}
                        <h4>ANGULAR</h4>
                    </nav>
                    <nav>
                        <i className="devicon-vuejs-plain"></i>
                        <h4>VUE.js</h4>
                    </nav>
                    <nav>
                        <i className="devicon-redux-original"></i>
                        <h4>REDUX</h4>
                    </nav>

                    <nav>
                        <i className="devicon-tailwindcss-original"></i>
                        <h4>TAILWIND CSS</h4>
                    </nav>
                    <nav>
                        
                        <i className="devicon-javascript-plain"></i>
          
                        <h4>JAVASCRIPT</h4>
                    </nav>

                    <nav>
                        <i className="devicon-firebase-plain"></i>
                        <h4>Firebase</h4>
                    </nav>
                    <nav>
                        <i className="devicon-supabase-plain"></i>
                        <h4>Supabase</h4>
                    </nav>
                    <nav>
                        <i className="devicon-git-plain"></i>
                        <h4>GIT</h4>
                    </nav>
                    <nav>
                        <i className="devicon-github-original"></i>
                        <h4>GITHUB</h4>
                    </nav>
                    <nav>
                        <i className="devicon-json-plain"></i>
                        <h4>JSON</h4>
                    </nav>
                    
                    <nav>
                        <i className="devicon-bootstrap-plain"></i>
                        <h4>BOOSTRAP</h4>
                    </nav>
                    <nav>
                        <i className="devicon-html5-plain"></i>
                        <h4>HTML5</h4>
                    </nav>
                    <nav>
                        <i className="devicon-css3-plain"></i>
                        <h4>CSS3</h4>
                    </nav>
                    <nav>
                        <i className="devicon-materialui-plain"></i>
                        <h4>Material UI</h4>
                    </nav>
                    <nav style={{backgroundColor: "transparent"}}>
                        <h1>TOOLS & PLATFORMS</h1>
                    </nav>
                    
                    <nav>
                        <i className="devicon-figma-plain"></i>
                        <h4>FIGMA</h4>
                    </nav>
                    <nav>
                        <i className="devicon-vscode-plain colored"></i>
                        <h4>VS CODE</h4>
                    </nav>
                    <nav>
                        <i className="devicon-postman-plain"></i>
                        <h4>POSTMAN</h4>
                    </nav>
                    <nav>
                        <i className="devicon-vercel-original"></i>
                        <h4>VERCEL</h4>
                    </nav>
                    <nav>
                        <i className="devicon-netlify-plain"></i>
                        <h4>NETLIFY</h4>
                    </nav>
                </section>
            </div>
            <Footer/>
        </div>
    )
}
export default Skill;