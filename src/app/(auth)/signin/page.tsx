import React from 'react'
import SigninForm from './_components/SinginForm'
import { MyMetadata } from '@/interfaces/MetaData';


export async function generateMetadata(): Promise<MyMetadata> {
  return {
    title: `SignIn`,
    description: "Signin Page",
    url: `/signin`,
    authors: [
      { name: 'Amit Upadhyay', url: 'https://github.com/AmitUpadhyay878' },
    ],
    creator: 'Amit Upadhyay',
    publisher: 'Amit Upadhyay',
    referrer: 'origin-when-cross-origin',
    keywords: ['nextjs14', 'supabase', 'Nextjs14'],
    openGraph: {
      title: `SignIn`,
      description: "Signin Page",
      images: [], // You can add image URLs here
    },
    alternates: {
      canonical: `/signin`,
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


const Singin = () => {
  return (
    <>
    <div>Singin</div>
    <SigninForm />
    </>
  )
}

export default Singin