import logo from '../Pictures/Nickzz Logo.png';
function Layout() {

    return (
        <div className="container">
            <header className="header">
                <div className="Logo">
                    <img src={logo} alt="Nickzz Logo.png" />
                </div>
                <h1>My Portfolio</h1>
            </header>
<hr></hr>
            <section className="about-contacts">
                <div className="about">
                    <h2>About Me</h2>
                    <p>
                        Hi, I am Nicko Andres. I live in Sal-angan, Ampucao, Itogon.
                        I am 19  years old and currently studying at University of Baguio, 
                        taking up Bachelor of Science in Information Technology(BSIT).
                    </p>
                </div>

                <div className="contacts">
                    <h2>My Social</h2>
                    <p><strong>Facebook:</strong> Nicko Andres</p>
                    <p><strong>Instagram:</strong> nickzzz706</p>
                    <p><strong>Email:</strong> nickoandres6652@gmail.com</p>
                </div>
            </section>
<hr></hr>
            <section className="projects-section">
                <h2>My Projects</h2>

                <div className="projects">
                    <div className="project-box">
                        <h3>Project 1</h3>
                        <p>About my Project</p>
                    </div>

                    <div className="project-box">
                        <h3>Project 2</h3>
                        <p>About my Project</p>
                    </div>

                    <div className="project-box">
                        <h3>Project 3</h3>
                        <p>About my Project</p>
                    </div>
                </div>
            </section> 
<br></br>
<hr></hr>
            <section className="contact-me">
                <h2>Contact Me</h2>

                <form>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Contact" />
                    <textarea placeholder="Message"></textarea>

                    <button type="submit">Submit</button>
                </form>
            </section>

        </div>
    );
}

export default Layout;