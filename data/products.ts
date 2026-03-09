export interface Product {
    id: string;
    name: string;   
    price: number;
    description: string;
    enStock: boolean;
    image: string;
}

export const Products: Product[] = [
  {
    id: '1',
    name: 'iPhone 14 Pro',
    price: 1099,
    description:
      'Smartphone Apple avec puce A16 Bionic, Dynamic Island et appareil photo 48 Mpx.',
    enStock: true,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 1299,
    description:
      'Ultra-fin, ultra-léger et boosté par la puce M2 pour des performances exceptionnelles.',
    enStock: true,
    image:
      'https://cf4.certideal.com/44292-thickbox_default/macbook-air-13-2022-apple-m2-8-coeurs-cpu-8-coeurs-gpu-256-go-ssd-ram-8-go-gris-sideral-parfait-etat.jpg%27',
  },
  {
    id: '3',
    name: 'AirPods Max',
    price: 549,
    description:
      'Casque circum-auriculaire offrant un audio haute fidélité et une réduction de bruit active.',
    enStock: false,
    image:
      'https://bsimg.nl/images/apple-airpods-max-usb-c-zwart_1.png/nCtHXLuyat4o4C1g1SteIkgvqKU%3D/fit-in/1095x1095/filters%3Aformat%28webp%29%3Aupscale%28%29%27',
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    price: 399,
    description:
      'La référence absolue en matière de réduction de bruit et de qualité sonore sans fil.',
    enStock: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
  },
  {
    id: '5',
    name: 'iPad Pro 12.9"',
    price: 1199,
    description:
      'Écran Liquid Retina XDR et puissance de la puce M2 pour les créatifs nomades.',
    enStock: true,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
  },
  {
    id: '6',
    name: 'Nintendo Switch OLED',
    price: 310,
    description:
      'Console de jeux hybride avec un écran OLED de 7 pouces aux couleurs éclatantes.',
    enStock: true,
    image: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=500',
  },
  {
    id: '7',
    name: 'PlayStation 5',
    price: 499,
    description:
      'Vitesse fulgurante, immersion profonde et catalogue de jeux exclusifs incroyables.',
    enStock: false,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500',
  },
  {
    id: '8',
    name: 'Dell XPS 13',
    price: 1350,
    description:
      'Le meilleur PC portable compact sous Windows avec écran InfinityEdge.',
    enStock: true,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500',
  },
  {
    id: '9',
    name: 'Samsung Galaxy Watch 6',
    price: 279,
    description:
      'Suivi de santé précis, analyse du sommeil et design élégant en aluminium.',
    enStock: true,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
  },
  {
    id: '10',
    name: 'Clavier Mécanique RGB',
    price: 125,
    description:
      'Switches rouges pour une frappe rapide et silencieuse, idéal pour le gaming et le code.',
    enStock: true,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500',
  },
];