export type Product = {
    id: string;
    title: string;
    description: string;
    category: string;
    price: number;
    imgSrc: string;
}

export const products: Product[] = [
  {
    id: 'JM001',  
    category: 'juegos-mesa',
    title: 'Catan',
    description: 'Juego de estrategia',
    imgSrc: '/img/catan.webp',
    price: 29990  
  },
  {
    id: 'JM002',
    category: 'juegos-mesa',
    title: 'Carcassonne',
    description: 'Juego de construcción',
    imgSrc: '/img/carcassonne.jpg',
    price: 24990
  },
  {
    id: 'AC001',
    category: 'accesorios',
    title: 'Controlador Xbox Series X',
    description: 'Control para Xbox',
    imgSrc: '/img/control-xbox.jpg',
    price: 59990
  },
  {
    id: 'AC002',
    category: 'accesorios',
    title: 'Auriculares HyperX Cloud II',
    description: 'Auriculares gaming',
    imgSrc: '/img/cloud2.jpg',
    price: 79990
  },
  {
    id: 'CO001',
    category: 'consolas',
    title: 'Playstation 5',
    description: 'Consola de última generación',
    imgSrc: '/img/ps5.webp',
    price: 549990
  },
  {
    id: 'CG001',
    category: 'pc-gamer',
    title: 'PC Gamer ASUS ROG Strix',
    description: 'PC Gaming profesional',
    imgSrc: '/img/pc-gamer.jpg',
    price: 1299990
  },
  {
    id: 'SG001',
    category: 'silla-gamer',
    title: 'Silla Gamer Secretlab Titan',
    description: 'Silla ergonómica gamer',
    imgSrc: '/img/silla.webp',
    price: 349990
  },
  {
    id: 'MS001',
    category: 'mouse',
    title: 'Mouse Gamer Logitech G502 HERO',
    description: 'Mouse de alta precisión',
    imgSrc: '/img/mouse.webp',
    price: 49990
  },
  {
    id: 'MP001',
    category: 'mousepad',
    title: 'Mousepad Razer Goliathus Exteded Chroma',
    description: 'Mousepad RGB extendido',
    imgSrc: '/img/mousepad.webp',
    price: 29990
  },
  {
    id: 'PP001',
    category: 'poleras',
    title: 'Polera Negra Persoalizada "Level-Up"',
    description: 'Polera gamer personalizada',
    imgSrc: '/img/polera.png',
    price: 14990
  },
  {
    id: 'PP002',
    category: 'poleras',
    title: 'Polera Roja Persoalizada "Level-Up"',
    description: 'Polera gamer personalizada',
    imgSrc: '/img/poleraRoja.png',
    price: 14990
  },
  {
    id: 'PO001',
    category: 'polerones',
    title: 'Poleron Negro Persoalizado "Level-Up"',
    description: 'Poleron gamer personalizado',
    imgSrc: '/img/poleron.png',
    price: 25990
  },
  {
    id: 'PO002',
    category: 'polerones',
    title: 'Poleron Rojo Persoalizado "Level-Up"',
    description: 'Poleron gamer personalizado',
    imgSrc: '/img/poleroRojo.png',
    price: 25990
  }
];
