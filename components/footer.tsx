import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">EcoNutrientHub</h3>
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              Turning waste into affordable fertiliser for smallholder farmers in Cameroon.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Navigation</h4>
            <nav className="space-y-1.5 sm:space-y-2">
              <Link
                href="/"
                className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition block"
              >
                Home
              </Link>
              <Link
                href="/#how-it-works"
                className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition block"
              >
                How It Works
              </Link>
              <Link
                href="/contact"
                className="text-xs sm:text-sm text-primary-foreground/80 hover:text-primary-foreground transition block"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Get In Touch</h4>
            <p className="text-xs sm:text-sm text-primary-foreground/80 mb-3">
              Interested in partnering, piloting, or learning more about EcoNutrientHub?
            </p>
            <Link
              href="/contact"
              className="inline-block text-xs sm:text-sm font-medium text-accent hover:text-accent/80 transition"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-primary-foreground/70 space-y-1">
          <p>Prototype web application – Digital layer of EcoNutrientHub</p>
          <p>&copy; {new Date().getFullYear()} EcoNutrientHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
