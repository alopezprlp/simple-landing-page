import { TailwindIndicator } from "@/components/tailwind-indicator";
import "../globals.css";
import { Inter } from "next/font/google";
import { cn } from "../../utils/classes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { createTranslator, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../dictionary/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ["en", "es"].map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  const t = createTranslator({ locale, messages });

  return {
    title: t("LocaleLayout.title"),
    description: "This is an example of a simple landing page",
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased", inter.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <TailwindIndicator />
            <Header />
            {children}
            {/* comment this section to hide the footer */}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
