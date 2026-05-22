type MemberCardProps = {
  name: string
  role: string
  description: string
  toneClass: string
  imageSrc?: string
}

export function MemberCard({ name, role, description, toneClass, imageSrc }: MemberCardProps) {
  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-[#f0d7b3] bg-white p-6 shadow-[0_18px_40px_rgba(141,89,33,0.08)]">
      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[2rem] bg-[#f9e0c1]/80" />
      {imageSrc ? (
        <div className="overflow-hidden rounded-[1.75rem] bg-[#fdf5ea] p-4">
          <img src={imageSrc} alt={name} className="mx-auto h-44 w-auto object-contain" />
        </div>
      ) : null}
      <div className={`relative mt-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneClass}`}>
        {name}
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-slate-950">{role}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  )
}
