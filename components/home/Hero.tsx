'use client'

import { ShimmerButton } from "@/components/ui/shimmer-button"
import { DottedMap } from "../ui/dotted-map"
import Social from "../common/Social"

export default function Hero() {
  const markers = [
    { lat: 40.7128, lng: -74.006, size: 0.4, color: "#fc0133" }, 
    { lat: 34.0522, lng: -118.2437, size: 0.4, color: "#fc0133" }, 
    { lat: 51.5074, lng: -0.1278, size: 0.4, color: "#fc0133" },
    { lat: -33.8688, lng: 151.2093, size: 0.4, color: "#fc0133" }, 
    { lat: 48.8566, lng: 2.3522, size: 0.4, color: "#fc0133" }, 
    { lat: 35.6762, lng: 139.6503, size: 0.4, color: "#fc0133" }, 
    { lat: 55.7558, lng: 37.6176, size: 0.3, color: "#fc0133" }, 
    { lat: 39.9042, lng: 116.4074, size: 0.3, color: "#fc0133" },
    { lat: 28.6139, lng: 77.209, size: 0.3, color: "#fc0133" }, 
    { lat: -23.5505, lng: -46.6333, size: 0.3, color: "#fc0133" },
    { lat: 1.3521, lng: 103.8198, size: 0.3, color: "#fc0133" }, 
    { lat: 25.2048, lng: 55.2708, size: 0.3, color: "#fc0133" }, 
    { lat: 52.52, lng: 13.405, size: 0.3, color: "#fc0133" },
    { lat: 19.4326, lng: -99.1332, size: 0.3, color: "#fc0133" }, 
    { lat: -26.2041, lng: 28.0473, size: 0.3, color: "#fc0133" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dotted Map Background */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <DottedMap 
            markers={markers}
            className="w-full h-full opacity-50"
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-muted/30 z-10" />
          {/* Content */}
          <div className="relative z-10 text-center container mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <Social />
              </div>

            <div className='flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 justify-center text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground'>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#bae547] rounded-full animate-pulse" />
                Full-Stack Developer
              </div>
              <div>1.5+ Years Experience</div>
              <div>Open Source Contributor</div>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 flex-wrap mb-6 md:mb-10">
              <span className="whitespace-nowrap bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Sayed Anwar
              </span>
              <div className="relative inline-flex">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-14 h-8 sm:w-16 sm:h-10 md:w-24 md:h-12 lg:w-32 lg:h-16 xl:w-24 xl:h-24 rounded-full object-cover shadow-lg border-2 border-[#bae547]"
                >
                  <source src="/home.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <span className="whitespace-nowrap bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Tamim
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground leading-relaxed px-2 sm:px-4">
              Full Stack Developer with expertise in MERN stack, Django and WordPress
              crafting responsive, scalable, and user-friendly websites and applications 
              for businesses and individuals.
            </p>

            {/* Buttons */}
            <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
              <ShimmerButton className="px-6 sm:px-8 py-2 sm:py-3 text-sm md:text-base">
                Get In Touch
              </ShimmerButton>
            </div>
          </div>
    </section>
  )
}
