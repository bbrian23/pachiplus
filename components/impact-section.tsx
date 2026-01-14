import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ImpactSection() {
  const impactCards = [
    {
      title: "Improves Soil Fertility & Crop Yields",
      description:
        "EcoPlus provides essential nutrients that enhance soil structure and significantly increase agricultural productivity.",
      icon: "📊",
    },
    {
      title: "Reduces Water Pollution",
      description:
        "By safely capturing and processing waste nutrients, we prevent contamination of groundwater and surface water sources.",
      icon: "💧",
    },
    {
      title: "Supports Youth Green Jobs",
      description:
        "Our system creates dignified employment opportunities for young people in waste collection and nutrient processing.",
      icon: "💼",
    },
    {
      title: "Enables Circular Economy in Agriculture",
      description:
        "We close the nutrient loop by converting waste into valuable fertiliser, creating a sustainable agricultural ecosystem.",
      icon: "♻️",
    },
  ]

  const sdgs = [
    { number: 2, title: "Zero Hunger", color: "from-yellow-500 to-yellow-600" },
    { number: 6, title: "Clean Water & Sanitation", color: "from-blue-400 to-blue-600" },
    { number: 12, title: "Responsible Consumption", color: "from-orange-500 to-orange-600" },
    { number: 13, title: "Climate Action", color: "from-green-600 to-emerald-700" },
  ]

  return (
    <section id="impact" className="py-12 sm:py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Our Sustainability & Climate Impact
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Creating meaningful change for farmers, communities, and the environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {impactCards.map((card, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <div className="text-2xl sm:text-3xl mb-2">{card.icon}</div>
                <CardTitle className="text-primary text-base sm:text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SDG Section */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8 text-center">
            Aligned with UN Sustainable Development Goals
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {sdgs.map((sdg, index) => {
              const sdgImages: Record<number, string> = {
                2: "/sdg2.jpg",
                6: "/sdg6.jpg",
                12: "/sdg12.jpg",
                13: "/sdg13.jpg",
              }
              return (
                <div key={index} className="flex flex-col">
                  <div className="bg-muted rounded-lg overflow-hidden h-40 sm:h-48 lg:h-56 mb-3 sm:mb-4">
                    <img
                      src={sdgImages[sdg.number]}
                      alt={`SDG ${sdg.number}: ${sdg.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1 sm:mb-2">
                      SDG {sdg.number}
                    </div>
                    <p className="text-xs sm:text-sm lg:text-base font-semibold text-foreground/90 leading-tight">
                      {sdg.title}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
