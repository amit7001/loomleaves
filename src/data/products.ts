export interface Product {
  id: number
  name: string
  description: string
  fullDescription: string
  price: string
  category: string
  material: string
  size: string[]
  colors: string[]
  inStock: boolean
  rating: number
  reviews: number
  image?: string
}

export interface CategoryDetail {
  id: string
  title: string
  description: string
  keyFeatures: string[]
  useCases: string[]
  searchTags: string[]
  priceRange: string
  customization: string
  image?: string
}

export const categoryDetails: { [key: string]: CategoryDetail } = {
  'Mink Blankets': {
    id: 'mink-blankets',
    title: 'Mink Blankets - Premium Wholesale',
    description: 'Luxurious, high-demand mink blankets known for superior warmth, vibrant designs, and soft texture. Made from premium materials ideal for winter use, wedding sets, hotel supplies, and corporate gifting. Available in multiple colors, sizes, and designs for bulk wholesale orders.',
    keyFeatures: [
      'Luxurious feel and soft texture',
      'Vibrant designs and patterns',
      'Superior warmth for winter',
      'Long-lasting softness',
      'High-grade premium materials'
    ],
    useCases: ['Winter wear', 'Wedding gifts', 'Hotel linens', 'Corporate gifting'],
    searchTags: ['mink blanket wholesale', 'premium blankets', 'luxury blankets Panipat', 'mink fabric'],
    priceRange: 'Bulk wholesale pricing available',
    customization: 'Available in various designs, colors, sizes',
    image: '/src/images/category-mink-blankets.png'
  },
  'Polar Blankets': {
    id: 'polar-blankets',
    title: 'Polar Fleece Blankets - Lightweight Warmth',
    description: 'High-quality polar fleece blankets delivering lightweight warmth, soft texture, and excellent insulation. Ideal for harsh winters and widely used in homes, hostels, hotels, and relief supplies. Fast-moving, affordable comfort solution.',
    keyFeatures: [
      'Lightweight with excellent insulation',
      'Soft texture',
      'Affordable and fast-moving',
      'High turnover rate for traders'
    ],
    useCases: ['Homes', 'Hostels', 'Hotels', 'Relief supplies', 'Personal use'],
    searchTags: ['polar fleece', 'relief blankets', 'hostel bedding', 'bulk fleece'],
    priceRange: 'Competitive bulk pricing',
    customization: 'Variety of colors, sizes, and designs',
    image: '/src/images/category-polar-blankets.png'
  },
  'Ladies Shawls': {
    id: 'ladies-shawls',
    title: 'Ladies Shawls - Elegant Style & Warmth',
    description: 'Elegant and diverse collection of ladies shawls blending style, warmth, and tradition. Crafted from premium fabrics featuring beautiful weaves, prints, and embroidery. Ideal for daily wear and festive occasions, perfect for retail sales, wedding gifting, and seasonal collections.',
    keyFeatures: [
      'Beautiful weaves and artistic prints',
      'Intricate embroidery details',
      'Premium fabrics with superior quality',
      'High demand during festive seasons'
    ],
    useCases: ['Daily wear', 'Festive occasions', 'Wedding gifting', 'Seasonal collections'],
    searchTags: ['ladies shawls', 'embroidered shawls', 'winter fashion', 'bulk shawls'],
    priceRange: 'Wholesale bulk discounts available',
    customization: 'Diverse color palette and design patterns',
    image: '/src/images/category-ladies-shawls.png'
  },
  'Towels': {
    id: 'towels',
    title: 'Premium Towels - Quality Essentials',
    description: 'High-quality towels engineered for maximum absorbency, softness, and durability. Crafted from premium cotton and blended fabrics available in various sizes, colors, and textures. Perfect for household use, hotel supplies, salons, gyms, and gifting with fine finish and long-lasting performance.',
    keyFeatures: [
      'Maximum absorbency',
      'Superior softness',
      'Long-lasting durability',
      'Quick-dry properties',
      'Fine finish'
    ],
    useCases: ['Daily household', 'Hotel/Hospitality', 'Salons & Gyms', 'Gifting'],
    searchTags: ['cotton towels', 'hotel towels', 'bath towels wholesale', 'gym towels'],
    priceRange: 'Volume discounts available',
    customization: 'Multiple sizes and wide color selection',
    image: '/src/images/category-towels.png'
  },
  'Bedsheets': {
    id: 'bedsheets',
    title: 'Premium Bedsheets - Comfort & Style',
    description: 'Exclusive range of bedsheets blending comfort, durability, and style from superior quality materials. Ensures soft feel, perfect fit, and long-lasting performance available in wide variety of colors, prints, and fabric options.',
    keyFeatures: [
      'Superior material quality',
      'Soft feel and perfect fit',
      'Long-lasting performance',
      'Wide variety of prints and colors'
    ],
    useCases: ['Everyday bedding', 'Hotel linens', 'Wedding sets', 'Corporate gifts'],
    searchTags: ['bedsheets wholesale', 'cotton bedsheets', 'hotel bedding', 'printed bedsheets'],
    priceRange: 'Excellent margins for bulk orders',
    customization: 'Custom sizes and patterns for bulk orders',
    image: '/src/images/category-bedsheets.png'
  },
  'Winter World': {
    id: 'winter-world',
    title: 'Winter World - Premium Mink Blankets',
    description: 'Exclusive premium branded collection of winter blankets featuring diverse designs, multiple color variants, and stylistic patterns. Part of our Winter World series offering luxury blankets combining modern aesthetics with traditional touches.',
    keyFeatures: [
      'Exclusive premium branded collection',
      'Modern + traditional fusion styles',
      '15-20+ different SKUs',
      'Extensive color palette'
    ],
    useCases: ['Premium retail', 'Luxury gifting', 'High-end hotels'],
    searchTags: ['premium mink', 'branded blankets', 'luxury winter collection', 'Winter World'],
    priceRange: 'Premium segment pricing',
    customization: 'Diverse designs and color variants'
  },
  'Hotel Supply': {
    id: 'hotel-supply',
    title: 'Hospitality Textile Solutions',
    description: 'Complete range of premium hospitality textiles designed to enhance guest satisfaction and elevate property standards. Includes plush bath towels, soft hand towels, crisp bedsheets, and cozy comforters suitable for boutique hotels to large resorts.',
    keyFeatures: [
      'Hospitality-grade materials',
      'Consistent quality and durability',
      'Timely delivery with reliable supply chain',
      'Dedicated account management'
    ],
    useCases: ['Boutique hotels', 'Mid-range hotels', 'Luxury resorts', 'Hostels'],
    searchTags: ['hotel linens', 'hospitality textiles', 'bulk hotel supply', 'white bedding'],
    priceRange: 'Bulk supply contracts available',
    customization: 'Hotel branding and custom color schemes'
  },
  'Gifting': {
    id: 'gifting',
    title: 'Wedding & Corporate Gifting Solutions',
    description: 'Exclusive, beautifully packaged gifting solutions for special moments and professional milestones. Curated selection includes luxurious bedsheets, ultra-soft mink blankets, plush bathrobes, elegant bed runners, and comfortable slippers with premium packaging.',
    keyFeatures: [
      'Premium gift-ready packaging',
      'Curated luxurious selection',
      'Customizable bundles',
      'Personalization available'
    ],
    useCases: ['Newlywed congratulations', 'Corporate appreciation', 'Festive celebrations'],
    searchTags: ['corporate gifting', 'wedding gifts', 'bulk gifts', 'premium textile gifts'],
    priceRange: 'Wholesale bundle rates',
    customization: 'Corporate logos and custom configurations'
  }
}

