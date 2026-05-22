import coconutImage from '../assets/characters/coconuts_sable_img.png'
import tripleNutsImage from '../assets/characters/triplr_nuts_img.png'
import butterImage from '../assets/characters/butter_img.png'

const cardImages = [coconutImage, tripleNutsImage, butterImage]

export function GameSection() {
  return (
    <section id="game" className="relative overflow-hidden bg-[#fff1e2] py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,_rgba(251,207,141,0.35),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#e87c72]">待って無理しんどい…</p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-[#8b3d2d] sm:text-5xl">
            サブレのゲームに挑戦しよう！
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
            サブレ愛が試される！？神経衰弱ゲーム登場。正解数に応じてメンバー画像をGET！
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-center">
          <div className="relative mx-auto max-w-[420px] rounded-[3rem] border border-[#f2cba5] bg-[#ffefd8] p-5 shadow-[0_30px_90px_rgba(186,131,58,0.16)] sm:p-6">
            <div className="absolute left-4 top-4 h-10 w-10 rounded-full bg-[#fcd38d]/70" />
            <div className="rounded-[2.5rem] border border-[#f7d8b4] bg-[#fde7c4] p-5 shadow-inner shadow-[#c6965b]/10">
              <div className="flex items-center justify-between rounded-[2rem] bg-[#f9d6a2] px-4 py-3 text-sm font-semibold text-[#7a3d1a] shadow-sm shadow-[#d3a96e]/40">
                <span>神経衰弱</span>
                <span>6/14 17:00まで</span>
              </div>
              <div className="mt-6 h-[420px] rounded-[2rem] bg-[#fff8ed] p-4 shadow-[inset_0_8px_18px_rgba(255,255,255,0.8)]">
                <div className="h-full rounded-[1.75rem] bg-[#fff3da] p-4">
                  <div className="grid h-full grid-cols-4 gap-3">
                    {Array.from({ length: 16 }).map((_, index) => (
                      <div key={index} className="rounded-[1.25rem] bg-[#f5c78b] shadow-[0_8px_20px_rgba(187,104,44,0.16)]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {cardImages.map((src, index) => (
                <div key={index} className="overflow-hidden rounded-[2rem] border border-[#f3d3b0] bg-white p-3 shadow-[0_18px_45px_rgba(149,97,35,0.12)]">
                  <img src={src} alt={`member card ${index + 1}`} className="h-44 w-full object-contain" />
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-[#f1c89d] bg-[#fff5e5] p-8 shadow-[0_24px_80px_rgba(191,117,23,0.10)]">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c25a3c]">正解数に応じてメンバー画像をGET！</p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">ゲームスタート</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">画面をタップしてすぐに遊べる。友だちとスコアを競んで推し活を盛り上げよう。</p>
                </div>
                <div className="space-y-2 text-right">
                  <a
                    href="#"
                    className="inline-flex rounded-full bg-[#cc2f4c] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#cc2f4c]/30 transition hover:bg-[#9d1f38]"
                  >
                    START
                  </a>
                  <p className="text-xs text-slate-600">ゲームプレイ期間：11月14日（金）17：00まで</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
