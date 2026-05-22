import { campaign } from '../data/campaign'

const steps = [
  {
    label: 'ステップ01',
    title: '対象商品を2個以上購入',
    description: '対象商品のレシートを撮影してください。購入日・商品名・購入個数・販売店名が確認できることが必要です。',
  },
  {
    label: 'ステップ02',
    title: 'レシートをアップロード',
    description: '応募フォームに必要事項を入力し、レシート画像を送信してください。',
  },
  {
    label: 'ステップ03',
    title: '抽選でプレゼント',
    description: '応募完了後、抽選で推し活グッズをプレゼントします。結果を楽しみにお待ちください。',
  },
]

const invalidExamples = [
  'はっきり見えない',
  '斜めになっている',
  'レシートが切れている',
  'くしゃくしゃになっている',
]

export function ApplySection() {
  return (
    <section id="apply" className="bg-[#fff8ed] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#8b4513] bg-white px-6 py-3 text-sm font-semibold text-[#5a3714] shadow-sm shadow-[#d8b29b]/30">
            応募方法
          </div>
          <p className="mt-8 text-lg font-semibold tracking-[-0.02em] text-slate-900 sm:text-xl">
            以下の手順で、対象商品2個以上ご購入のレシートを送信してご応募ください。
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.label} className="rounded-[2rem] border border-[#eed4b3] bg-white p-6 shadow-[0_20px_60px_rgba(149,97,35,0.12)]">
              <div className="inline-flex items-center rounded-full bg-[#fff3db] px-4 py-2 text-sm font-bold text-[#9c4a00] shadow-sm shadow-[#e0b886]/30">
                {step.label}
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#f1dfc5] bg-[#fff6e9] p-6 shadow-[0_24px_80px_rgba(186,131,58,0.08)] sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.28em] text-[#9c4a00]">こんなレシートはNG</h4>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                下記のようなレシート画像では応募できない場合があります。はっきりと見える写真で送信してください。
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {invalidExamples.map((example) => (
                <div key={example} className="rounded-2xl border border-[#ebd9bc] bg-white/80 px-3 py-2 text-center text-xs font-semibold text-slate-700 shadow-sm shadow-[#e9d8c4]/40">
                  {example}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#8b4513] bg-[#8b4513]/5 p-6 text-center shadow-[0_20px_60px_rgba(149,97,35,0.12)]">
          <p className="text-sm leading-7 text-slate-700">
            ※応募には対象商品2個以上をご購入のレシートが必要です。複数枚のレシートをまとめて送信することもできます。
          </p>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-[#5a3714] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#553715]/30 transition hover:bg-[#40260f]">
            {campaign.ctaPrimary}
          </button>
        </div>
      </div>
    </section>
  )
}
