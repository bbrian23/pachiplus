import { Button } from "@/components/ui/button"
import Link from "next/link"

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
            PachiNutrient Hub recovers nutrients from sanitation waste to produce PachiPlus — a safe, affordable, liquid
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

        {/* Hero Image Placeholder */}
        <div className="relative bg-muted rounded-lg overflow-hidden h-80 sm:h-96 lg:h-full lg:min-h-96 flex items-center justify-center order-1 lg:order-2">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
          <div className="relative z-10 text-center px-6">
            <div className="text-5xl mb-4">🌾</div>
            <p className="text-xs sm:text-sm text-foreground/60 font-medium">
              Replace with photo of founder working with farmers on a farm
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
