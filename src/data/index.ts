import { Metadata } from "next";

export const DATA = {
  phone: "+39 352-012-9432",
  phoneHref: "tel:+393520129432",
  email: "info@diaraclean.com",
  emailHref: "mailto:info@diaraclean.com",
  whatsApp: "https://wa.me/393520129432",
  location: "Olbia & Costa Smeralda",
};

export const myMetadata: Metadata = {
  title: "Diara Clean – Impresa di Pulizie a Olbia e Costa Smeralda",
  description:
    "Servizi di pulizie professionali a Olbia, Porto Rotondo, Golfo Aranci, San Teodoro e tutta la Costa Smeralda. Diara Clean offre pulizie per case vacanze, appartamenti, uffici e affitti brevi. Massima igiene, puntualità e discrezione.",
  keywords: [
    // Italian keywords
    "pulizie Olbia",
    "impresa di pulizie",
    "servizi di pulizia professionale",
    "pulizia case vacanze",
    "pulizie Costa Smeralda",
    "pulizie Porto Rotondo",
    "pulizie Golfo Aranci",
    "pulizie San Teodoro",
    "Diara Clean",
    "pulizia appartamenti Olbia",
    "impresa pulizie Sardegna",
    "pulizie affitti brevi",
    "servizi di pulizia per uffici",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Diara Clean – Impresa di Pulizie a Olbia",
    description:
      "Scopri Diara Clean, l’impresa di pulizie di fiducia a Olbia e Costa Smeralda. Offriamo pulizie per case vacanze, uffici e appartamenti con standard elevati di igiene.",
    url: "https://diaraclean.com",
    siteName: "Diara Clean",
    locale: "it_IT",
    // images: [
    //   {
    //     url: "https://diaraclean.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Diara Clean - Servizi di Pulizia a Olbia",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diara Clean – Pulizie Professionali a Olbia",
    description:
      "Pulizie per appartamenti, uffici e case vacanze a Olbia e Costa Smeralda. Contatta Diara Clean per un servizio impeccabile.",
    // images: ["https://diaraclean.com/og-image.jpg"], // Same image or tailored for Twitter
  },
  // Uncomment and update if multilingual support is added
  // alternates: {
  //   canonical: "https://diaraclean.com",
  //   languages: {
  //     "it-IT": "https://diaraclean.com/it",
  //     "en-US": "https://diaraclean.com/en",
  //   },
  // },
};
