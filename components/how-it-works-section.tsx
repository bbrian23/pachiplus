import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Collection at Community Toilets",
      description: "Nutrient-rich waste is safely collected from public and community facilities.",
      icon: "🏢",
    },
    {
      number: 2,
      title: "Safe Storage & Sanitisation",
      description: "Material is stored in secure, sealed containers following strict hygiene protocols.",
      icon: "🔒",
      imagePlaceholder: "Replace with photo of sealed urine storage containers",
    },
    {
      number: 3,
      title: "Nutrient Enhancement",
      description: "Advanced processing stabilises and enriches the nutrient composition.",
      icon: "⚗️",
      imagePlaceholder: "Replace with photo of fertiliser mixing or storage tanks",
    },
    {
      number: 4,
      title: "Packaging as PachiPlus",
      description: "Final product is packaged in convenient, labelled containers ready for distribution.",
      icon: "📦",
    },
    {
      number: 5,
      title: "Farmer Notification via SMS",
      description: "Farmers receive SMS alerts when their batch is ready for collection.",
      icon: "📨",
    },
    {
      number: 6,
      title: "Application on Farms",
      description: "Farmers apply PachiPlus to their crops for improved yields and soil health.",
      icon: "🌾",
      imagePlaceholder: "Replace with photo of farmer applying liquid fertiliser to crops",
    },
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            How PachiNutrient Hub Works
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            A complete cycle from collection to farm application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <Card className="border-border/50 h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm sm:text-base">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary text-sm sm:text-base mb-2">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {step.imagePlaceholder && (
                <div className="mt-3 sm:mt-4 bg-muted rounded-lg overflow-hidden h-40 sm:h-48 flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-2xl sm:text-3xl mb-2">{step.icon}</div>
                    <p className="text-xs text-foreground/60 font-medium">{step.imagePlaceholder}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
