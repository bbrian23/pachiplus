export default function CultureSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Our Production Facility
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Where we carry out fertiliser production in a controlled, safe environment
          </p>
        </div>

        <div className="relative bg-muted rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
          <img
            src="/culture.png"
            alt="Fertiliser production culture facility"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

