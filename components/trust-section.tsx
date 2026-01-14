export default function TrustSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">Our Pilot Status</h2>
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6">
              PachiNutrient Hub is currently at the prototype and pilot stage, working directly with local communities
              and smallholder farmers to validate safety, usability, and impact.
            </p>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-foreground/70">
              <li className="flex gap-3 items-start">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Active partnerships with community leaders and farmer groups</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Rigorous safety and quality testing protocols</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Continuous feedback and iteration based on farmer input</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-primary font-bold flex-shrink-0">✓</span>
                <span>Commitment to scaling sustainably</span>
              </li>
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="bg-muted rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="text-4xl sm:text-5xl mb-4">👨‍🌾</div>
              <p className="text-xs sm:text-sm text-foreground/60 font-medium">
                Replace with photo of founder training farmers in the field
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
