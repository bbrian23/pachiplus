import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SafetyMeasuresSection() {
  const measures = [
    {
      title: "Personal Protective Equipment",
      description: "We ensure that collection, culture, and even bottling is done with nitrile gloves, FP3 masks, goggles, and overalls to avoid contamination from spillage or physical contact with the urine or fertiva (end product).",
      icon: "🛡️",
    },
    {
      title: "Controlled Environment",
      description: "Culture is done in an environment free of occupation by regular individuals, ensuring a sterile and safe production process.",
      icon: "🏭",
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
            Safety Measures
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            We prioritize safety at every step of our production process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {measures.map((measure, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition">
              <CardHeader>
                <div className="text-3xl mb-2">{measure.icon}</div>
                <CardTitle className="text-primary text-lg sm:text-xl">{measure.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">{measure.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

