import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function DigitalFeaturesSection() {
  const features = [
    {
      title: "Batch Tracking",
      content: (
        <div className="space-y-2 sm:space-y-3">
          <div className="bg-muted p-2 sm:p-3 rounded text-xs sm:text-sm">
            <p className="font-mono text-foreground/70">
              <span className="font-bold">Batch ID:</span> EKN-2024-001
            </p>
          </div>
          <div className="bg-muted p-2 sm:p-3 rounded text-xs sm:text-sm">
            <p className="font-mono text-foreground/70">
              <span className="font-bold">Collection Date:</span> 2024-01-15
            </p>
          </div>
          <div className="bg-muted p-2 sm:p-3 rounded text-xs sm:text-sm">
            <p className="font-mono text-foreground/70">
              <span className="font-bold">Expected Readiness:</span> 2024-02-01
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "SMS Notification",
      content: (
        <div className="space-y-2 sm:space-y-3">
          <div className="bg-primary/10 p-3 sm:p-4 rounded border border-primary/30 text-xs sm:text-sm">
            <p className="text-foreground leading-relaxed">
              "Your EcoPlus fertiliser (Batch EKN-2024-001) is ready for collection at the distribution centre. Please
              bring your farmer registration card."
            </p>
          </div>
          <p className="text-xs text-foreground/60">SMS message example</p>
        </div>
      ),
    },
    {
      title: "Order Request",
      content: (
        <form className="space-y-2 sm:space-y-3">
          <input
            type="text"
            placeholder="Farmer Name"
            className="w-full px-3 py-2 border border-border rounded text-xs sm:text-sm bg-background"
            disabled
          />
          <input
            type="text"
            placeholder="Location/Village"
            className="w-full px-3 py-2 border border-border rounded text-xs sm:text-sm bg-background"
            disabled
          />
          <input
            type="text"
            placeholder="Crop Type (e.g. Maize, Tomato)"
            className="w-full px-3 py-2 border border-border rounded text-xs sm:text-sm bg-background"
            disabled
          />
          <input
            type="text"
            placeholder="Quantity Needed (Litres)"
            className="w-full px-3 py-2 border border-border rounded text-xs sm:text-sm bg-background"
            disabled
          />
        </form>
      ),
    },
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">Digital Features</h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
            Mock interfaces showing the digital coordination layer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">{feature.content}</CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}
