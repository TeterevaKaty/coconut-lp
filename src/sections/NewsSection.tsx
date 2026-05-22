import heroBg from '../assets/hero/hero_bgr.png'
import shinMember from '../assets/hero/shin_meber.png'
import cheeseImage from '../assets/hero/cheese_img.png'
import cheesePack from '../assets/hero/cheese.png'
import cheeseImgBg from '../assets/hero/cheese_img_bgr.png'

export function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-[#fef3c7]/80" />
          <div className="absolute right-0 top-8 h-24 w-24 rounded-full bg-[#ede9fe]/80" />
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex items-center rounded-full border border-[#f59e0b] bg-[#ffedd5] px-3 py-1 text-xs font-bold uppercase tracking-[0.35em] text-[#b45309]">
              NEWS
            </span>
            <span className="inline-flex rounded-full bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#ef4444] px-4 py-2 text-sm font-bold uppercase tracking-[0.24em] text-white shadow-[0_10px_30px_rgba(251,146,60,0.25)]">
              ココナッツサブレ60周年を記念して
            </span>
          </div>
        </div>

        <div className="relative mb-24">
          <div className="absolute left-0 top-10 h-20 w-20 rounded-full bg-[#fbbf24]/40" />
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b] bg-[#fff7ed] px-4 py-2 text-sm font-bold text-[#b45309]">
            新メンバー登場！
          </div>
          <h1 className="mt-6 max-w-[860px] text-5xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-[4.75rem] lg:text-[5.5rem]">
            <span className="block text-[#0ea5e9]">ココナッツサブレに第4の</span>
            <span className="block bg-gradient-to-r from-[#f97316] via-[#f43f5e] to-[#8b5cf6] bg-clip-text text-transparent">
              新たなメンバーが仲間入り！！
            </span>
          </h1>
        </div>

        <div className="relative min-h-[740px]">
          <div className="absolute left-[-180px] top-20 h-[720px] w-[560px] overflow-hidden">
            <div className="absolute inset-0 rounded-[4rem] bg-[#7c2d12]/10" />
            <img
              src={shinMember}
              alt="新メンバー"
              className="relative z-10 h-full w-auto object-contain"
            />
          </div>

          <div className="absolute right-0 top-32 w-[360px] sm:w-[420px]">
            <img
              src={cheeseImgBg}
              alt="product decoration"
              className="absolute right-0 top-0 h-[180px] w-auto opacity-90"
            />
            <img
              src={cheeseImage}
              alt="product package"
              className="relative z-20 mx-auto h-[210px] w-auto object-contain"
            />
            <img
              src={cheesePack}
              alt="cheese title"
              className="relative z-20 mx-auto mt-4 h-[84px] w-auto"
            />
            <div className="mt-6 rounded-[1.75rem] border border-[#fecaca] bg-[#fef2f2]/90 p-5 text-right">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#b91c1c]">未来を担う</p>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.35em] text-[#b91c1c]">ニュージェネレーション</p>
              <p className="mt-4 text-sm leading-6 text-slate-700">
                期間限定ベイクドチーズコラボパッケージが登場。明るく弾ける新メンバーの魅力を感じて。
              </p>
            </div>
            <div className="mt-6 flex justify-end">
              <div className="rounded-full border border-[#f87171] bg-white px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-[#b91c1c]">
                2025年6月30日発売
              </div>
            </div>
          </div>

          <div className="absolute right-[22%] top-[220px] h-3 w-24 -rotate-[18deg] rounded-full bg-[#fed7aa] opacity-90" />
          <div className="absolute right-[17%] top-[180px] h-2 w-16 rotate-[22deg] rounded-full bg-[#fbcfe8] opacity-95" />
          <div className="absolute right-[12%] top-[290px] h-3 w-20 -rotate-[12deg] rounded-full bg-[#bae6fd] opacity-90" />
          <div className="absolute left-[44%] top-[340px] h-3 w-12 rotate-[18deg] rounded-full bg-[#fde68a] opacity-90" />
          <div className="absolute left-[32%] top-[450px] h-2 w-14 -rotate-[30deg] rounded-full bg-[#fde68a] opacity-90" />
        </div>
      </div>
    </section>
  )
}
