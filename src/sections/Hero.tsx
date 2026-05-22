import { motion } from 'framer-motion'
import { Button } from '../components/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fff1e9]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),transparent_25%),radial-gradient(circle_at_60%_15%,rgba(253,186,116,0.20),transparent_28%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(236,72,153,0.16),transparent_18%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.16),transparent_20%)]" />
      <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[#fed7aa]/80 blur-3xl" />
      <div className="absolute right-0 top-10 h-48 w-48 rounded-full bg-[#fda4af]/70 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#a5f3fc]/60 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-6 shadow-[0_35px_90px_rgba(168,85,255,0.18)] backdrop-blur-xl sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-4 inline-flex rounded-full border border-[#fcd34d] bg-[#fff2d4] px-4 py-2 text-xs font-bold uppercase tracking-[0.32em] text-[#b45309] shadow-sm shadow-orange-200/40">
              COCONUT SABLE 60周年
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl">
              あなたの<br />
              推しになりたい！
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              レシートを撮影して応募するだけ。推し活グッズをゲットして60周年を盛り上げよう！
            </p>
          </motion.div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.04 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
              <Button as="a" href="#details" className="w-full sm:w-auto">
                今すぐ応募する
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
              <Button as="a" href="#prizes" variant="secondary" className="w-full sm:w-auto">
                賞品をチェック
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="relative mt-12 h-[420px] sm:h-[520px]">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-8 top-16 h-20 w-20 rounded-full bg-[#fb7185]/90 shadow-[0_0_35px_rgba(251,113,133,0.28)]"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-10 top-28 h-16 w-16 rounded-full bg-[#38bdf8]/90 shadow-[0_0_30px_rgba(56,189,248,0.28)]"
          />
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[20%] top-8 h-14 w-14 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.8)]"
          />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[18%] top-10 h-10 w-10 rounded-full bg-white/90"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="absolute left-[6%] top-[25%] z-20 h-56 w-56 overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[0_22px_80px_rgba(156,163,175,0.24)]"
          >
            <img src="/images/characters/coconuts_sable_img.png" alt="Coconut Sable" className="h-full w-full object-contain" />
          </motion.div>

          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            src="/images/characters/cheese_img.png"
            alt="Cheese character"
            className="absolute left-0 top-[12%] h-56 w-auto"
          />

          <motion.img
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            src="/images/characters/butter_img.png"
            alt="Butter character"
            className="absolute right-0 top-[18%] h-64 w-auto"
          />

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.35 }}
            src="/images/hero/shin_meber.png"
            alt="Shin member"
            className="absolute left-[20%] bottom-0 h-72 w-auto md:left-[24%]"
          />

          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4 }}
            src="/images/characters/triplr_nuts_img.png"
            alt="Triple nuts character"
            className="absolute right-[12%] bottom-0 h-72 w-auto md:right-[18%]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute left-[4%] bottom-[10%] h-24 w-24 rounded-[2rem] bg-[#fde68a]/90 shadow-[0_20px_60px_rgba(251,191,36,0.3)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="absolute right-[8%] top-[12%] h-20 w-20 rounded-[1.75rem] bg-[#c7d2fe]/90 shadow-[0_16px_50px_rgba(99,102,241,0.2)]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-[50%] top-[15%] h-10 w-10 -translate-x-1/2 rounded-full bg-[#fbcfe8] shadow-[0_0_18px_rgba(251,203,232,0.55)]"
          />
        </div>
      </div>
    </section>
  )
}
