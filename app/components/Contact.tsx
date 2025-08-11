"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export default function Contact({}: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Sending message..." });

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "codingmessaoud@gmail.com", // Your email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log("Email sent successfully:", response);
      
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly via email.",
      });
    }
  };
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:codingmessaoud@gmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M3.33333 3.33334H16.6667C17.5833 3.33334 18.3333 4.08334 18.3333 5.00001V15C18.3333 15.9167 17.5833 16.6667 16.6667 16.6667H3.33333C2.41666 16.6667 1.66666 15.9167 1.66666 15V5.00001C1.66666 4.08334 2.41666 3.33334 3.33333 3.33334Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 5L9.99999 10.8333L1.66666 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/messaoud-zouggab/",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M13.3333 6.66666C14.6594 6.66666 15.9312 7.19285 16.8689 8.13061C17.8067 9.06838 18.3333 10.3406 18.3333 11.6667V17.5H15V11.6667C15 11.2246 14.8244 10.8007 14.5118 10.4881C14.1993 10.1756 13.7754 9.99999 13.3333 9.99999C12.8913 9.99999 12.4674 10.1756 12.1548 10.4881C11.8423 10.8007 11.6667 11.2246 11.6667 11.6667V17.5H8.33333V11.6667C8.33333 10.3406 8.85952 9.06838 9.79729 8.13061C10.735 7.19285 12.0073 6.66666 13.3333 6.66666V6.66666Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 7.5H1.66667V17.5H5V7.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33333 5C4.25381 5 5 4.25381 5 3.33333C5 2.41286 4.25381 1.66667 3.33333 1.66667C2.41286 1.66667 1.66667 2.41286 1.66667 3.33333C1.66667 4.25381 2.41286 5 3.33333 5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/Messaoudiam",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M7.5 15.8333C7.5 15.8333 6.66667 15.8333 5.83333 14.1667C5 12.5 3.33333 12.5 3.33333 12.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.5 18.1667V15C12.5417 14.3958 12.4097 13.7917 12.1208 13.2583C14.1667 13.0333 16.25 12.2 16.25 8.75C16.2497 7.84515 15.8947 6.97771 15.2667 6.33333C15.5637 5.54621 15.5637 4.67046 15.2667 3.88333C15.2667 3.88333 14.4333 3.65833 12.5 4.91667C10.8761 4.51405 9.1906 4.51405 7.56667 4.91667C5.63333 3.65833 4.8 3.88333 4.8 3.88333C4.50296 4.67046 4.50296 5.54621 4.8 6.33333C4.16533 6.98354 3.80533 7.86084 3.8 8.775C3.8 12.1917 5.875 13.025 7.92083 13.275C7.63751 13.8026 7.50645 14.3987 7.54167 15V18.1667"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/[0.01] to-transparent pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
              Let's Work Together
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed mt-6">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hello, feel free to
              reach out.
            </p>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-foreground/70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/70">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all duration-300"
                  placeholder="What would you like to discuss?"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-foreground/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-foreground/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-accent focus:bg-accent/5 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div className={`p-4 rounded-lg text-sm text-center ${
                  status.type === "success" 
                    ? "bg-accent/10 text-accent border border-accent/20" 
                    : status.type === "error"
                    ? "bg-red-500/10 text-red-500 border border-red-500/20"
                    : "bg-foreground/5 text-foreground/70 border border-foreground/10"
                }`}>
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status.type === "loading"}
                  className="group px-8 py-3 bg-accent text-white rounded-full font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:scale-105 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status.type === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="cursor-pointer">
                      Send Message
                      <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <p className="text-sm text-foreground/60 mb-6">
              Or connect with me directly
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 border border-accent/30 rounded-full transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:shadow-lg hover:shadow-accent/20"
                >
                  <span className="text-foreground/70 group-hover:text-foreground transition-colors">
                    {link.icon}
                  </span>
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
