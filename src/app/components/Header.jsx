import React from 'react'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react';
import { AvatarCircles } from '@/components/magicui/avatar-circles';
import HeroVideoDialog from '@/components/magicui/hero-video-dialog';
import Image from 'next/image';
import fondo from "../../../public/circles.svg"
import Link from 'next/link'
export default function Header() {
    const avatars = [
        {
          imageUrl: "https://avatars.githubusercontent.com/u/16860528",
          profileUrl: "https://github.com/dillionverma",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/20110627",
          profileUrl: "https://github.com/tomonarifeehan",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/106103625",
          profileUrl: "https://github.com/BankkRoll",
        },
        {
          imageUrl: "https://avatars.githubusercontent.com/u/59228569",
          profileUrl: "https://github.com/safethecode",
        },
    
     
      ];
  return (

        <section className='text-white flex flex-col justify-center items-center  w-full h-full my-20'>
        <Image
        src={fondo}
        alt="Fondo"
        layout="fill"
        quality={100}
        className='z-0 md:object-cover object-contain '
      />
       

       

        <AnimatedShinyText className="text-xs md:text-base inline-flex items-center justify-center px-4 py-1 mt-0 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>🚀 Ready for Launch?</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
        <div className='w-[90%] md:w-[46%] text-center z-10 mt-4'>
            <h1 className='text-4xl md:text-5xl text-center'>Software Development That’s Out Of This World. </h1>
            <h2 className='text-4xl md:text-5xl font-playfair bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent'>Launch Your Software</h2>
            
        </div>
        <p className='my-5 z-10 text-center text-sm md:text-lg  bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent '>Build smarter. Launch faster. Scale easier.</p>
        <div className='flex z-10 justify-center items-center gap-4 mb-4 text-sm'>
            <AvatarCircles  numPeople={2} avatarUrls={avatars} className="my-5 " />
            <p>1+ Active Clients</p>
        </div>
        <button className="cursor-pointer   group relative z-10   text-lg px-16 py-3 rounded-medium  bg-black transition-all duration-200 ease-in-out shadow hover:shadow-lg ">
        <Link href="/book-a-call">
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Contact Us
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Contact Us
          </span>
        </span>
        
        <svg className="w-5 h-5 transition-transform duration-200 group-hover:rotate-45" viewBox="0 0 24 24">
          <circle fill="currentColor" r={11} cy={12} cx={12} />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="black" d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5" />
        </svg>
      </div>
      </Link>
    </button>

    <div className=' mt-16  md:w-[80%] w-[90%] relative'>
    
        <div className="rounded-2xl  border border-border p-2 backdrop-blur-lg  ">
        

            <div className='border border-border bg-background rounded-xl overflow-hidden'>
        
                <HeroVideoDialog
                    className="block dark:hidden z-10 "
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
                
                
            </div>
            
        </div>
        <div className="bg-gradient-to-t from-[#0B0A0E] to-transparent absolute bottom-0 inset-x-0 w-full h-1/2 "></div>
    </div>

     
    
      {/* <div className="flex flex-col items-center justify-center space-y-4  py-10 w-[90%] mt-16"> */}
      {/* Texto con líneas a los lados */}
      {/* <div className="flex items-center w-full max-w-4xl text-gray-300 text-sm uppercase">
        <div className="flex-1 border-t border-gray-300"></div>
        <p className="px-4">Trusted by Local Bussiness</p>
        <div className="flex-1 border-t border-gray-300"></div>
      </div> */}

      {/* Contenedor de logos */}
      {/* <div className="flex items-center justify-center gap-8 p-4 border border-gray-300 rounded-2xl  w-full max-w-5xl">
      <Image src={lector} width={160} height={160} alt='El lector ' className='mx-10 ' ></Image>
      <Image src={guillen} width={160} height={160} alt='Guillen & asociados ' className='mx-10' ></Image>
     
      </div>
    </div> */}
      
    

    
      </section>

  )
}
