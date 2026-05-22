export function RulesSection() {
  return (
    <section id="rules" className="bg-[#fff6ec] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-[#e9d1b0] bg-[#fff9f3] p-8 shadow-[0_30px_90px_rgba(149,97,35,0.10)] sm:p-10">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-[#8b4513] bg-[#fff5dd] px-6 py-3 text-sm font-semibold text-[#6b3c11] shadow-sm shadow-[#d9b788]/30">
              応募規約
            </div>
            <p className="mt-8 text-sm leading-7 text-slate-600">
              応募に関する重要事項を必ずご確認ください。応募規約に同意のうえ、お申し込みください。
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_0.9fr] lg:items-start">
            <div className="space-y-6 rounded-[2rem] border border-[#f0d5b4] bg-white p-8 shadow-[0_24px_80px_rgba(191,117,23,0.10)]">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-950">応募要項</h3>
                <div className="rounded-[1.75rem] bg-[#fff4e5] p-5 text-sm leading-7 text-slate-700">
                  <p className="font-semibold text-slate-900">応募期間</p>
                  <p className="mt-2">2025年6月30日～2025年10月1日 23:59</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.75rem] bg-[#fff4e5] p-5 text-sm leading-7 text-slate-700">
                  <p className="font-semibold text-slate-900">対象商品</p>
                  <p className="mt-2">ココナッツサブレ各種のうち、対象商品を2個以上ご購入のレシートが必要です。</p>
                </div>
                <div className="rounded-[1.75rem] bg-[#fff4e5] p-5 text-sm leading-7 text-slate-700">
                  <p className="font-semibold text-slate-900">応募方法</p>
                  <p className="mt-2">専用フォームから必要事項を入力し、レシート画像をアップロードして応募してください。</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9c4a00]">注意事項</p>
                <ul className="space-y-3 text-sm leading-7 text-slate-700">
                  <li>レシートに購入日・商品名・購入数量・販売店名がはっきり記載されていること。</li>
                  <li>画像は jpeg/jpg/gif/png、5MB以下で送信してください。</li>
                  <li>コピー・複製・改ざんされたレシートは無効となります。</li>
                  <li>応募はお一人様1回ずつ、複数回応募可能です。</li>
                </ul>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#f4d7b2] bg-[#fff2dd] p-8 shadow-[0_24px_80px_rgba(197,120,28,0.10)]">
              <h4 className="text-xl font-semibold text-slate-950">応募規約のお願い</h4>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <p>
                  本キャンペーンの応募には、応募規約への同意が必要です。応募後の取り消しはできませんので、内容をよくお読みください。
                </p>
                <p>
                  応募内容に不備があった場合、当社の判断で応募を無効とさせていただくことがあります。
                </p>
                <p>
                  当選者への賞品発送は、応募時にご入力いただいた住所情報をもとに行います。住所の誤りにご注意ください。
                </p>
              </div>
              <div className="mt-6 rounded-[1.75rem] bg-[#fff4e5] p-5 text-sm leading-7 text-slate-700">
                <p className="font-semibold text-slate-900">お問い合わせ</p>
                <p className="mt-2">応募規約やレシートの取り扱いについては、お問い合わせ窓口までご連絡ください。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
