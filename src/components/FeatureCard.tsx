type FeatureCardProps = {
  title: string
  description: string
  label?: string
}

export function FeatureCard({ title, description, label }: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
      {label ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600">{label}</p> : null}
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  )
}
