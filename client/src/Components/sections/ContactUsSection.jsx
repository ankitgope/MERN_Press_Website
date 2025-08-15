import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const service_id = "service_1l5563k";
const template_id = "template_apohk9j";
const public_key = "Jee5ix3ninADjVmj3";

const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef(null);

  const sendEmail = (data) => {
    if (!data.from_email || !data.from_name || !data.subject || !data.message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    if (!form.current) return;

    emailjs.sendForm(service_id, template_id, form.current, public_key).then(
      () => {
        alert("Message sent successfully!");
        reset();
      },
      (error) => {
        alert("Failed to send message, please try again later.");
        console.error("Email sending error:", error);
      }
    );
  };

  return (
    <div
      id="contact"
      className="px-4 py-10 flex flex-col items-center text-center bg-white"
    >
      <h2 className="text-[#0d111c] text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">
        Contact Us
      </h2>

      <form
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        className="w-full max-w-[480px] flex flex-col items-center gap-4"
      >
        {/* Name Input */}
        <label className="w-full">
          <input
            {...register("from_name", { required: "Name is required" })}
            placeholder="Your Name"
            className="w-full rounded-xl text-[#0d111c] bg-[#e7eaf4] h-14 placeholder:text-[#495e9c] p-4 text-base leading-normal focus:outline-none"
          />
          {errors.from_name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.from_name.message}
            </p>
          )}
        </label>

        {/* Email Input */}
        <label className="w-full">
          <input
            {...register("from_email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
            placeholder="Your Email"
            className="w-full rounded-xl text-[#0d111c] bg-[#e7eaf4] h-14 placeholder:text-[#495e9c] p-4 text-base leading-normal focus:outline-none"
          />
          {errors.from_email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.from_email.message}
            </p>
          )}
        </label>

        {/* Subject Input */}
        <label className="w-full">
          <input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Your Subject"
            className="w-full rounded-xl text-[#0d111c] bg-[#e7eaf4] h-14 placeholder:text-[#495e9c] p-4 text-base leading-normal focus:outline-none"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </label>

        {/* Message Textarea */}
        <label className="w-full">
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your Message"
            className="w-full min-h-36 rounded-xl text-[#0d111c] bg-[#e7eaf4] placeholder:text-[#495e9c] p-4 text-base leading-normal focus:outline-none"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="h-12 px-6 rounded-full bg-[#0831aa] hover:bg-indigo-600 text-white text-sm font-bold tracking-wide"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsSection;
