import heroBg from '../assets/hero/hero_bgr.png'
import news from '../assets/hero/news.png'
import anniversary from '../assets/hero/60_nen.png'
import shinMember from '../assets/hero/shin_meber.png'
import cheeseCharacter from '../assets/hero/cheese_coocke.png'
import cheeseImage from '../assets/hero/cheese_img.png'
import cheeseLogo from '../assets/hero/cheese.png'
import cheeseBg from '../assets/hero/cheese_bgr.png'

export function NewsSection() {
  return (
    <section
      className="relative min-h-[1100px] overflow-hidden bg-white bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="relative mx-auto max-w-[1100px] px-4 pt-12">
        <img
          src={news}
          alt="NEWS"
          className="absolute left-4 top-8 w-[150px]"
        />

        <img
          src={anniversary}
          alt="60周年を記念して"
          className="absolute left-[260px] top-[80px] w-[430px]"
        />

        <img
          src={shinMember}
          alt="新たなメンバーが仲間入り"
          className="absolute left-[90px] top-[210px] z-20 w-[720px]"
        />

        <img
          src={cheeseBg}
          alt=""
          className="absolute -left-[170px] top-[560px] z-0 w-[520px] opacity-70"
        />

        <img
          src={cheeseCharacter}
          alt="ベイクドチーズキャラクター"
          className="absolute -left-[120px] top-[520px] z-10 w-[520px]"
        />

        <div className="absolute left-[520px] top-[610px] z-30 w-[430px]">
          <div className="mb-4 flex items-center gap-8">
            <img
              src={cheeseLogo}
              alt="濃厚ベイクドチーズ"
              className="w-[300px]"
            />

            <div className="flex h-[110px] w-[110px] shrink-0 items-center justify-center rounded-full border-2 border-[#c62f3f] bg-white text-center text-[20px] font-black leading-tight text-[#c62f3f]">
              2025年<br />
              6月30日(月)<br />
              発売！
            </div>
          </div>

          <img
            src={cheeseImage}
            alt="ココナッツサブレ 濃厚ベイクドチーズ"
            className="mb-8 w-[420px]"
          />

          <div className="mb-4 border-t border-[#c62f3f] pt-3 text-[15px] font-bold">
            メンバーカラー
            <span className="mx-2 inline-block h-4 w-4 bg-[#c62f3f] align-middle" />
            <span className="text-[#c62f3f]">赤色</span>
          </div>

          <div className="space-y-2">
            <div className="inline-block bg-[#c62f3f] px-4 py-1 text-[26px] font-black text-white">
              未来を担う
            </div>
            <br />
            <div className="inline-block bg-[#c62f3f] px-4 py-1 text-[26px] font-black text-white">
              ニュージェネレーション
            </div>
          </div>

          <p className="mt-6 text-[17px] font-bold leading-[1.65] text-black">
            厳しいオーディションを勝ち抜いた、<br />
            ピュアで元気な期待の新星。<br />
            天真爛漫な笑顔と、ちょっぴり天然な発言で<br />
            ファンの心を癒す最年少メンバー。<br />
            その初々しさと爽やかさが、<br />
            これからのグループをさらに輝かせてくれるはず！
          </p>
        </div>

        <div className="absolute left-[80px] top-[920px] z-40 -rotate-6 space-y-3">
          <div className="bg-[#c62f3f] px-5 py-2 text-[24px] font-black text-white">
            君に会えるのを
          </div>
          <div className="bg-[#c62f3f] px-5 py-2 text-[24px] font-black text-white">
            楽しみにしているよ!!
          </div>
        </div>
      </div>
    </section>
  )
}