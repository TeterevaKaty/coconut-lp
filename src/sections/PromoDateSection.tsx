import timeLimitBg from '../assets/time_lim_bgr.png'

export function PromoDateSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${timeLimitBg})` }}
    >
      <div className="mx-auto flex max-w-[980px] flex-col gap-4 px-4 py-7">
        <div className="grid items-center gap-5 md:grid-cols-[230px_1fr]">
          <div className="flex h-[48px] items-center justify-center rounded-full border-[2px] border-white">
            <span className="text-[20px] font-black text-white">
              レシート有効期間
            </span>
          </div>

          <p className="text-[34px] font-black leading-tight tracking-tight text-white md:text-[42px]">
            2025年6月23日（月）〜2025年10月1日（水）
          </p>
        </div>

        <div className="grid items-center gap-5 md:grid-cols-[230px_1fr] md:pl-[95px]">
          <div className="flex h-[48px] items-center justify-center rounded-full border-[2px] border-white">
            <span className="text-[20px] font-black text-white">
              応募締切
            </span>
          </div>

          <p className="text-[34px] font-black leading-tight tracking-tight text-white md:text-[42px]">
            2025年10月1日（水）23:59まで
          </p>
        </div>
      </div>
    </section>
  )
}