export default function StructuredData({ locale }: { locale: string }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Messaoud ZOUGGAB",
    jobTitle: locale === 'fr' ? "Développeur Fullstack" : "Fullstack Developer",
    description: locale === 'fr'
      ? "Développeur fullstack passionné spécialisé en React, Angular, NestJS et technologies web modernes."
      : "Passionate fullstack developer specializing in React, Angular, NestJS, and modern web technologies.",
    url: "https://codingmessaoud.com",
    email: "codingmessaoud@gmail.com",
    image: "https://codingmessaoud.com/og-image.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressCountry: "FR"
    },
    sameAs: [
      "https://www.linkedin.com/in/messaoud-zouggab/",
      "https://www.malt.fr/profile/messaoudzouggab",
      "https://github.com/Messaoudiam"
    ],
    knowsAbout: [
      "TypeScript",
      "React",
      "Angular",
      "NestJS",
      "Node.js",
      "Docker",
      "DevOps",
      "Fullstack Development",
      "Web Development"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Clic-ERP"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Messaoud ZOUGGAB Portfolio",
    url: "https://codingmessaoud.com",
    description: locale === 'fr'
      ? "Portfolio professionnel de Messaoud ZOUGGAB, développeur fullstack spécialisé en React, Angular et NestJS."
      : "Professional portfolio of Messaoud ZOUGGAB, fullstack developer specializing in React, Angular and NestJS.",
    inLanguage: [locale === 'fr' ? "fr-FR" : "en-US"],
    author: {
      "@type": "Person",
      name: "Messaoud ZOUGGAB"
    }
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Messaoud ZOUGGAB"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  );
}
