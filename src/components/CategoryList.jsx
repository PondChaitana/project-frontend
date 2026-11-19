import { Link } from 'react-router-dom'

export default function CategoryList({ categories, active, onSelect }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-5 flex items-end justify-between">
        <div className="border-l-2 border-brand pl-2">
          <h2 className="text-xl">หมวดหมู่กิจกรรม</h2>
          <p className="text-[10px] text-gray-500">เลือกประเภทกิจกรรมที่คุณสนใจ</p>
        </div>
        <Link to="/activities" className="text-xs text-blue-600">ดูทั้งหมด →</Link>
      </div>

      <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className={`flex h-28 flex-col items-center justify-center gap-2 rounded-xl text-sm shadow transition hover:scale-105 ${c.bg} ${c.text} ${
              active === c.id ? 'ring-2 ring-brand' : ''
            }`}
          >
            <span className={`flex h-12 w-12 items-center justify-center rounded-full text-xl text-white ${c.iconBg}`}>
              {c.icon}
            </span>
            {c.label}
          </button>
        ))}
      </div>
    </section>
  )
}
