import { useEffect, useState } from 'react'

export default function HeroCarousel({ images }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000)
    return () => clearInterval(t)
  }, [images.length])

  return (
    <div className="relative h-72 w-full overflow-hidden bg-gray-200 md:h-[280px]">
      <img src={images[index]} alt="" className="h-full w-full object-cover" />
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`สไลด์ ${i + 1}`}
            className={`h-3 w-3 rounded-full ${i === index ? 'bg-brand' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
  )
}
