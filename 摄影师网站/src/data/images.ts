export interface ImageItem {
  id: number
  category: 'portrait' | 'landscape' | 'street' | 'wedding'
  thumb: string
  full: string
  title: string
  desc: string
}

export const IMAGES: ImageItem[] = [
  { id: 1, category: 'portrait', thumb: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', full: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80', title: '凝望', desc: '人像摄影' },
  { id: 2, category: 'portrait', thumb: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80', full: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1600&q=80', title: '红裙', desc: '人像摄影' },
  { id: 3, category: 'landscape', thumb: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', full: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80', title: '山脊', desc: '风光摄影' },
  { id: 4, category: 'landscape', thumb: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', full: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80', title: '森林之光', desc: '风光摄影' },
  { id: 5, category: 'street', thumb: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80', full: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&q=80', title: '霓虹之夜', desc: '街拍摄影' },
  { id: 6, category: 'street', thumb: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=600&q=80', full: 'https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=1600&q=80', title: '雨巷', desc: '街拍摄影' },
  { id: 7, category: 'wedding', thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80', full: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80', title: '永恒之约', desc: '婚礼摄影' },
  { id: 8, category: 'wedding', thumb: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80', full: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1600&q=80', title: '花语', desc: '婚礼摄影' },
  { id: 9, category: 'portrait', thumb: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80', full: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1600&q=80', title: '侧影', desc: '人像摄影' },
  { id: 10, category: 'landscape', thumb: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80', full: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=80', title: '湖光山色', desc: '风光摄影' },
  { id: 11, category: 'street', thumb: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=600&q=80', full: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=1600&q=80', title: '城市剪影', desc: '街拍摄影' },
  { id: 12, category: 'wedding', thumb: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80', full: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1600&q=80', title: '誓言', desc: '婚礼摄影' },
]

export const CATEGORIES = [
  { key: 'all', label: '全部' },
  { key: 'portrait', label: '人像' },
  { key: 'landscape', label: '风光' },
  { key: 'street', label: '街拍' },
  { key: 'wedding', label: '婚礼' },
] as const

export type CategoryKey = (typeof CATEGORIES)[number]['key']
