import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhatWeDoSection() {
  const cards = [
    {
      title: "Nutrient Recovery",
      description:
        "Safe collection and storage of urine from public and community toilets using proven sanitation protocols.",
      icon: "♻️",
    },
    {
      title: "EcoPlus Fertiliser",
      description:
        "Stabilised, liquid organic fertiliser specially formulated for the needs of smallholder farmers across Cameroon.",
      icon: "🌱",
    },
    {
      title: "Digital Coordination",
      description:
        "Dashboard and SMS notifications that inform farmers when their fertiliser is ready for collection and use.",
      icon: "📱",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">What We Do</h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Our integrated approach combines traditional farming knowledge with sustainable waste management innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {cards.map((card, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition">
              <CardHeader>
                <div className="text-3xl mb-2">{card.icon}</div>
                <CardTitle className="text-primary text-lg">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Farmland Images */}
        <div className="space-y-4 sm:space-y-6">
          <div className="relative bg-muted rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
            <img
              src="/farmland1.png"
              alt="Farmland"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative bg-muted rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
            <img
              src="/farmland2.png"
              alt="Farmland"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
