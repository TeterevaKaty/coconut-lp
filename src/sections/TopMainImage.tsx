import topMainImg from '../assets/hero/top_main_img.png'

export function TopMainImage() {
  return (
    <section className="relative overflow-hidden bg-[#fff9f0]">
      <div className="overflow-hidden">
        <img src={topMainImg} alt="Coconut Sable main banner" className="block w-full object-cover" />
      </div>
    </section>
  )
}
