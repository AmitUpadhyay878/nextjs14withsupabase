
// import { Inter } from "next/font/google";
import { MyMetadata } from "@/interfaces/MetaData";
import "./globals.scss";


// const inter = Inter({ subsets: ["latin"] });



export async function generateMetadata(): Promise<MyMetadata> {
  return {
    title: `Nextjs14 with Supabase June 2024`,
    description: "MyApp",
    url: `/`,
    authors: [
      { name: 'Amit Upadhyay', url: 'https://github.com/AmitUpadhyay878' },
    ],
    creator: 'Amit Upadhyay',
    publisher: 'Amit Upadhyay',
    referrer: 'origin-when-cross-origin',
    keywords: ['nextjs14', 'supabase', 'Nextjs14'],
    openGraph: {
      title: `Nextjs14 with Supabase June 2024`,
      description: "My App",
      images: [], // You can add image URLs here
    },
    alternates: {
      canonical: `/`,
      languages: {
        'en-US': '/en-US',
      },
    },
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (children);
}
