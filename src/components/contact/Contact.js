//Inspired by https://donsmog.hashnode.dev/how-to-use-emailjs-for-a-contact-us-page 
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ButtonPrimary from "../ButtonPrimary";

function Contact() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, dirtyFields } = formState;

  
  const isFormDirty =
    Object.keys(dirtyFields).length > 0 ||
    Object.keys(errors).length > 0; 

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
    <div>
      <h2>Säg hej!</h2>
      <p>Kontakta mig här eller mejla <a style={{}} href="mailto:matildagoli@outlook.com">matildagoli@outlook.com</a></p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="firstName">Namn</label>
            <input
              type="text"
              {...register("firstName", { required: true })}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <span>Detta fält är obligatoriskt</span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email">Mejladress</label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <span>Detta fält är obligatoriskt</span>
          )}
        </div>
        <div>
          <label htmlFor="message">Meddelande</label>
          <textarea
            {...register("message", { required: true })}
            placeholder="Leave us a message..."
          />
          {errors.message && (
            <span>Detta fält är obligatoriskt</span>
          )}
        </div>

        <ButtonPrimary disabled={!isFormDirty  || loading} type="submit">
          {loading ? "Skickar..." : "Skicka"}
        </ButtonPrimary>
      </form>
    </div>
  );
}

export default Contact;
