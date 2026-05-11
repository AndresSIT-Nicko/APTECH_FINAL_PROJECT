import { useState } from "react";
import emailjs from "@emailjs/browser";

function Layout() {

    type FormData = {
        name: string;
        email: string;
        message: string;
    };

    const [activeSection, setActiveSection] = useState("portfolio");

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

        <div>
            <header>

                <h1 onClick={() => setActiveSection("portfolio")}>
                    Home Page
                </h1>

            </header>

           
            <nav>

                <button onClick={() => setActiveSection("register")}>
                    Create Account
                </button>

                <button onClick={() => setActiveSection("contact")}>
                    Contact Me
                </button>

            </nav>
            <hr />

            {activeSection === "contact" && (

                <section>

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

            )}
        </div>
    );
}

export default Layout;