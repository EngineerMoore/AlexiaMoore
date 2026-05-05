import { useState } from "react";
import emailjs from "@emailjs/browser";
import linkedInLogo from "../assets/linkedin.svg";
import gitHubLogo from "../assets/github.svg";
import xLogo from "../assets/x.svg";
import "../styles/Contact.css";

const Contact: React.FC = () => {
  const [error, setError] = useState<string>("");
  const socialLinks = [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/alexia-moore-/",
      image: linkedInLogo,
    },
    {
      label: "GitHub",
      link: "https://github.com/EngineerMoore",
      image: gitHubLogo,
    },
    { label: "X", link: "https://x.com/EngineerMooreA", image: xLogo },
  ];
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    try {
      const email = formData.get("email");
      const encodedEmail = encodeURIComponent(email as string);
      const emailValidRes = await fetch(
        `https://rapid-email-verifier.fly.dev/api/validate?email=${encodedEmail}`,
      ).then((res) => res.json());
      const status = emailValidRes.status;
      const isValidEmail =
        status === "VALID" || status === "PROBABLY_VALID" ? true : false;
      if (!isValidEmail) {
        const error = "Invalid email provided";
        throw Error(error);
      }
      await emailjs.sendForm(
        import.meta.env.VITE_PUBLIC_SERVICE_ID,
        import.meta.env.VITE_PUBLIC_TEMPLATE_ID,
        "#contact-form",
        import.meta.env.VITE_PUBLIC_PUBLIC_ID,
      );
    } catch (error) {
      setError(error as string);
      console.error(error);
    }
  };
  return (
    <section className="contact " id="contact">
      <div className="contact-header emphasis-sleek">
        <h2>Get In Touch</h2>
        <p>alexiashalise@gmail.com</p>
      </div>
      <div className="social-links">
        {socialLinks.map((link) => (
          <div className="social-link">
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <img src={link.image} width={40} alt={link.label + " logo"} />
            </a>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </div>
        ))}
      </div>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="first-name">
            First Name
            <input id="first-name" type="text" name="first" required />
          </label>
          <label htmlFor="last-name">
            Last Name <input id="last-name" type="text" name="last" required />
          </label>
        </fieldset>
        <fieldset>
          {error && <p>{error}</p>}
          <label htmlFor="phone-number">
            Phone
            <input id="phone-number" type="tel" name="phone" />
          </label>
          <label htmlFor="email">
            Email
            <input id="email" type="email" name="email" required />
          </label>
        </fieldset>
        <label htmlFor="subject">
          Subject
          <input
            id="subject"
            type="text"
            name="subject"
            maxLength={60}
            required
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            id="message"
            rows={4}
            name="message"
            maxLength={1000}
            placeholder="Let's chat! Enter your message here..."
            required
          ></textarea>
        </label>
        <button type="submit">Let's connect!</button>
      </form>
    </section>
  );
};
export default Contact;
