import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import CultureSection from "@/components/culture-section"
import HowItWorksSection from "@/components/how-it-works-section"
import DigitalFeaturesSection from "@/components/digital-features-section"
import SafetyMeasuresSection from "@/components/safety-measures-section"
import ImpactSection from "@/components/impact-section"
import TrustSection from "@/components/trust-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <CultureSection />
        <HowItWorksSection />
        <DigitalFeaturesSection />
        <SafetyMeasuresSection />
        <ImpactSection />
        <TrustSection />
      </main>
      <Footer />
    </>
  )
}