export const categories = Object.keys(categoryDetails).map(key => ({
  id: categoryDetails[key].id,
  name: key
}));

// Sample products for the new categories
export const products: Product[] = [
  {
    id: 101,
    name: 'Royal Gold Mink Blanket',
    description: 'Heavyweight double-ply mink blanket',
    fullDescription: 'Experience the ultimate luxury with our Royal Gold Mink Blanket. Double-ply construction ensures maximum warmth during the coldest winter nights. Features an embossed floral pattern.',
    price: '₹1,200',
    category: 'Mink Blankets',
    material: '100% Polyester Mink',
    size: ['Double Bed (220x240cm)'],
    colors: ['Maroon', 'Navy', 'Brown'],
    inStock: true,
    rating: 4.8,
    reviews: 45,
    image: ''
  },
  {
    id: 102,
    name: 'Classic Polar Fleece',
    description: 'Solid color lightweight fleece',
    fullDescription: 'Versatile and lightweight polar fleece blanket. Perfect for mild winters or as an extra layer. Durable, anti-pill fabric that stays soft wash after wash.',
    price: '₹350',
    category: 'Polar Blankets',
    material: 'Polar Fleece',
    size: ['Single (150x220cm)', 'Double (220x240cm)'],
    colors: ['Blue', 'Grey', 'Red', 'Camel'],
    inStock: true,
    rating: 4.5,
    reviews: 120,
    image: ''
  },
  {
    id: 103,
    name: 'Kashmiri Embroidered Shawl',
    description: 'Fine wool shawl with embroidery',
    fullDescription: 'Elegant ladies shawl featuring intricate Kashmiri-style embroidery. Made from a soft wool blend that provides warmth without weight. Perfect for festive occasions.',
    price: '₹850',
    category: 'Ladies Shawls',
    material: 'Wool Blend',
    size: ['Standard (100x200cm)'],
    colors: ['Black', 'Cream', 'Red'],
    inStock: true,
    rating: 4.9,
    reviews: 30,
    image: ''
  },
  {
    id: 104,
    name: 'Hotel Luxury Bath Towel',
    description: '500 GSM pure cotton towel',
    fullDescription: 'Professional grade hotel bath towel. High absorbency and durability designed for frequent washing. Crisp white finish for a clean, premium look.',
    price: '₹450',
    category: 'Towels',
    material: '100% Cotton',
    size: ['Bath (70x140cm)'],
    colors: ['White'],
    inStock: true,
    rating: 4.7,
    reviews: 200,
    image: ''
  },
  {
    id: 105,
    name: 'Cotton Percale Bedsheet',
    description: '300 TC cotton bedsheet set',
    fullDescription: 'Premium cotton percale bedsheet with a cool, crisp feel. Includes two matching pillow covers. Breathable fabric ensures a comfortable sleep.',
    price: '₹999',
    category: 'Bedsheets',
    material: '100% Cotton Percale',
    size: ['Queen', 'King'],
    colors: ['White', 'Grey', 'Beige', 'Blue'],
    inStock: true,
    rating: 4.6,
    reviews: 85,
    image: ''
  },
  {
    id: 106,
    name: 'Winter World Signature',
    description: 'Premium designer mink blanket',
    fullDescription: 'Part of our exclusive Winter World collection. This blanket features a unique modern geometric design and superior softness. A statement piece for your bedroom.',
    price: '₹2,500',
    category: 'Winter World',
    material: 'Premium Mink',
    size: ['Super King'],
    colors: ['Gold/Black', 'Silver/Grey'],
    inStock: true,
    rating: 5.0,
    reviews: 15,
    image: ''
  },
  {
    id: 107,
    name: 'Corporate Gift Set',
    description: 'Luxury towel and slipper set',
    fullDescription: 'A thoughtful gift set containing a premium bath towel, hand towel, and matching hotel-quality slippers. Packaged in an elegant gift box.',
    price: '₹800',
    category: 'Gifting',
    material: 'Mixed',
    size: ['Standard'],
    colors: ['White', 'Grey'],
    inStock: true,
    rating: 4.8,
    reviews: 50,
    image: ''
  }
]
