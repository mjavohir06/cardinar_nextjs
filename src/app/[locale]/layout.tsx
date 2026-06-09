import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";
import { getMessages } from 'next-intl/server';
import LayoutElement from './Home/layoutElement';
import Header from '@/components/Main/Header/Header';
import Footer from '@/components/Main/Footer/Footer';


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params

  const messages = await getMessages()


  return (
    <html lang={locale}>
      <head>
        <title>Cardinar</title>
        <meta name="description" content="Aftomobil" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-full flex flex-col relative">
        <NextIntlClientProvider messages={messages}>
          <LayoutElement>
            <div>
              <Header />
            </div>
            {children}

            <Footer />
          </LayoutElement>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
