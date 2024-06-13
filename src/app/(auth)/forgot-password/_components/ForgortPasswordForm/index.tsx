'use client'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ForgotPasswordForm =() => {

  const [showPass ,setShowPass] = useState<boolean>(false)
  const [showConfPass ,setConfShowPass] = useState<boolean>(false)

  const {register, handleSubmit, formState:{errors},setError,watch} = useForm()
  const router = useRouter()

  const handleFormData =async(event:any)=>{

    try{
        let { data:dataUser, error } = await supabase.auth.signInWithPassword({
          email: event?.email,
          password: event?.password
        })
        if(dataUser){
          router.refresh()
        }
        if(error) {
          console.log(error)
        }
      }
    catch(error){
        console.log(error)
    }
  }
 
   
  return (
    <section className='gradient-form md:h-screen flex items-center justify-center mx-auto'>
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
                  <form onSubmit={handleSubmit(handleFormData)}>
                    <p className='mb-4'>
                      Please Reset Password of your account
                    </p>
                    <hr/>
                    <br/>
                    <div className='mb-4 '>
                      <input
                        type={`${!showPass? "password" : "text"}`}
                        className={`form-control ${errors.password && "border-red-600"} block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                        placeholder='Enter password'
                        {...register('password',{
                          required: 'Password is required',
                          minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters long',
                          },
                          maxLength: {
                            value: 12,
                            message: 'Password must be no more than 12 characters long',
                          },
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
                            message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                          },
                        })}
                      />
                      <span onClick={()=>setShowPass((prev)=>!prev)}>show</span>
                      {errors.password && (
                                                    <p className="text-red-600">
                                                        {typeof errors.password
                                                            .message ===
                                                        'string'
                                                            ? errors.password
                                                                  .message
                                                            : 'An error occurred'}
                                                    </p>
                                                )}
                    </div>
                    <div className='mb-4'>
                      <input
                        type={`${!showConfPass ? 'password' :'text'}`} 
                        className={`form-control ${errors.password && "border-red-600"} block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                        placeholder='Enter confirm password'
                        {...register('confirmpassword',{
                          required: 'Confirm Password is required',
                          validate: (value) =>
                            value === watch('password') || 'Passwords do not match',
                        })}
                      />
                       <span onClick={()=>setConfShowPass((prev)=>!prev)}>show</span>
                      {errors.confirmpassword && (
                                                    <p className="text-red-600">
                                                        {typeof errors.confirmpassword
                                                            .message ===
                                                        'string'
                                                            ? errors.confirmpassword
                                                                  .message
                                                            : 'An error occurred'}
                                                    </p>
                                                )}
                    </div>
                    
                    <div className='text-center pt-1 mb-5 mt-8 pb-1'>
                      <button
                        className='bg-green inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:text-purple-50 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                        type='submit'
                      >
                        Reset Password
                      </button>
                      {errors.error_description && (
                                                    <p className="text-red-600">
                                                        {typeof errors.error_description
                                                            .message ===
                                                        'string'
                                                            ? errors.error_description
                                                                  .message
                                                            : 'An error occurred'}
                                                    </p>
                                                )}

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ForgotPasswordForm