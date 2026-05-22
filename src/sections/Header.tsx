import headerBgr from '../assets/header/header_bgr.png'
import nissinLogo from '../assets/header/nissin_logo.png'
import cocoaText from '../assets/header/coconatsusabure.png'
import facebookIcon from '../assets/header/facebook_img.png'
import twitterIcon from '../assets/header/x_img.png'

export function Header() {
  return (
    <header
      className="relative sticky top-0 z-30 border-b border-slate-200/70 bg-cover bg-center bg-no-repeat backdrop-blur-xl"
      style={{ backgroundImage: `url(${headerBgr})` }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-sky-500" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center gap-3">
          <img src={nissinLogo} alt="Nissin logo" className="h-11 w-auto object-contain" />
        </div>

        <div className="flex flex-1 justify-center px-4">
          <img src={cocoaText} alt="ココナツサブレ" className="max-h-14 w-auto object-contain" />
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm shadow-slate-200 transition hover:bg-white">
            <img src={facebookIcon} alt="Facebook" className="h-6 w-auto" />
          </a>
          <a href="#" aria-label="Twitter" className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-sm shadow-slate-200 transition hover:bg-white">
            <img src={twitterIcon} alt="Twitter" className="h-6 w-auto" />
          </a>
        </div>
      </div>
    </header>
  )
}
