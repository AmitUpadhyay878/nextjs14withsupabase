
import { MyMetadata } from "@/interfaces/MetaData";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
