
export interface MyMetadata {
    title: string;
    description: string;
    url: string;
    authors: { name: string; url: string }[];
    creator: string;
    publisher: string;
    referrer: string;
    keywords: string[];
    openGraph: {
      title: string;
      description: string;
      images: string[]; // Assuming image URLs are strings for now
    };
    alternates: {
      canonical: string;
      languages: { [key: string]: string };
    };
    robots: {
      index: boolean;
      follow: boolean;
      nocache: boolean;
      googleBot: {
        index: boolean;
        follow: boolean;
        noimageindex: boolean;
        'max-video-preview': number;
        'max-image-preview': string;
        'max-snippet': number;
      };
    };
  }