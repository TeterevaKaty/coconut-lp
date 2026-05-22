import timeLimitBg from '../assets/time_lim_bgr.png'

export function PromoDateSection() {
  return (
    <section className="relative overflow-hidden bg-[#321f12] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${timeLimitBg})` }}
      />
      <div className="absolute inset-0 bg-[#321f12]/95" />

      <div className="relative mx-auto max-w-5xl px-5 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto flex max-w-3xl flex-col gap-3 text-white">
          <div className="flex flex-col gap-3 rounded-[2rem] border border-white/30 bg-[#321f12]/90 px-4 py-3 sm:flex-row sm:items-center sm:px-5 sm:py-4">
            <span className="inline-flex items-center rounded-full border border-white/70 bg-[#2d190d] px-3 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white">
              レシート有効期間
            </span>
            <p className="text-lg font-black leading-tight tracking-[-0.03em] sm:text-xl">
              2025年6月23日（月）〜2025年10月1日（水）
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-[2rem] border border-white/30 bg-[#321f12]/90 px-4 py-3 sm:flex-row sm:items-center sm:px-5 sm:py-4">
            <span className="inline-flex items-center rounded-full border border-white/70 bg-[#2d190d] px-3 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white">
              応募締切
            </span>
            <p className="text-lg font-black leading-tight tracking-[-0.03em] sm:text-xl">
              2025年10月1日（水）23:59まで
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
