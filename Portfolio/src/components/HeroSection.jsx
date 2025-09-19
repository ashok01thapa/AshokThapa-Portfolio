import React from 'react'
import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id='hero' 
    className='relative min-h-screen flex flex-col items-center justify-center px-4'>

        <div className='container max-w-4xl mx-auto text-center z-10'>

          <a className='flex flex-col items-center'>
            <img src= "/projects/Ashok.jpg" alt="#" className='rounded-full  w-50 h-50 object-cover mb-5
            items-center '/>
          </a>
            <div className='space-y-6'>
                <h1 className='text-4xl md:text-5xl font-bold tracking-tight '>
                    <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                    <span className='text-primary opacity-0 animate-fade-in-delay-1'> Ashok</span>
                    <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'> Thapa</span>

                </h1>

                <p className='text-md md:text-lg text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                    I’m a passionate Front-End Developer who loves turning ideas into visually appealing and user-friendly websites. Skilled in HTML, CSS, JavaScript, and modern frameworks like React. I focus on creating responsive, accessible, and high-performance interfaces. I enjoy combining clean code with creative design to deliver engaging digital experiences.
                </p>

                <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                  <a href="#projects " className='cosmic-button'>
                    View My Work
                  </a>
                </div>
                

            </div>

        </div>

        <div className='
        absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce '>
          <span className='text-sm text-muted-foreground mb-2'>
             Scroll</span>
          <ArrowDown className='h-5 w-5 text-primary'/>
        </div>

    </section>
  )
}

export default HeroSection
