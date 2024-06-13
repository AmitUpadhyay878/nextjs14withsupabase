import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// const Header = dynamic(() => import('../../components/Header'), { ssr: false })
// const Footer = dynamic(() => import('../../components/Footer'), { ssr: false })

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
