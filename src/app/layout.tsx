import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Воображай — персонализированные книги по вашим историям | Лучший подарок для детей, пары и семьи",
  description: "Воображай создает уникальные книги, где главным героем становитесь вы, ваш ребёнок, пара или семья. Авторский текст, акварельные иллюстрации и типографское качество. Идеальный подарок с доставкой по России за 7–10 дней.",
  keywords: [
    "персонализированные книги",
    "книга в подарок", 
    "уникальный подарок",
    "книга про ребёнка",
    "книга про семью",
    "книга про любовь",
    "подарок на день рождения ребёнку",
    "подарок на годовщину",
    "книга с иллюстрациями по фото"
  ],
  authors: [{ name: "Воображай" }],
  creator: "Воображай",
  publisher: "Воображай",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://voobrazhai.ru",
    title: "Воображай — персонализированные книги по вашим историям",
    description: "Уникальные книги, где главным героем становитесь вы, ваш ребёнок, пара или семья. Авторский текст, акварельные иллюстрации и типографское качество.",
    siteName: "Воображай",
    images: [
      {
        url: "/gallery/family-box.jpg",
        width: 1200,
        height: 630,
        alt: "Персонализированная книга Воображай в подарочной упаковке",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Воображай — персонализированные книги по вашим историям",
    description: "Уникальные книги, где главным героем становитесь вы, ваш ребёнок, пара или семья.",
    images: ["/gallery/family-box.jpg"],
  },
  icons: {
    icon: "/gallery/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Персонализированная книга Воображай",
    "image": "https://voobrazhai.ru/gallery/family-box.jpg",
    "description": "Книга, где главным героем становитесь вы, ваш ребёнок, пара или семья. Уникальные иллюстрации и тексты.",
    "brand": {
      "@type": "Brand",
      "name": "Воображай"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Мини",
        "priceCurrency": "RUB",
        "price": "5900",
        "availability": "https://schema.org/InStock",
        "url": "https://voobrazhai.ru/order"
      },
      {
        "@type": "Offer", 
        "name": "Макси",
        "priceCurrency": "RUB",
        "price": "9900",
        "availability": "https://schema.org/InStock",
        "url": "https://voobrazhai.ru/order"
      },
      {
        "@type": "Offer",
        "name": "Премиум", 
        "priceCurrency": "RUB",
        "price": "16900",
        "availability": "https://schema.org/InStock",
        "url": "https://voobrazhai.ru/order"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850"
    }
  };

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
