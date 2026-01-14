"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"

function HeroImageSlider() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = ["/prototype.png", "/product.jpeg"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={index === 0 ? "Prototype" : "Product"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 py-16 lg:py-32 items-center w-full">
        {/* Text Content */}
        <div className="space-y-6 order-2 lg:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight text-balance">
            Turning Waste Into Affordable Fertiliser for Smallholder Farmers
          </h1>
          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed text-balance">
            EcoNutrientHub recovers nutrients from sanitation waste to produce EcoPlus — a safe, affordable, liquid
            organic fertiliser that improves soil health, food security, and water protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
              asChild
            >
              <Link href="#how-it-works">How It Works</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Hero Image - Alternating */}
        <div className="relative bg-muted rounded-lg overflow-hidden h-80 sm:h-96 lg:h-full lg:min-h-96 order-1 lg:order-2">
          <HeroImageSlider />
        </div>
      </div>
    </section>
  )
}
