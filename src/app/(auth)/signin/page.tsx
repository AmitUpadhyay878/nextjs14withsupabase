import React from 'react'
import SigninForm from './_components/SinginForm'
import { MyMetadata } from '@/interfaces/MetaData';
import Link from 'next/link';


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


const Singin = async() => {

  return (
    <>
    <SigninForm />

      {/* Server side form Start*/}
      {/* <section className='gradient-form md:h-screen flex items-center justify-center mx-auto'>
    <div className='container py-6 px-6 h-full'>
      <div className=' flex justify-center items-center flex-wrap h-full g-6 text-gray-800'>
        <div className=''>
          <div className='block bg-white shadow-lg rounded-lg'>
            <div className='lg:flex lg:flex-wrap g-0'>
              <div className='px-4 md:px-0'>
                <div className='md:p-12 md:mx-6'>
                  <div className='text-center'>
                    <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                      NextJs14.2 with Supabase
                   
                    </h4>
                  </div>
                  <form action='/api/auth/signin' method='post'>
                    <p className='mb-4'>
                      Please Sign in if you already have an account
                    </p>
                    <hr/>
                    <br/>
                    <div className='mb-4'>
                      <input
                        type='email'
                        className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                        placeholder='Enter email'
                       name="email"
                      />
                   
                    </div>
                    <div className='mb-4'>
                      <input
                        type='password'
                        className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                        placeholder='Enter password'
                       name="password"
                      />
                     
                    </div>
                    <div className='text-center pt-1 mb-5 mt-8 pb-1'>
                      <button
                        className='bg-green inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:text-purple-50 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                      >
                        Sign In
                      </button>
                     
                    </div>
                    <div className='flex items-center justify-between pb-6'>
                      <p className='mb-0 mr-2'>Doesn't have an account?</p>
                      <Link
                       href='/register'
                        className='inline-block px-6 py-2 border-2 border-green-600 text-green-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                      >
                       Register
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
      {/* Server side form End*/}
    </>
  )
}

export default Singin