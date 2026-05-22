import companeBg from '../assets/compane_bgr.png'
import { PrizeCard } from '../components/PrizeCard'
import { prizes } from '../data/campaign'

const timeline = [
  { label: '応募締切', value: '2025年10月1日 23:59' },
  { label: '抽選発表', value: '2025年10月中旬頃' },
  { label: '賞品発送', value: '2025年10月下旬頃' },
]

export function PrizesSection() {
  return (
    <section
      id="prizes"
      className="relative overflow-hidden py-16 sm:py-24 text-white"
      style={{
        backgroundImage: `url(${companeBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/20" />
      <div className="mx-auto relative max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#a7c1ff]">
            合計320名に当たる！
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            推し活グッズをゲットしよう
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#d9e4ff]">
            抽選で人気の推し活アイテムをプレゼント。たくさんのアイテムから、あなたの推しスタイルを選んでください。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {prizes.map((prize) => (
            <PrizeCard key={prize.title} title={prize.title} subtitle={prize.subtitle} description={prize.description} />
          ))}
        </div>

        <div className="mt-14 rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">応募の流れ</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d9e4ff]">
                まずは対象商品を購入し、レシートをアップロード。あとは抽選結果を楽しみに待つだけ！
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2b4aa6] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#152353]/40">
              3ステップで応募完了
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {timeline.map((item) => (
              <div key={item.label} className="rounded-[1.75rem] bg-white/10 p-5 text-center backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b7d0ff]">{item.label}</p>
                <p className="mt-4 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
