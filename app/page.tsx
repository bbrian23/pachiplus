import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import WhatWeDoSection from "@/components/what-we-do-section"
import HowItWorksSection from "@/components/how-it-works-section"
import DigitalFeaturesSection from "@/components/digital-features-section"
import ImpactSection from "@/components/impact-section"
import TrustSection from "@/components/trust-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <HowItWorksSection />
        <DigitalFeaturesSection />
        <ImpactSection />
        <TrustSection />
      </main>
    </>
  )
}
