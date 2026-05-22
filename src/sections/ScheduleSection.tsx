import { keyStats } from '../data/campaign'

export function ScheduleSection() {
  return (
    <section className="bg-gradient-to-b from-[#fff3e6] via-[#fff7ef] to-[#fff9f2] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-[#f3d0a6] bg-white/80 p-6 shadow-[0_16px_50px_rgba(141,89,33,0.10)] sm:p-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {keyStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] bg-[#fff7f0] p-6 text-center shadow-sm shadow-[#d9b68f]/20">
                <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#b5651f]">{stat.label}</p>
                <p className="mt-4 text-lg font-bold leading-7 text-[#3e1f0b]">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
