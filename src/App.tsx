import { Header } from './sections/Header'
import { TopMainImage } from './sections/TopMainImage'
import { Hero } from './sections/Hero'
import { AnnouncementSection } from './sections/AnnouncementSection'
import { PromoDateSection } from './sections/PromoDateSection'
import { NewsSection } from './sections/NewsSection'
import { CampaignDetails } from './sections/CampaignDetails'
import { TargetProductsSection } from './sections/TargetProductsSection'
import { ApplySection } from './sections/ApplySection'
import { InquirySection } from './sections/InquirySection'
import { MembersSection } from './sections/MembersSection'
import { PrizesSection } from './sections/PrizesSection'
import { GameSection } from './sections/GameSection'
import { RulesSection } from './sections/RulesSection'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#fff7ee] text-slate-900">
      <Header />
      <main>
        <TopMainImage />
        <PromoDateSection />
        <NewsSection />
        <AnnouncementSection />
        <Hero />
        <CampaignDetails />
        <MembersSection />
        <PrizesSection />
        <TargetProductsSection />
        <ApplySection />
        <RulesSection />
        <GameSection />
        <InquirySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
