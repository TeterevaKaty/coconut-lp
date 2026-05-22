import { motion } from 'framer-motion'

export function InquirySection() {
  return (
    <section className="relative overflow-hidden bg-[#2439B8] text-white">
      <div className="absolute inset-x-0 top-0 h-24 bg-[#f7ecd0]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-24 sm:px-8 sm:pb-20">
        <div className="absolute right-6 top-6">
          <motion.a
            whileHover={{ y: -2, scale: 1.02 }}
            href="#top"
            className="inline-flex items-center rounded-full border-4 border-white bg-white px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#2439B8] shadow-lg shadow-slate-950/20"
          >
            <img src="/images/ui/toiawase-top-button.svg" alt="TOPへ戻る" className="h-10 w-auto" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[3rem] border-4 border-[#f7e2c4] bg-[#2439B8]/95 px-6 py-10 shadow-[0_30px_90px_rgba(0,0,0,0.25)] sm:px-10 sm:py-14"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(252,211,77,0.22),transparent_60%)]" />
          <div className="absolute left-8 top-14 h-24 w-24 opacity-90">
            <img src="/images/decorations/toiawase-cookie-1.svg" alt="クッキー装飾" className="h-full w-full object-contain" />
          </div>
          <div className="absolute right-8 top-24 h-28 w-28 opacity-90">
            <img src="/images/decorations/toiawase-cookie-2.svg" alt="クッキー装飾" className="h-full w-full object-contain" />
          </div>
          <div className="absolute left-1/2 top-6 h-12 w-12 -translate-x-1/2 opacity-90">
            <img src="/images/decorations/toiawase-burst.svg" alt="デコレーション" className="h-full w-full object-contain" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex rounded-[3rem] bg-white px-8 py-4 text-center shadow-[0_24px_70px_rgba(255,255,255,0.16)] sm:px-10">
              <span className="block text-3xl font-black tracking-[-0.05em] text-[#2439B8] sm:text-4xl">お問い合わせ</span>
            </div>

            <div className="mt-3 h-3 w-40 rounded-full bg-gradient-to-r from-[#facc15] via-[#f97316] to-[#ec4899] shadow-[0_0_30px_rgba(252,211,77,0.45)]" />

            <p className="mt-8 text-sm uppercase tracking-[0.32em] text-[#f9f1df]">お気軽にどうぞ！</p>
            <p className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
              受付は24時間いつでもOK
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <div className="flex items-center gap-3 rounded-full bg-[#f9f1df] px-4 py-2 text-sm font-semibold text-[#2439B8] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
                <img src="/images/ui/toiawase-phone-badge.svg" alt="phone badge" className="h-10 w-auto" />
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold tracking-[-0.06em] text-white drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)] sm:text-6xl">0120-105-251</p>
                <p className="mt-2 text-sm text-[#d8d5e0]">通話料無料・年中無休</p>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-[#e9e6ee] sm:text-base">
              お問い合わせはお気軽にどうぞ。レシート応募や賞品に関するご質問など、すぐに担当者が対応いたします。
            </p>

            <p className="mt-8 text-xs leading-6 text-[#c9c6d6]">
              ※混雑状況によりお繋ぎできない場合がございます。予めご了承ください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
