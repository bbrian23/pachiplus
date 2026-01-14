"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl lg:text-2xl font-bold text-primary flex-shrink-0">
          PachiNutrient Hub
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-foreground hover:text-primary transition text-sm lg:text-base">
            How It Works
          </Link>
          <Link href="#impact" className="text-foreground hover:text-primary transition text-sm lg:text-base">
            Impact
          </Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition text-sm lg:text-base">
            Contact
          </Link>
        </nav>

        <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90" asChild>
          <Link href="/contact">Get Started</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="#how-it-works"
                className="text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#impact"
                className="text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Impact
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-primary hover:bg-primary/90 w-full" asChild onClick={() => setIsOpen(false)}>
                <Link href="/contact">Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
