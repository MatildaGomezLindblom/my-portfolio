//Inspired by https://donsmog.hashnode.dev/how-to-use-emailjs-for-a-contact-us-page
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ButtonPrimary from "../ButtonPrimary";
import "../../styles/Contact.scss";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, dirtyFields } = formState;

  const isFormDirty =
    Object.keys(dirtyFields).length > 0 || Object.keys(errors).length > 0;

  const onSubmit = (data) => {
    setLoading(true);

    const templateParams = { ...data };

    emailjs
      .send(
        "service_7gsn6xo",
        "template_cwx8gog",
        templateParams,
        "V2uXvrjRLNlSSPVuo"
      )
      .then(
        () => {
          reset();
          setLoading(false);
          alert("Ditt meddelande är skickat!");
        },
        (error) => {
          console.error("Något gick fel:", error);
          setLoading(false);
          alert("Något gick fel. Försök igen senare.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div class="custom-shape-divider-top-1701897315">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="contact-me-section">
        <h2 className="form-section-title">Säg hej!</h2>
        <p>
          Kontakta mig här eller mejla{" "}
          <a style={{}} href="mailto:matildagoli@outlook.com">
            matildagoli@outlook.com
          </a>
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label htmlFor="firstName">Namn</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder=" "
              />
              {errors.firstName && <span>Detta fält är obligatoriskt</span>}
            </div>
          </div>
          <div>
            <label htmlFor="email">Mejladress</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder=" "
            />
            {errors.email && <span>Detta fält är obligatoriskt</span>}
          </div>
          <div>
            <label htmlFor="message">Meddelande</label>
            <textarea
              {...register("message", { required: true })}
              placeholder=" "
            />
            {errors.message && <span>Detta fält är obligatoriskt</span>}
          </div>

          <div className="contact-button-container">
            <a href="https://github.com/MatildaGomezLindblom"><FaGithub className="github-icon"/></a>
            <ButtonPrimary
              className="send-button"
              disabled={!isFormDirty || loading}
              type="submit"
            >
              {loading ? "Skickar..." : "Skicka"}
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
