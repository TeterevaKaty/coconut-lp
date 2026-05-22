import { motion } from 'framer-motion'
import { campaign, keyStats, products } from '../data/campaign'

export function CampaignDetails() {
  return (
    <section id="details" className="relative overflow-hidden bg-[#fff7f0] py-16 sm:py-24">
      <img
        src="/images/hero/campaign-badge.svg"
        alt="Campaign badge"
        className="pointer-events-none absolute right-6 top-6 h-28 w-28 opacity-80 sm:right-12 sm:top-10"
      />
      <img
        src="/images/stickers/sparkle.svg"
        alt="Sparkle decoration"
        className="pointer-events-none absolute left-8 top-16 h-20 w-20 opacity-90"
      />
      <img
        src="/images/stickers/confetti.svg"
        alt="Confetti decoration"
        className="pointer-events-none absolute right-10 bottom-10 h-24 w-24 opacity-70"
      />
      <img
        src="/images/characters/char-left.svg"
        alt="Character decoration"
        className="pointer-events-none absolute left-0 top-1/2 h-56 w-auto -translate-y-1/2 opacity-80"
      />
      <img
        src="/images/characters/char-right.svg"
        alt="Character decoration"
        className="pointer-events-none absolute right-0 top-28 h-64 w-auto opacity-80"
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <header className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-[#fcd34d] bg-[#fff7d6] px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#b45309] shadow-sm shadow-orange-200/30">
            キャンペーン概要
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mt-6 text-3xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl"
          >
            60周年限定の推し活キャンペーン
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            レシートを撮影して応募すると、限定の推し活グッズを抽選でプレゼント。参加はとても簡単で、楽しいキャンペーン体験をお届けします。
          </motion.p>
        </header>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
          <motion.article
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[#fed7aa] bg-gradient-to-br from-[#fff4ed] to-[#fff0e3] p-8 shadow-[0_30px_90px_rgba(249,115,22,0.16)]"
          >
            <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[#fde68a]/70 blur-3xl" />
            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-[#fee2e2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#be123c] shadow-sm shadow-pink-200/50">
                参加の流れ
              </span>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">購入・応募・当選</h3>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-slate-700">
                <li className="rounded-[1.75rem] bg-white/90 p-4 shadow-sm shadow-slate-200/40">
                  <strong className="block text-base font-semibold text-slate-950">STEP 1</strong>
                  対象商品を2個以上ご購入ください。
                </li>
                <li className="rounded-[1.75rem] bg-white/90 p-4 shadow-sm shadow-slate-200/40">
                  <strong className="block text-base font-semibold text-slate-950">STEP 2</strong>
                  レシートを撮影して応募フォームに送信します。
                </li>
                <li className="rounded-[1.75rem] bg-white/90 p-4 shadow-sm shadow-slate-200/40">
                  <strong className="block text-base font-semibold text-slate-950">STEP 3</strong>
                  抽選で推し活グッズをゲット！
                </li>
              </ul>
            </div>
          </motion.article>

          <div className="space-y-6">
            <motion.article
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              className="overflow-hidden rounded-[2rem] border border-[#dbeafe] bg-[#eff6ff] p-6 shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
            >
              <h3 className="text-xl font-semibold text-slate-950">キャンペーンのポイント</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{campaign.heroHelp}</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="overflow-hidden rounded-[2rem] border border-[#fed7aa] bg-[#fff7ed] p-6 shadow-[0_20px_60px_rgba(251,191,36,0.16)]"
            >
              <h3 className="text-xl font-semibold text-slate-950">抽選で当たる賞品</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{campaign.prizeDescription}</p>
            </motion.article>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {keyStats.map((stat) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="rounded-[2rem] bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">{stat.label}</p>
              <p className="mt-4 text-lg font-semibold text-slate-950">{stat.value}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <motion.article
              key={product}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-[2rem] bg-gradient-to-br from-[#fff4e3] to-[#fff1f0] p-6 text-slate-950 shadow-[0_24px_60px_rgba(251,146,60,0.16)]"
            >
              <h4 className="text-base font-semibold">{product}</h4>
              <p className="mt-3 text-sm leading-6 text-slate-700">限定の推し活アイテムがもらえる対象商品です。</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
