import { prizes } from '../data/campaign'

const prizeHeaders = [
  { count: '120名様', note: '各色30名' },
  { count: '100名様', note: '' },
  { count: '100名様', note: '' },
]

export function PrizesSection() {
  return (
    <section id="prizes" className="relative overflow-hidden bg-[#061b5b] px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_40%),radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.22),transparent_30%)]" />
      <div className="absolute left-12 top-12 h-24 w-24 rounded-full bg-[#38bdf8]/20 blur-2xl" />
      <div className="absolute right-16 top-24 h-28 w-28 rounded-full bg-[#f472b6]/20 blur-2xl" />
      <div className="absolute right-10 bottom-10 h-20 w-20 rounded-full bg-[#fde68a]/20 blur-2xl" />
      <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#a5b4fc]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#f8b4d0]">
            合計320名に当たる！
          </p>
          <h2 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">
            ココナッツサブレの
            <span className="block bg-gradient-to-r from-[#fb7185] via-[#f59e0b] to-[#facc15] bg-clip-text text-transparent">
              推し活グッズをゲットしよう！
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#cbd5ff] sm:text-base">
            ココナッツサブレ対象商品いずれか2個を含むお買い上げのレシート等で応募しよう！
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {prizes.map((prize, index) => (
            <div key={prize.title} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-sm sm:p-8">
              <div className="absolute -left-8 top-8 h-20 w-20 rounded-full bg-[#fef08a]/30" />
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#38bdf8]/20" />
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.3em] text-[#fde68a]">
                    <span>{prizeHeaders[index]?.count || '100名様'}</span>
                    {prizeHeaders[index]?.note ? <span className="text-xs text-[#cbd5ff]">({prizeHeaders[index].note})</span> : null}
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">
                    {prize.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#e2e8f0]">{prize.subtitle}</p>
                  <p className="max-w-xl text-sm leading-6 text-[#cbd5ff]">{prize.description}</p>
                </div>
                <div className="relative mx-auto flex h-[180px] w-full max-w-[320px] items-center justify-center rounded-[2rem] border border-white/20 bg-slate-950/20 p-4 shadow-[0_16px_40px_rgba(15,23,42,0.3)]">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <div className="h-24 w-24 rounded-[1.5rem] bg-white/10" />
                  <span className="relative text-xs uppercase tracking-[0.35em] text-[#cbd5ff]">
                    商品画像
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#rules"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.35em] text-white transition hover:bg-white/20"
          >
            応募する
            <span className="text-xl">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
