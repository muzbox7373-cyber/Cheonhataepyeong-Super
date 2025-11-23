// Using picsum based on system instruction, but mapped to the user's conceptual requirements.
// Ideally, these would be the specific loremflickr links provided, but picsum is more reliable for demo stability.

export const IMAGES = {
  HERO_BG: "https://picsum.photos/seed/retrostore/1600/900",
  FEATURE_1: "https://picsum.photos/seed/snack/800/600",
  FEATURE_2: "https://picsum.photos/seed/window/800/600",
  FEATURE_3: "https://picsum.photos/seed/turntable/800/600",
  OWNER_IMG: "https://picsum.photos/seed/owner/800/600",
  PHILOSOPHY_BG: "https://picsum.photos/seed/sunset/1600/900",
  GOODS_SNACK: "https://picsum.photos/seed/koreansnack/600/600",
  GOODS_DRINK: "https://picsum.photos/seed/drink/600/600",
  GOODS_ITEM: "https://picsum.photos/seed/retrocup/600/600",
  SPACE_GAME: "https://picsum.photos/seed/arcade/800/600",
  SPACE_INTERIOR: "https://picsum.photos/seed/interior/800/600",
  MAP_PLACEHOLDER: "https://picsum.photos/seed/map/1200/600",
};

export const NAV_ITEMS = [
  { label: "소개", path: "/story" },
  { label: "상품", path: "/goods" },
  { label: "공간", path: "/space" },
  { label: "위치", path: "/contact" },
];

export const PRODUCTS = [
  { id: 1, category: "할매입맛", name: "오란다 세트", description: "부장님 잔소리 들은 날 씹기 좋은 바삭함.", price: "5,000원", image: IMAGES.GOODS_SNACK },
  { id: 2, category: "음료", name: "옛날 보리차", description: "물보다 진하고 커피보다 구수한 그 맛.", price: "2,500원", image: IMAGES.GOODS_DRINK },
  { id: 3, category: "굿즈", name: "태평 유리컵", description: "뭘 담아 마셔도 3배 더 시원해지는 마법.", price: "12,000원", image: IMAGES.GOODS_ITEM },
  { id: 4, category: "할매입맛", name: "약과 꾸러미", description: "꾸덕꾸덕한 달콤함이 필요할 때.", price: "6,000원", image: IMAGES.FEATURE_1 },
  { id: 5, category: "굿즈", name: "호랑이 성냥", description: "케이크 촛불 켤 때 감성 한 스푼.", price: "1,500원", image: IMAGES.SPACE_GAME },
];

export const SPACE_INFO = [
  { id: 1, name: "평상 존", description: "신발 벗고 만화책 보며 뒹굴거리는 명당.", image: IMAGES.SPACE_INTERIOR },
  { id: 2, name: "오락기 코너", description: "100원의 행복, 갤러그 최고 기록 도전.", image: IMAGES.SPACE_GAME },
  { id: 3, name: "음악 감상실", description: "사장님의 LP 컬렉션을 몰래 훔쳐듣는 곳.", image: IMAGES.FEATURE_3 },
];
