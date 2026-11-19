import { useState } from 'react'
import HeroCarousel from '../components/HeroCarousel.jsx'
import CategoryList from '../components/CategoryList.jsx'
import ActivityCard from '../components/ActivityCard.jsx'
import { heroImages, categories, activities } from '../data/mock.js'

export default function Home() {
  const [category, setCategory] = useState('all')

  return (
    <>
      <HeroCarousel images={heroImages} />
      <CategoryList categories={categories} active={category} onSelect={setCategory} />

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <ActivityCard key={a.id} activity={a} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <button className="rounded-full border border-gray-400 px-8 py-2 text-lg hover:bg-gray-50">
            ดูเพิ่มเติม
          </button>
        </div>
      </section>
    </>
  )
}
