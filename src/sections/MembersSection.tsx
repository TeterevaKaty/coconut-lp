import { campaign, members } from '../data/campaign'
import { MemberCard } from '../components/MemberCard'
import { SectionHeading } from '../components/SectionHeading'
import butterImage from '../assets/characters/butter_img.png'
import coconutImage from '../assets/characters/coconuts_sable_img.png'
import tripleNutsImage from '../assets/characters/triplr_nuts_img.png'
import cookieBlueImage from '../assets/characters/cookie-blue.png'

const memberImages = [coconutImage, tripleNutsImage, butterImage, cookieBlueImage]

export function MembersSection() {
  return (
    <section id="members" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          title="新たなメンバーが仲間入り"
          description={campaign.memberSectionDescription}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {members.map((member, index) => (
            <MemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
              toneClass={member.color}
              imageSrc={memberImages[index]}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
