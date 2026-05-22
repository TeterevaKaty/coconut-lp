import { Header } from './sections/Header'
import { TopMainImage } from './sections/TopMainImage'
import { Hero } from './sections/Hero'
import { AnnouncementSection } from './sections/AnnouncementSection'
import { CampaignDetails } from './sections/CampaignDetails'
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
        <AnnouncementSection />
        <MembersSection />
        <Hero />
        <CampaignDetails />
        <InquirySection />
        <PrizesSection />
        <GameSection />
        <RulesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App