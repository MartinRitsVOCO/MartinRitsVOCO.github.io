import localFont from 'next/font/local'
import "./globals.css";

const fontCourierPrime = localFont({
  src: [
    {
      path: '../public/fonts/CourierPrime-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/CourierPrime-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/CourierPrime-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/CourierPrime-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    }
  ],
  variable: '--font-courier-prime'
})

export const metadata = {
  title: "Martin Ritsberg",
  description: "Portfolio website for Martin Ritsberg, a software developer.",
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontCourierPrime.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
