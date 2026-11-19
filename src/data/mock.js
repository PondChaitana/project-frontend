export const heroImages = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
  '/images/hero4.jpg',
]

export const categories = [
  { id: 'all', label: 'ทั้งหมด', icon: '▦', bg: 'bg-[#5b8dd0]', iconBg: 'bg-[#8f9be0]', text: 'text-white' },
  { id: 'academic', label: 'อบรม', icon: '📖', bg: 'bg-[#bcd7f7]', iconBg: 'bg-[#4a7dc4]', text: 'text-gray-800' },
  { id: 'volunteer', label: 'จิตอาสา', icon: '🍃', bg: 'bg-[#bff7a8]', iconBg: 'bg-[#6fe86f]', text: 'text-gray-800' },
  { id: 'art', label: 'ศิลปะ', icon: '🎨', bg: 'bg-[#e8bc86]', iconBg: 'bg-brand', text: 'text-gray-800' },
  { id: 'club', label: 'ชมรม', icon: '👥', bg: 'bg-[#c9b6d6]', iconBg: 'bg-[#b873d6]', text: 'text-gray-800' },
  { id: 'sport', label: 'กีฬา', icon: '⚽', bg: 'bg-[#f1f3bd]', iconBg: 'bg-[#e8d4b0]', text: 'text-gray-800' },
]

export const activities = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: 'ชื่อกิจกรรม',
  date: '23 ธ.ค 2569',
  time: '9.00 - 15.30 น.',
  place: 'อาคารอเนกประสงค์',
  hours: i < 2 ? '*2 ชั่วโมง กยศ.' : null,
  image: '/images/activity.jpg',
}))
