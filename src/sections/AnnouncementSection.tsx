import timeLimitBg from '../assets/time_lim_bgr.png'

export function AnnouncementSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${timeLimitBg})`,
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-10">

        {/* Row 1 */}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex h-[72px] w-[360px] items-center justify-center rounded-full border-4 border-white bg-transparent">
            <span className="text-[32px] font-black tracking-tight text-white">
              レシート有効期間
            </span>
          </div>

          <p className="text-center text-[64px] font-black leading-none tracking-tight text-white">
            2025年6月23日（月）〜2025年10月1日（水）
          </p>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex h-[72px] w-[360px] items-center justify-center rounded-full border-4 border-white bg-transparent">
            <span className="text-[32px] font-black tracking-tight text-white">
              応募締切
            </span>
          </div>

          <p className="text-center text-[64px] font-black leading-none tracking-tight text-white">
            2025年10月1日（水）23:59まで
          </p>
        </div>

      </div>
    </section>
  )
}