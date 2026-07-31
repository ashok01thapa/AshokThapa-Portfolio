import React from 'react'
import { Server, GitBranch, Cloud } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about'
      className='py-24 px-4 relative'>

      <div className='container mx-auto max-w-5xl'>
        <h2
          className='text-2xl md:text-3xl font-bold mb-12 text-center '>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2  gap-12 items-center'>

          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold '>Passionate DevOps Engineer & Automation Enthusiast</h3>
            <p className='text-muted-foreground'>
              Aspiring DevOps Engineer with a passion for building reliable, automated, and scalable systems. Eager to bring strong problem-solving skills, clean infrastructure code, and a can-do attitude to every challenge.
            </p>

            <p className='text-muted-foreground'>
              I'm passionate about streamlining development workflows and improving system reliability, and I'm constantly learning new tools and techniques to stay at the forefront of the ever-evolving DevOps landscape.
            </p>

            <div className='flex flex-col sm:flex-row justify-center gap-4 pt-4'>
              <a href="#contact" className='cosmic-button'>
                Get In Touch
              </a>
              <a href=""
                className='px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transtion-colors duration-300'>
                Download CV
              </a>


            </div>

          </div>

          <div className='grid grid-cols-1 gap-6'>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>

                <div className='p-3 rounded-full bg-primary/10'>
                <Server className='h-6 w-6 text-primary'/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                     Infrastructure as Code</h4>
                  <p className='text-muted-foreground'>
                    Automating infrastructure provisioning and configuration with tools like Terraform.
                  </p>

                </div>

              </div>
            </div>

            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                
                <div className='p-3 rounded-full bg-primary/10'>
                <GitBranch className='h-6 w-6 text-primary'/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                     CI/CD & Automation</h4>
                  <p className='text-muted-foreground'>
                    Building automated pipelines for testing, building, and deploying applications efficiently.
                  </p>
                </div>


              </div>
            </div>
            <div className='gradient-border p-6 card-hover'>
              <div className='flex items-start gap-4'>
                
                <div className='p-3 rounded-full bg-primary/10'>
                <Cloud className='h-6 w-6 text-primary'/>
                </div>

                <div className='text-left'>
                  <h4 className='font-semibold text-lg'>
                     Cloud Infrastructure</h4>
                  <p className='text-muted-foreground'>
                   Managing scalable cloud environments and containerized deployments with Docker & Kubernetes.
                  </p>
                </div>


              </div>
            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default AboutSection