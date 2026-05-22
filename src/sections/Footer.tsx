import footerImage from '../assets/footer_img.png'

export function Footer() {
  return (
    <footer className="bg-[#fff4e8] py-14">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#d9c3a6] bg-white shadow-[0_18px_60px_rgba(109,78,58,0.08)]">
          <img src={footerImage} alt="Footer promotion" className="block w-full object-cover" />
          <a
            href="#"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4e250d] px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white shadow-lg shadow-[#4e250d]/15 transition hover:bg-[#6e3216]"
          >
            詳しくはこちら
          </a>
        </div>
      </div>
    </footer>
  )
}
