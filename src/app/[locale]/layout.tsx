import { NextIntlClientProvider } from 'next-intl';
import "./globals.css";
import { getMessages } from 'next-intl/server';
import LayoutElement from './Home/layoutElement';


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
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
            <LayoutElement children={children}/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
