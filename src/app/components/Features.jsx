import React from 'react'
import { MdOutlineBolt } from "react-icons/md";
import { AiFillOpenAI } from "react-icons/ai";
import { TbDeviceAnalytics } from "react-icons/tb";
import { MagicCard } from "../../components/ui/magic-card";





export default function Features() {
  return (
    <section id='features' className='w-full flex justify-center items-center flex-col gap-10  bg-black  md:py-[72px] text-white '>
        <button className='bg-[#0B0A0E] rounded-xl py-1 px-4 mt-10'>See our complete package</button>
        <div className="w-[90%] md:w-[40%]">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          Got an idea?<span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent font-playfair"> We turn it into reality—fast.</span>
        </h2>
        <p className="text-sm md:text-base text-center mb-12 md:mb-16 bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent ">
        Discover the powerful features that make our software development solutions indispensable for scaling businesses.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-8 mx-10 md:mx-20 mb-10 justify-center grid-flow-row'>
      <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="lg:p-6 lg:rounded-3xl bg-[#0B0C0E] border-[hsl(0,0%,14.9%)] border-2 rounded-xl p-4" 
                            gradientColor="rgba(59,130,246,0.1)"
                        >
      
            <MdOutlineBolt  className='text-7xl mb-5'/>
            <h3 className='text-xl mb-1 '>Fast Development</h3>
            <p>Get your MVP up and running in just 2-4 weeks.</p>

      </MagicCard>
      <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="lg:p-6 lg:rounded-3xl bg-[#0B0C0E] border-[hsl(0,0%,14.9%)] border-2 rounded-xl p-4" 
                            gradientColor="rgba(59,130,246,0.1)"
                        >
            <AiFillOpenAI  className='text-7xl mb-5'/>
            <h3 className='text-xl'>Modern technology</h3>
            <p>Built with the latest advancements for speed, stability, and scalability.</p>
      </MagicCard>
      <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="lg:p-6 lg:rounded-3xl bg-[#0B0C0E] border-[hsl(0,0%,14.9%)] border-2 rounded-xl p-4" 
                            gradientColor="rgba(59,130,246,0.1)"
                        >
            <TbDeviceAnalytics className='text-7xl mb-5' />
            <h3 className='text-xl'>All-in-one solution</h3>
            <p>Web app and landing page included—test your idea without extra hassle.</p>
      </MagicCard>

      </div>
       

    </section>
  )
}
