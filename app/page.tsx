'use client'
import React, { CSSProperties } from 'react';
import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"
import { Star, Check, ChevronRight, Facebook, Twitter, Instagram, Linkedin, ChevronLeft } from "lucide-react"
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs"
import { Carousel } from 'antd'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { isSignedIn } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const generateRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    transform: `rotate(${Math.random() * 360}deg)`,
    opacity: 0.3 + Math.random() * 0.3,
  })

  const getRandomColor = () => {
    const colors = ["#FF6B6B", "#FFD166", "#4CAF50", "#6A5ACD"]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Carousel data
  const carouselItems = [
  {
    image: "/images/deer.jpg",
    alt: "Mystical forest path with ancient ruins"
  }
];


  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  if (!mounted) {
    return null // or a loading state
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f9f5ff] relative overflow-x-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Stars */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-2xl md:text-3xl"
            style={{
              ...generateRandomPosition(),
              color: getRandomColor(),
            }}
          >
            ★
          </div>
        ))}

        {/* Triangles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`triangle-${i}`}
            className="absolute"
            style={{
              ...generateRandomPosition(),
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              backgroundColor: getRandomColor(),
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            }}
          />
        ))}

        {/* Circles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute rounded-full"
            style={{
              ...generateRandomPosition(),
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              backgroundColor: getRandomColor(),
              opacity: 0.3 + Math.random() * 0.3,
            }}
          />
        ))}

        {/* Squiggly lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`squiggle-${i}`}
            className="absolute"
            style={{
              ...generateRandomPosition(),
              width: `${50 + Math.random() * 100}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: getRandomColor(),
              borderRadius: "50%",
            }}
          />
        ))}

        {/* Confetti */}
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`confetti-${i}`}
            className="absolute"
            style={{
              ...generateRandomPosition(),
              width: `${5 + Math.random() * 10}px`,
              height: `${5 + Math.random() * 10}px`,
              backgroundColor: ["#FF6B6B", "#FFD166", "#4CAF50", "#6A5ACD"][Math.floor(Math.random() * 5)],
            }}
          />
        ))}
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-[#FF9900] shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="KidLearn Logo"
              width={40}
              height={40}
              className="rounded-full border-4 border-[#FF6B6B]"
            />
            <span className="text-2xl font-bold text-[#6A5ACD] tracking-tight">KiddoLearn</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#FF6B6B] text-white font-bold hover:bg-[#ff5252] transition-colors">
              Sign Up
                  </button>
                </SignUpButton>
              </>
            ) : (
              <UserButton 
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 sm:w-10 sm:h-10",
                    userButtonPopoverCard: "bg-white shadow-lg rounded-xl border-2 border-[#6A5ACD]",
                    userButtonPopoverActionButton: "hover:bg-[#f0f0ff] text-[#6A5ACD]",
                    userButtonPopoverActionButtonText: "font-semibold",
                    userButtonPopoverFooter: "hidden",
                  }
                }}
              />
            )}
            <button 
              className="sm:hidden text-[#6A5ACD]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} bg-white border-b border-gray-200 py-4`}>
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#features" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
                Features
              </Link>
              <Link href="#testimonials" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
                Testimonials
              </Link>
              <Link href="#pricing" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors">
                Contact
              </Link>
              
              <div className="pt-4 border-t border-gray-100">
                {!isSignedIn ? (
                  <div className="flex flex-col space-y-3">
                    <SignInButton mode="modal">
                      <button className="w-full text-center py-2 text-[#6A5ACD] font-semibold hover:text-[#FF6B6B] transition-colors border border-[#6A5ACD] rounded-full">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="w-full text-center py-2 rounded-full bg-[#FF6B6B] text-white font-bold hover:bg-[#ff5252] transition-colors">
                        Sign Up Free
                      </button>
                    </SignUpButton>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10",
                          userButtonPopoverCard: "bg-white shadow-lg rounded-xl border-2 border-[#6A5ACD]",
                          userButtonPopoverActionButton: "hover:bg-[#f0f0ff] text-[#6A5ACD]",
                          userButtonPopoverActionButtonText: "font-semibold",
                          userButtonPopoverFooter: "hidden",
                        }
                      }}
                    />
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-[#FFD166] to-[#f9f5ff] border-b-4 border-dashed border-[#6A5ACD] relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Zigzag border */}
            <div
              className="absolute top-0 left-0 w-full h-8 bg-[#FF6B6B]"
              style={{
                clipPath:
                  "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%, 100% 0, 0 0)",
              }}
            ></div>

            {/* Polka dots */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`polka-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  ...generateRandomPosition(),
                  width: `${10 + Math.random() * 15}px`,
                  height: `${10 + Math.random() * 15}px`,
                  opacity: 0.4,
                }}
              />
            ))}

            {/* Squiggly decorations */}
            <svg
              className="absolute top-10 right-10 w-20 h-20 text-[#4CAF50] opacity-30"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,30 Q30,5 50,30 T90,30" stroke="currentColor" strokeWidth="5" fill="none" />
              <path d="M10,50 Q30,25 50,50 T90,50" stroke="currentColor" strokeWidth="5" fill="none" />
              <path d="M10,70 Q30,45 50,70 T90,70" stroke="currentColor" strokeWidth="5" fill="none" />
            </svg>

            <svg
              className="absolute bottom-10 left-10 w-20 h-20 text-[#FF6B6B] opacity-30"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,30 Q30,5 50,30 T90,30" stroke="currentColor" strokeWidth="5" fill="none" />
              <path d="M10,50 Q30,25 50,50 T90,50" stroke="currentColor" strokeWidth="5" fill="none" />
              <path d="M10,70 Q30,45 50,70 T90,70" stroke="currentColor" strokeWidth="5" fill="none" />
            </svg>
          </div>

          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-white rounded-full border-2 border-[#FF6B6B] text-[#6A5ACD] font-bold text-sm relative">
                #1 Educational Platform for Kids
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD166] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  ★
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#6A5ACD] leading-tight relative">
                Make Learning <span className="text-[#FF6B6B]">Fun</span> and{" "}
                <span className="text-[#4CAF50]">Engaging</span>!
                <span className="absolute -top-4 -right-4 text-2xl text-[#FFD166]">✨</span>
                <span className="absolute bottom-0 left-4 text-2xl text-[#FF6B6B]">♥</span>
              </h1>
              <p className="text-lg text-gray-700 relative font-sans tracking-wide leading-relaxed">
                "Kiddolearn turns learning into a fun adventure with exciting games for kids. Join the fun and watch education come to life through interactive gameplay!"
                <span className="absolute -bottom-2 -right-2 text-xl text-[#4CAF50]">✓</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/TheGame.zip"
                  download="TheGame.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#FF6B6B] text-white font-bold hover:bg-[#ff5252] transition-colors text-lg relative overflow-hidden"
                >
                  <span className="relative z-10"> Download Now</span>
                  <ChevronRight className="ml-2 h-5 w-5 relative z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <div className="w-6 h-6 bg-white rounded-full ml-10"></div>
                    <div className="w-4 h-4 bg-white rounded-full ml-8"></div>
                  </div>
                </Link>
                <Link
                  href="#demo"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border-2 border-[#6A5ACD] text-[#6A5ACD] font-bold hover:bg-[#f0f0ff] transition-colors text-lg relative"
                >
                  Watch Demo
                  <span className="absolute -top-2 -right-2 text-lg text-[#FFD166]">★</span>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFD166] rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#4CAF50] rounded-full opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-4 border-dashed border-[#FF6B6B] rounded-xl rotate-3"></div>
              <Image
                src="/images/adv.png"
                alt="Happy children learning"
                width={600}
                height={700}
                className="relative z-12 rounded-xl border-4 border-white shadow-lg"
              />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#6A5ACD] rounded-full flex items-center justify-center text-white text-xl font-bold rotate-12">
                A+
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-white text-xl font-bold -rotate-12">
                100%
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#6A5ACD] mb-4">
                Amazing Features for Educators
              </h2>
              <p className="text-lg text-gray-700">
                Everything you need to create engaging educational content that kids will love
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  title: "Interactive Worksheets",
                  description: "Create colorful worksheets with drag-and-drop elements that make learning fun",
                  icon: "📝",
                  color: "#FF6B6B",
                  borderColor: "border-[#FF6B6B]",
                  titleColor: "text-[#FF6B6B]"
                },
                {
                  title: "Educational Games",
                  description: "Build custom games that reinforce learning concepts through play",
                  icon: "🎮",
                  color: "#4CAF50",
                  borderColor: "border-[#4CAF50]",
                  titleColor: "text-[#4CAF50]"
                },
                {
                  title: "Progress Tracking",
                  description: "Monitor student progress with detailed analytics and reports",
                  icon: "📊",
                  color: "#FFD166",
                  borderColor: "border-[#FFD166]",
                  titleColor: "text-[#FFD166]"
                },
                {
                  title: "Resource Library",
                  description: "Access thousands of pre-made templates and educational resources",
                  icon: "📚",
                  color: "#6A5ACD",
                  borderColor: "border-[#6A5ACD]",
                  titleColor: "text-[#6A5ACD]"
                },
              ].map((feature, index) => (
                <div key={index} className="relative p-6">
                  {/* Corner Circles */}
                  <div className={`absolute top-0 left-0 w-4 h-4 rounded-full ${feature.borderColor} bg-white border-4`}></div>
                  <div className={`absolute top-0 right-0 w-4 h-4 rounded-full ${feature.borderColor} bg-white border-4`}></div>
                  <div className={`absolute bottom-0 left-0 w-4 h-4 rounded-full ${feature.borderColor} bg-white border-4`}></div>
                  <div className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ${feature.borderColor} bg-white border-4`}></div>
                  
                  {/* Dashed Borders */}
                  <div className={`absolute top-2 left-4 right-4 h-0 border-t-4 border-dashed ${feature.borderColor}`}></div>
                  <div className={`absolute bottom-2 left-4 right-4 h-0 border-t-4 border-dashed ${feature.borderColor}`}></div>
                  <div className={`absolute left-2 top-4 bottom-4 w-0 border-l-4 border-dashed ${feature.borderColor}`}></div>
                  <div className={`absolute right-2 top-4 bottom-4 w-0 border-r-4 border-dashed ${feature.borderColor}`}></div>

                  {/* Content */}
                  <div className="flex flex-col items-center text-center relative z-10 pt-4">
                    <div className={`w-16 h-16 rounded-full border-2 ${feature.borderColor} flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${feature.titleColor}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Carousel Section */}
        <section className="py-16 md:py-24 bg-[#f9f5ff] border-t-4 border-b-4 border-dashed border-[#FFD166] relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Scattered dots */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={`dot-sc-${i}`}
                className="absolute rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${3 + Math.random() * 5}px`,
                  height: `${3 + Math.random() * 5}px`,
                  backgroundColor: ["#FF6B6B", "#FFD166", "#4CAF50", "#6A5ACD"][Math.floor(Math.random() * 4)],
                  opacity: 0.2,
                }}
              />
            ))}
            
            {/* Zigzag decorations */}
            <svg
              className="absolute top-10 left-10 w-40 h-40 text-[#FF6B6B] opacity-10"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,20 L30,50 L50,20 L70,50 L90,20" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
            
            <svg
              className="absolute bottom-10 right-10 w-40 h-40 text-[#4CAF50] opacity-10"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,80 L30,50 L50,80 L70,50 L90,80" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
                  </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-[#FF6B6B] opacity-30"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6A5ACD] mb-4 relative inline-block">
                See KiddoLearn in Action
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-[#FFD166] opacity-50 rounded-full"></div>
                <span className="absolute -top-4 -right-8 text-2xl">📸</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Discover how our platform makes learning engaging and effective
              </p>
                  </div>

            {/* Ant Design Carousel */}
            <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Carousel 
                arrows
                autoplay 
                autoplaySpeed={5000}
                effect="fade"
                dots
                infinite={false}
              >
                {carouselItems.map((item, index) => (
                  <div key={index}>
                    <div className="relative h-[600px]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* Remove all custom carousel styles */}
            <style jsx global>{``}</style>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 md:py-24 bg-[#f0f0ff] border-t-4 border-b-4 border-dashed border-[#6A5ACD] relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Notebook lines - just top and bottom */}
            <div
              className="absolute w-full h-px bg-[#6A5ACD] opacity-10"
              style={{ top: "10%" }}
            />
            <div
              className="absolute w-full h-px bg-[#6A5ACD] opacity-10"
              style={{ top: "90%" }}
            />

            {/* Scattered stars */}
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={`star-t-${i}`}
                className="absolute text-2xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: ["#FF6B6B", "#FFD166", "#4CAF50", "#6A5ACD"][Math.floor(Math.random() * 4)],
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: 0.2,
                }}
              >
                ★
              </div>
            ))}

            {/* Crayon scribbles */}
            <svg
              className="absolute top-1/4 left-1/4 w-40 h-40 opacity-10"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,30 Q20,50 30,30 T50,30 T70,30 T90,30" stroke="#FF6B6B" strokeWidth="5" fill="none" />
            </svg>

            <svg
              className="absolute bottom-1/4 right-1/4 w-40 h-40 opacity-10"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10,70 Q20,50 30,70 T50,70 T70,70 T90,70" stroke="#4CAF50" strokeWidth="5" fill="none" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 relative">
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl">📣</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6A5ACD] mb-4 relative inline-block">
                Teachers Love Kiddolearn
                <div className="absolute -top-2 -right-8 w-8 h-8 bg-[#FFD166] rounded-full opacity-50"></div>
                <div className="absolute -bottom-2 -left-8 w-8 h-8 bg-[#FF6B6B] rounded-full opacity-50"></div>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                See what educators are saying about our platform
              </p>

              {/* Decorative underline */}
              <div className="w-40 h-2 bg-[#FFD166] mx-auto mt-4 rounded-full relative">
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-[#FF6B6B] rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#4CAF50] rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Kiddolearn has transformed my classroom. My students are more engaged than ever!",
                  name: "Ms. Kavya",
                  role: "2nd Grade Teacher",
                  stars: 5,
                  color: "#FF6B6B",
                },
                {
                  quote:
                    "The interactive quizes on Kiddolearn save me hours of prep time and my students actually look forward to them!",
                  name: "Mr. Dhiraj",
                  role: "4th Grade Teacher",
                  stars: 5,
                  color: "#4CAF50",
                },
                {
                  quote:
                    "I've found so many creative ways to teach difficult concepts with the help of Kiddolearn.",
                  name: "Mrs. Thompson",
                  role: "Special Education Teacher",
                  stars: 5,
                  color: "#FFD166",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg relative"
                  style={{
                    boxShadow: `0 4px 0 ${testimonial.color}, 0 8px 16px rgba(0,0,0,0.1)`,
                    transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                  }}
                >
                  {/* Decorative elements */}
                  <div
                    className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold"
                    style={{ backgroundColor: testimonial.color }}
                  >
                    "
                  </div>

                  <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#FFD166] rounded-full opacity-30"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#6A5ACD] rounded-full opacity-30"></div>

                  {/* Paper clip */}
                  <div className="absolute -top-4 left-4 w-8 h-16 border-4 rounded-full border-gray-400 opacity-40 transform rotate-45"></div>

                  <div className="flex mb-4">
                    {Array(testimonial.stars)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#FFD166] text-[#FFD166]" />
                      ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic relative">
                    "{testimonial.quote}"
                    <span className="absolute bottom-0 right-0 text-lg opacity-20" style={{ color: testimonial.color }}>
                      ✓
                    </span>
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Sticker */}
                  <div
                    className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center transform rotate-12"
                    style={{ borderColor: testimonial.color }}
                  >
                    <span className="text-sm font-bold" style={{ color: testimonial.color }}>
                      A+
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative bottom elements */}
            <div className="flex justify-center mt-12">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`dot-${i}`}
                  className="w-4 h-4 mx-2 rounded-full"
                  style={{
                    backgroundColor: ["#FF6B6B", "#FFD166", "#4CAF50", "#6A5ACD", "#FF9900"][i % 5],
                    opacity: 0.7,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Price tags */}
            <svg
              className="absolute top-10 left-10 w-20 h-20 text-[#FF6B6B] opacity-20"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M60,10 L90,40 L40,90 L10,60 Z" stroke="currentColor" strokeWidth="4" fill="none" />
              <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>

            <svg
              className="absolute bottom-10 right-10 w-20 h-20 text-[#4CAF50] opacity-20"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M60,10 L90,40 L40,90 L10,60 Z" stroke="currentColor" strokeWidth="4" fill="none" />
              <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>

            {/* Dollar signs */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`dollar-${i}`}
                className="absolute text-2xl font-bold"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: ["#FF6B6B", "#FFD166", "#4CAF50", "#6A5ACD"][Math.floor(Math.random() * 4)],
                  opacity: 0.2,
                  transform: `rotate(${Math.random() * 30 - 15}deg)`,
                }}
              >
                $
              </div>
            ))}

            {/* Checkmarks */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`check-${i}`}
                className="absolute text-2xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: "#4CAF50",
                  opacity: 0.2,
                }}
              >
                ✓
              </div>
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 relative">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#FFD166] rounded-full opacity-20"></div>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl">💰</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#6A5ACD] mb-4 relative inline-block">
                Simple, Transparent Pricing
                <div className="absolute -top-2 -right-8 w-8 h-8 bg-[#FF6B6B] rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-8 w-8 h-8 bg-[#4CAF50] rounded-full opacity-30 animate-pulse"></div>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Choose the plan that works best for you and your classroom
              </p>

              {/* Decorative scissors and cut line */}
              <div className="w-full max-w-md mx-auto mt-8 relative">
                <div className="border-t-2 border-dashed border-gray-400"></div>
                <div className="absolute -top-4 -left-4 text-2xl transform -rotate-45">✂️</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$9",
                  description: "Perfect for individual teachers",
                  features: ["50 Interactive Worksheets", "10 Educational Games", "Basic Analytics", "Email Support"],
                  color: "#6A5ACD",
                  popular: false,
                },
                {
                  name: "Professional",
                  price: "$19",
                  description: "Ideal for active educators",
                  features: [
                    "Unlimited Worksheets",
                    "Unlimited Games",
                    "Advanced Analytics",
                    "Priority Support",
                    "Resource Library Access",
                  ],
                  color: "#FF6B6B",
                  popular: true,
                },
                {
                  name: "School",
                  price: "$49",
                  description: "Best for entire schools",
                  features: [
                    "Everything in Professional",
                    "Up to 25 Teacher Accounts",
                    "School-wide Analytics",
                    "Admin Dashboard",
                    "Training Sessions",
                  ],
                  color: "#4CAF50",
                  popular: false,
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg border-4 relative ${plan.popular ? "border-[#FF6B6B] transform scale-105 md:scale-110 z-10" : "border-[#e0e0e0]"}`}
                  style={{
                    boxShadow: `0 4px 0 ${plan.color}, 0 8px 16px rgba(0,0,0,0.1)`,
                  }}
                >
                  {/* Corner decorations */}
                  <div
                    className="absolute top-0 left-0 w-0 h-0 border-t-20 border-l-20"
                    style={{
                      borderTopColor: plan.color,
                      borderLeftColor: plan.color,
                      borderRightColor: "transparent",
                      borderBottomColor: "transparent",
                      borderWidth: "20px",
                    }}
                  ></div>

                  <div
                    className="absolute top-0 right-0 w-0 h-0 border-t-20 border-r-20"
                    style={{
                      borderTopColor: plan.color,
                      borderRightColor: plan.color,
                      borderLeftColor: "transparent",
                      borderBottomColor: "transparent",
                      borderWidth: "20px",
                    }}
                  ></div>

                  {plan.popular && (
                    <div className="bg-[#FF6B6B] text-white text-center py-2 font-bold relative">
                      Most Popular
                      <div className="absolute top-0 left-0 w-full h-full flex justify-between overflow-hidden opacity-30">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={`star-p-${i}`} className="text-white text-lg">
                            ★
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="p-6 relative">
                    {/* Scattered stars and shapes */}
                    <div className="absolute top-1/4 right-4 text-lg opacity-20" style={{ color: plan.color }}>
                      ★
                    </div>
                    <div className="absolute bottom-1/4 left-4 text-lg opacity-20" style={{ color: plan.color }}>
                      ♥
                    </div>

                    <h3 className="text-xl font-bold mb-2 relative inline-block" style={{ color: plan.color }}>
                      {plan.name}
                      <div
                        className="absolute bottom-0 left-0 w-full h-1 rounded-full"
                        style={{ backgroundColor: `${plan.color}50` }}
                      ></div>
                    </h3>

                    <div className="flex items-end mb-4 relative">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">/month</span>

                      {/* Price tag */}
                      <div className="absolute -right-2 -top-2 w-12 h-12 rounded-full bg-[#FFD166] opacity-20 flex items-center justify-center text-xs font-bold">
                        SALE
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 relative">
                      {plan.description}
                      <span className="absolute -bottom-2 -right-2 text-sm opacity-30" style={{ color: plan.color }}>
                        ✓
                      </span>
                    </p>

                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center relative">
                          <Check className="h-5 w-5 mr-2 text-green-500" />
                          <span className="text-gray-700">{feature}</span>

                          {/* Highlight marker effect */}
                          {i % 2 === 0 && (
                            <div
                              className="absolute left-0 w-full h-2 bottom-0 opacity-20 rounded-full"
                              style={{ backgroundColor: plan.color }}
                            ></div>
                          )}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="#signup"
                      className={`block text-center py-2 rounded-full font-bold transition-colors w-full relative overflow-hidden ${
                        plan.popular
                          ? "bg-[#FF6B6B] text-white hover:bg-[#ff5252]"
                          : "bg-white border-2 border-[#6A5ACD] text-[#6A5ACD] hover:bg-[#f0f0ff]"
                      }`}
                    >
                      <span className="relative z-10">Get Started</span>

                      {/* Button decoration */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="w-6 h-6 bg-white rounded-full ml-10"></div>
                        <div className="w-4 h-4 bg-white rounded-full ml-8"></div>
                      </div>
                    </Link>
                  </div>

                  {/* Sticker */}
                  {plan.popular && (
                    <div
                      className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center transform rotate-12"
                      style={{ borderColor: plan.color }}
                    >
                      <span className="text-sm font-bold" style={{ color: plan.color }}>
                        BEST VALUE
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="signup" className="py-16 md:py-24 bg-[#6A5ACD] text-white relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Zigzag border */}
            <div
              className="absolute top-0 left-0 w-full h-8 bg-[#FF6B6B]"
              style={{
                clipPath:
                  "polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%, 100% 0, 0 0)",
              }}
            ></div>

            <div
              className="absolute bottom-0 left-0 w-full h-8 bg-[#4CAF50]"
              style={{
                clipPath:
                  "polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%, 100% 100%, 0 100%)",
              }}
            ></div>

            {/* Scattered stars and shapes */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`cta-star-${i}`}
                className="absolute text-xl"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  color: ["#FF6B6B", "#FFD166", "#4CAF50", "#ffffff"][Math.floor(Math.random() * 4)],
                  opacity: 0.3,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                {["★", "♥", "●", "■"][Math.floor(Math.random() * 4)]}
              </div>
            ))}

            {/* Confetti */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={`confetti-cta-${i}`}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${5 + Math.random() * 10}px`,
                  height: `${5 + Math.random() * 10}px`,
                  backgroundColor: ["#FF6B6B", "#FFD166", "#4CAF50", "#ffffff", "#FF9900"][
                    Math.floor(Math.random() * 5)
                  ],
                  transform: `rotate(${Math.random() * 360}deg)`,
                  opacity: 0.3,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#FFD166] rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#FF6B6B] rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#4CAF50] rounded-full opacity-30"></div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
                Ready to Transform Your Classroom?
                <span className="absolute -top-4 -right-4 text-2xl">✨</span>
                <span className="absolute -bottom-4 -left-4 text-2xl">🎨</span>
              </h2>

              <div className="text-xl mb-8 text-white/90 relative">
                <span>Join thousands of teachers who are making learning fun and engaging with Kiddolearn platform</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#FFD166] opacity-20 rounded-full"></span>
              </div>

              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8 relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFD166] rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#FF6B6B] rounded-full opacity-30"></div>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] border-4 border-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#FF6B6B] rounded-full font-bold hover:bg-[#ff5252] transition-colors whitespace-nowrap relative overflow-hidden"
                >
                  <span className="relative z-10">Start free trial</span>

                  {/* Button decoration */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <div className="w-6 h-6 bg-white rounded-full ml-10"></div>
                    <div className="w-4 h-4 bg-white rounded-full ml-8"></div>
                  </div>
                </button>
              </form>

              <p className="text-sm text-white/70 relative">
                No credit card required. 14-day free trial. Cancel anytime.
                <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xl">🎓</span>
              </p>

              {/* Decorative stickers */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-full flex items-center justify-center transform rotate-12 border-4 border-[#FF6B6B] text-[#6A5ACD] font-bold text-sm">
                FREE!
              </div>

              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center transform -rotate-12 border-4 border-[#4CAF50] text-[#6A5ACD] font-bold text-sm">
                WOW!
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-[#FF9900] py-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* Notebook lines - just top and bottom */}
          <div
            className="absolute w-full h-px bg-[#6A5ACD] opacity-10"
            style={{ top: "10%" }}
          />
          <div
            className="absolute w-full h-px bg-[#6A5ACD] opacity-10"
            style={{ top: "90%" }}
          />

          {/* Scattered stars and shapes */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`footer-star-${i}`}
              className="absolute text-lg"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                color: ["#FF6B6B", "#FFD166", "#4CAF50", "#6A5ACD"][Math.floor(Math.random() * 4)],
                opacity: 0.2,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {["★", "♥", "●", "■"][Math.floor(Math.random() * 4)]}
            </div>
          ))}

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#FF6B6B] opacity-30 rounded-tl-xl"></div>
          <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-[#4CAF50] opacity-30 rounded-tr-xl"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-[#FFD166] opacity-30 rounded-bl-xl"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#6A5ACD] opacity-30 rounded-br-xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex items-center gap-1 mb-4">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="KidLearn Logo"
                  width={40}
                  height={40}
                  className="rounded-full border-4 border-[#FF6B6B]"
                />
                <span className="text-2xl font-bold text-[#6A5ACD]">KiddoLearn</span>
                <span className="absolute -top-4 -right-4 text-xl text-[#FFD166]">★</span>
              </div>
              <p className="text-gray-600 mb-4 relative">
                Making education fun and engaging for kids everywhere.
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD166] opacity-20 rounded-full"></span>
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-[#6A5ACD] hover:text-[#FF6B6B] relative group">
                  <Facebook className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                </Link>
                <Link href="#" className="text-[#6A5ACD] hover:text-[#FF6B6B] relative group">
                  <Twitter className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#4CAF50] rounded-full"></div>
                </Link>
                <Link href="#" className="text-[#6A5ACD] hover:text-[#FF6B6B] relative group">
                  <Instagram className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FFD166] rounded-full"></div>
                </Link>
                <Link href="#" className="text-[#6A5ACD] hover:text-[#FF6B6B] relative group">
                  <Linkedin className="h-5 w-5" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#6A5ACD] rounded-full"></div>
                </Link>
              </div>
            </div>

            <div className="relative">
              <h3 className="font-bold text-lg mb-4 text-[#6A5ACD] relative inline-block">
                Product
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF6B6B] opacity-30 rounded-full"></div>
                <span className="absolute -top-2 -right-2 text-lg text-[#FF6B6B] opacity-30">✏️</span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Features
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF6B6B] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Pricing
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF6B6B] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Testimonials
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF6B6B] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    FAQ
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF6B6B] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="relative">
              <h3 className="font-bold text-lg mb-4 text-[#6A5ACD] relative inline-block">
                Resources
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4CAF50] opacity-30 rounded-full"></div>
                <span className="absolute -top-2 -right-2 text-lg text-[#4CAF50] opacity-30">📚</span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Blog
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#4CAF50] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Help Center
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#4CAF50] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Tutorials
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#4CAF50] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Webinars
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#4CAF50] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="relative">
              <h3 className="font-bold text-lg mb-4 text-[#6A5ACD] relative inline-block">
                Company
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD166] opacity-30 rounded-full"></div>
                <span className="absolute -top-2 -right-2 text-lg text-[#FFD166] opacity-30">🏢</span>
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    About Us
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFD166] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Careers
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFD166] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Contact
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFD166] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-[#FF6B6B] relative group">
                    Privacy Policy
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#FFD166] opacity-30 rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-600 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="px-4 py-1 bg-white border-2 border-dashed border-[#6A5ACD] rounded-full text-[#6A5ACD] text-sm font-bold">
                Made with ♥ for Kids
              </div>
            </div>
            <p className="relative">
              © {new Date().getFullYear()} Kiddolearn. All rights reserved.
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xl">🎨</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

