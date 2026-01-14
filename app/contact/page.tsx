import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-muted to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">Get In Touch</h1>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Interested in partnering with EcoNutrientHub? Have questions about our pilot program? We'd love to hear
              from you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {/* Contact Info Cards */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-primary text-base sm:text-lg flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">💼</span> Partnerships
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    Exploring collaboration opportunities? We welcome partnerships with NGOs, AgriTech firms, and
                    development organisations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-primary text-base sm:text-lg flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">🌱</span> Pilots
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    Interested in piloting EcoNutrientHub in your community? Contact us to discuss feasibility and
                    next steps.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-primary text-base sm:text-lg flex items-center gap-2">
                    <span className="text-xl sm:text-2xl">📚</span> Learning More
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    Want to learn more about our approach and impact? Send us your questions and we'll provide detailed
                    information.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl">
              <ContactForm />
            </div>

            {/* Additional Info */}
            <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-muted rounded-lg border border-border text-center">
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3">Response Time</h3>
              <p className="text-xs sm:text-sm text-foreground/70">
                We aim to respond to all inquiries within 48 hours. For urgent matters, please indicate this in your
                message.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
