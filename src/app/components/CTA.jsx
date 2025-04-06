import React from 'react'
import container from "../../../public/Container.svg"
import Image from 'next/image'
import Link from 'next/link'
Link
export default function CTA() {
  return (
    <section className='w-full h-full bg-black text-white flex justify-center items-center p-0 md:p-20'>
        <div className='bg-[#14151A] my-10 w-[90%] px-4 py-12 md:px-5 md:py-16 flex flex-col md:flex-row rounded-xl justify-center items-center  stroke-white'>
        
        <div className='hidden md:flex md:w-[50%] mr-5'>
                <Image src={container} width="100%"  quality={100} alt='cta'></Image>
            </div>
            
            <div className='md:w-[50%] flex justify-center items-center md:items-start flex-col'>
                <h2 className='text-3xl md:text-4xl md:text-justify text-center '>Ready to build your next</h2>
                <h2 className='text-3xl md:text-4xl md:text-justify text-center font-playfair bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>Software project</h2>
                <p className='text-sm md:text-base text-justify  my-5'>Join the growing community of startups and businesses turning their ideas into reality with our cutting-edge software development services.</p>
                <p className='text-sm md:text-base text-justify mb-5'>Experience the power of rapid development with our expert team. Launch your MVP in weeks, not months, and scale with confidence.</p>
                <button className="cursor-pointer   group relative    px-10 py-3 rounded-medium bg-black transition-all duration-200 ease-in-out shadow hover:shadow-lg ">
                       <Link href="/book-a-call">
                    <div className="relative flex items-center justify-center gap-2">
                    <span className="relative inline-block overflow-hidden">
                    <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                        Get Started
                    </span>
                    <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                        Get Started
                    </span>
                    </span>
                    
                    <svg className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45" viewBox="0 0 24 24">
                    <circle fill="currentColor" r={11} cy={12} cx={12} />
                    <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="black" d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5" />
                    </svg>
                    </div>
                    </Link>
                </button>
            </div>
            
           
        </div>

    </section>
  )
}
