import { ArrowRight, ExternalLink,  } from 'lucide-react'
import { Github } from 'lucide-react'
import React from 'react'


const ProjectsSection = () => {

  const projects = [
    {
      id:1,
      title: "Cafe",
      description: "A beautiful landing page app using React and Tailwind.",
      image: "/projects/project1.png",
      tags: ["React", "TailwindCSS","Aos" ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id:2,
      title: "Bit-Link",
      description: "A beautiful landing page app using React and Tailwind.",
      image: "projects/project2.png",
      tags: ["Nextjs", "TailwindCSS", "MongoDB" ],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id:3,
      title: "Todo-List",
      description: "A beautiful landing page app using React and Tailwind.",
      image: "/projects/project3.png",
      tags: ["React", "TailwindCSS", "Nodejs" ],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]
  return (
   <section id='projects' className='py-24 px-4'>
    <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
        Featured
        <span className='text-primary'> Projects</span>
      </h2>

      <p className='text-center text-muted-foreground mb-12 mx-auto max-w-2xl'>
        Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, key)=>(
          <div 
          key={key}
           className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'>

            <div className='h-40 overflow-hidden'>
              <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
            </div>

            <div className='p-6'>
              <div className='flex flex-wrap items-center justify-center gap-2 mb-4'>
                {project.tags.map((tag)=>(
                  <span className='px-2 py-1 text-xs font-medium border bg-secondary/20 rounded-full text-secondary-foreground '>
                    {tag}</span>
                ))}

              </div>
           

            <h3 className='font-semibold text-xl mb-1'>
              {project.title}</h3>
              <p className='text-sm mb-4 text-muted-forground'>
                {project.description}</p>

                <div className='flex justify-between items-center'>

                  <div className='flex space-x-3'>
                    <a href={project.demoUrl}
                    target='_blank'
                    className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                      <ExternalLink size={20}/>
                    </a >

                    <a href={project.githubUrl}
                    target='_blank'
                    className='text-foreground/80 hover:text-primart transition-colors
                    duration-300' >
                      <Github size={20}/>
                    </a>

                  </div>

                   </div>

                </div>

          </div>
        ))}

      </div>

      <div className='text-center mt-12' >
        <a className='cosmic-button flex mx-auto w-fit items-center gap-2'
        target='_blank'
        href='https://github.com/ashok01thapa'>
          Check My Github <ArrowRight size={16}/>
        </a>

      </div>

    </div>
    
   </section>
  )
}

export default ProjectsSection
