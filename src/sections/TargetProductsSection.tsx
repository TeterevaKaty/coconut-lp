import { products } from '../data/campaign'

export function TargetProductsSection() {
  const targetProducts = products.slice(0, 4)

  return (
    <section id="products" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-bold text-slate-900 shadow-sm shadow-slate-200">
            <span className="mr-2 block text-lg leading-none">対象商品</span>
            <span className="h-[1px] w-8 rounded-full bg-slate-200" />
          </div>
          <p className="mt-8 text-lg font-semibold tracking-[-0.02em] text-slate-900 sm:text-xl">
            下記の対象商品を2個以上ご購入のレシートでご応募いただけます。
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {targetProducts.map((product) => (
            <div key={product} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fff8ef] p-6 shadow-lg shadow-slate-200/40">
              <div className="rounded-[1.75rem] border border-[#8b4513]/10 bg-gradient-to-br from-[#fff4e8] via-[#fff6f0] to-[#fff9f5] p-5">
                <div className="flex h-40 items-end justify-center rounded-[1.5rem] bg-[#fef3e7] text-[0.75rem] font-semibold text-slate-500 shadow-inner shadow-slate-200/60">
                  <span>商品パッケージ</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-start gap-4">
                <h3 className="text-base font-bold text-slate-900">{product}</h3>
                <button className="inline-flex items-center rounded-full bg-[#42210b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#593217]">
                  詳しく見る
                  <span className="ml-3 text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-3 rounded-[2rem] border border-slate-200 bg-[#f8f3ea] p-6 text-sm leading-6 text-slate-600 sm:p-8">
          <p>※キャンペーン告知がない対象商品でもご応募いただけます。</p>
          <p>※ココナッツサブレ〈あんバター〉、ココナッツサブレ〈ぎゅうにゅう味〉もプレゼントキャンペーン対象商品に含まれます。</p>
          <p>※一部のミニサイズ商品や特定のセット商品は対象外です。詳しくは応募規約をご確認ください。</p>
        </div>
      </div>
    </section>
  )
}
