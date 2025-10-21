'use client'

import { Header } from "../common/Header"
import { AnimatedBeamIcons } from "../AnimatedBeamIcons"
import ContactForm from "../ContactForm"

export default function Contact() {
  return (
    <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Header
              title="Contact Us"
              subtitle="Get in Touch"
              description="We’d love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out and we’ll get back to you as soon as possible."
              align="left"
            />

          <div className="flex flex-col md:flex-row gap-4 items-center">          
             {/* icons */}
             <div className="w-full">
               <AnimatedBeamIcons />
             </div>

             {/* form */}
             <div className="w-full">
                 <ContactForm />
             </div>
          </div>
        </div>
    </section>
  )
}