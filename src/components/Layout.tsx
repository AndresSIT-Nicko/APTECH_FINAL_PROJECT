import { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from '../Pictures/Nickzz Logo.png';
function Layout() {
    type FormData = {
    name: string;
    email: string;
    message: string;
};

const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
});

const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
};

const validate = () => {
    if (!formData.name || !formData.email || !formData.message) {
        return "Please fill in all fields.";
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(formData.email)) {
        return "Invalid email format.";
    }

    return "";
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();

    if (error) {
        setStatus(error);
        return;
    }

    setLoading(true);
    setStatus("");

    try {
        await emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            },
            import.meta.env.VITE_EMAIL_PUBLIC_KEY
        );

        setStatus("Message sent successfully!");

        setFormData({
            name: "",
            email: "",
            message: "",
        });

    } catch (error) {
        console.error(error);
        setStatus("Failed to send message.");
    }

    setLoading(false);
};

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

    <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
        />

        <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
        />

        <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
        </button>

        <p>{status}</p>
    </form>
</section>

        </div>
    );
}

export default Layout;