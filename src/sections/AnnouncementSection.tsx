import timeLimitBg from '../assets/time_lim_bgr.png'
import cocoaText from '../assets/header/coconatsusabure.png'

export function AnnouncementSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage: `url(${timeLimitBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/10" />
      <div className="mx-auto relative max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#f6cfa8] bg-white/80 p-6 shadow-[0_18px_70px_rgba(141,89,33,0.12)] sm:p-8 backdrop-blur-sm">
          <div className="absolute -left-16 top-14 h-72 w-72 rounded-full bg-[#f7b168]/30" />
          <div className="absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#ffcc79]/20" />
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-[#fff1d9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#a65814] shadow-sm shadow-[#f2b564]/30">
                ココナッツサブレ60周年
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                ココナッツサブレに新たなメンバーが仲間入り！！
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-700">
                より華やかになったメンバーたちが勢ぞろい。推し活がもっと楽しくなる新情報をお見逃しなく！
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#members"
                  className="inline-flex rounded-full bg-[#d97d20] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#d97d20]/20 transition hover:bg-[#bc5a0f]"
                >
                  メンバーを見る
                </a>
                <a
                  href="#prizes"
                  className="inline-flex rounded-full border border-[#d97d20] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#d97d20] transition hover:bg-[#f8e3cd]"
                >
                  賞品を見る
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[#f2ceb0] bg-[#fff8f0] p-6 shadow-sm shadow-slate-200/40 sm:p-8">
              <div className="absolute -right-10 top-6 h-28 w-28 rounded-full bg-orange-200/70 blur-3xl" />
              <img src={cocoaText} alt="ココナッツサブレ" className="mx-auto max-h-20 w-auto" />
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.75rem] border border-[#f4d3a2] bg-[#fff4e0] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">新登場</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">新メンバー発表</p>
                </div>
                <div className="rounded-[1.75rem] border border-[#e8d1c0] bg-[#fef2e8] p-5 text-sm leading-7 text-slate-700">
                  推し活がより盛り上がる、新しい仲間が続々登場。特別キャンペーンをチェックしよう。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
