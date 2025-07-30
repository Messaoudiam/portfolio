interface ContactProps {}

export default function Contact({}: ContactProps) {
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
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6">
              Let's Work Together
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"></div>
          </div>

          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hello, feel free to
            reach out.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
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
    </section>
  );
}
