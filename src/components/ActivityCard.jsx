export default function ActivityCard({ activity }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition hover:shadow-lg">
      <div className="h-28 bg-gray-200">
        <img src={activity.image} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="space-y-2 p-4">
        <h3 className="text-lg">{activity.title}</h3>
        <p className="flex items-center gap-2 text-xs text-gray-600">📅 {activity.date}</p>
        <p className="flex items-center gap-2 text-xs text-gray-600">🕘 {activity.time}</p>
        <p className="flex items-center justify-between gap-2 text-xs text-gray-600">
          <span>📍 {activity.place}</span>
          {activity.hours && <span className="text-[10px]">{activity.hours}</span>}
        </p>
      </div>
    </article>
  )
}
