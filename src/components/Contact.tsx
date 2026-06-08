import { profile } from "../data/profile";
import { useContactForm } from "../hooks/useContactForm";
import Section from "./Section";
import "./styles/Contact.css";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const { formData, errors, status, formId, updateField, handleSubmit } =
    useContactForm();

  return (
    <Section id="contact" ariaLabelledBy="contact-heading">
      <h2 id="contact-heading" className="section__title">
        Contact
      </h2>
      <p className="section__lead">
        Open to internships, collaborations, and full-time opportunities. Reach out directly
        or send a message below.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-info__block">
            <h3>Connect</h3>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn — saksham-joshi-338568349 <MdArrowOutward aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`}>
              {profile.email} <MdArrowOutward aria-hidden="true" />
            </a>
          </div>

          <div className="contact-info__block">
            <h3>Social</h3>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub <MdArrowOutward aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn aria-hidden="true" /> LinkedIn <MdArrowOutward aria-hidden="true" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {!formId && (
            <p className="status-text status-text--error" role="alert">
              Contact form is not configured. Set VITE_FORMSPREE_FORM_ID in your environment.
            </p>
          )}

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => updateField("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <span id="name-error" className="form-error" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="form-error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={(e) => updateField("message", e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <span id="message-error" className="form-error" role="alert">
                {errors.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn btn--primary"
            disabled={status === "loading" || !formId}
          >
            {status === "loading" ? "Sending…" : "Send Message"}
          </button>

          {status === "success" && (
            <p className="status-text status-text--success" role="status">
              Message sent successfully. I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="status-text status-text--error" role="alert">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>

      <footer className="site-footer">
        <p>
          Designed and developed by <span>{profile.name}</span>
        </p>
        <p>
          <MdCopyright aria-hidden="true" /> 2026
        </p>
      </footer>
    </Section>
  );
};

export default Contact;
