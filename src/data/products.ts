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
    description: 'Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.',
    imgSrc: '/img/catan.webp',
    price: 29990  
  },
  {
    id: 'JM002',
    category: 'juegos-mesa',
    title: 'Carcassonne',
    description: 'Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.',
    imgSrc: '/img/carcassonne.jpg',
    price: 24990
  },
  {
    id: 'AC001',
    category: 'accesorios',
    title: 'Controlador Xbox Series X',
    description: 'Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.',
    imgSrc: '/img/control-xbox.jpg',
    price: 59990
  },
  {
    id: 'AC002',
    category: 'accesorios',
    title: 'Auriculares HyperX Cloud II',
    description: 'Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.',
    imgSrc: '/img/cloud2.jpg',
    price: 79990
  },
  {
    id: 'CO001',
    category: 'consolas',
    title: 'Playstation 5',
    description: 'La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.',
    imgSrc: '/img/ps5.webp',
    price: 549990
  },
  {
    id: 'CG001',
    category: 'pc-gamer',
    title: 'PC Gamer ASUS ROG Strix',
    description: 'Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.',
    imgSrc: '/img/pc-gamer.jpg',
    price: 1299990
  },
  {
    id: 'SG001',
    category: 'silla-gamer',
    title: 'Silla Gamer Secretlab Titan',
    description: 'Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.',
    imgSrc: '/img/silla.webp',
    price: 349990
  },
  {
    id: 'MS001',
    category: 'mouse',
    title: 'Mouse Gamer Logitech G502 HERO',
    description: 'Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.',
    imgSrc: '/img/mouse.webp',
    price: 49990
  },
  {
    id: 'MP001',
    category: 'mousepad',
    title: 'Mousepad Razer Goliathus Exteded Chroma',
    description: 'Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.',
    imgSrc: '/img/mousepad.webp',
    price: 29990
  },
  {
    id: 'PP001',
    category: 'poleras',
    title: 'Polera Negra Persoalizada "Level-Up"',
    description: 'Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.',
    imgSrc: '/img/polera.png',
    price: 14990
  },
  {
    id: 'PP002',
    category: 'poleras',
    title: 'Polera Roja Persoalizada "Level-Up"',
    description: 'Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.',
    imgSrc: '/img/poleraRoja.png',
    price: 14990
  },
  {
    id: 'PO001',
    category: 'polerones',
    title: 'Poleron Negro Persoalizado "Level-Up"',
    description: 'Un polerón cómodo y versátil, con un diseño moderno que puedes personalizar con tu gamer tag o gráfico favorito para llevar tu estilo al siguiente nivel.',
    imgSrc: '/img/poleron.png',
    price: 25990
  },
  {
    id: 'PO002',
    category: 'polerones',
    title: 'Poleron Rojo Persoalizado "Level-Up"',
    description: 'Un polerón cómodo y versátil, con un diseño moderno que puedes personalizar con tu gamer tag o gráfico favorito para llevar tu estilo al siguiente nivel.',
    imgSrc: '/img/poleroRojo.png',
    price: 25990
  }
];
