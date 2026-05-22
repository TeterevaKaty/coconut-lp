type InfoTileProps = {
  label: string
  value: string
}

export function InfoTile({ label, value }: InfoTileProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">{label}</p>
      <p className="mt-3 text-lg font-semibold text-slate-900 md:text-xl">{value}</p>
    </div>
  )
}
