type PrizeCardProps = {
  title: string
  subtitle: string
  description: string
}

export function PrizeCard({ title, subtitle, description }: PrizeCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#f0d5b1] bg-gradient-to-b from-white via-[#fff8f0] to-white p-6 shadow-[0_22px_60px_rgba(141,89,33,0.08)] transition hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(141,89,33,0.12)]">
      <div className="inline-flex rounded-full bg-[#f7d6af] px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#9e4a0d] shadow-sm shadow-[#d39b63]/20">
        {subtitle}
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  )
}
