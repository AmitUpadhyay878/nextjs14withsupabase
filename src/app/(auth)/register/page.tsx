import React from 'react'
import RegisterForm from './_components/RegisterForm'
import { MyMetadata } from '@/interfaces/MetaData';


export async function generateMetadata(): Promise<MyMetadata> {
  return {
    title: `Register`,
    description: "Register Page",
    url: `/register`,
    authors: [
      { name: 'Amit Upadhyay', url: 'https://github.com/AmitUpadhyay878' },
    ],
    creator: 'Amit Upadhyay',
    publisher: 'Amit Upadhyay',
    referrer: 'origin-when-cross-origin',
    keywords: ['nextjs14', 'supabase', 'Nextjs14'],
    openGraph: {
      title: `Register`,
      description: "Register Page",
      images: [], // You can add image URLs here
    },
    alternates: {
      canonical: `/register`,
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

const RegisterPage = () => {
  return (
  <>
    <div>Register Page</div>
    <RegisterForm />
  </>
  )
}

export default RegisterPage