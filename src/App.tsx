import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Mock product data
  const products: Product[] = [
    {
      id: 'P001',
      name: 'Aretes Alma',
      price: 25,
      image: 'src/images/a_alma_acero_inoxidable.jpg',
      category: 'women',
      type: 'aretes',
      material: 'Acero inoxidable',
      description: 'Elegantes aretes. Perfecto para ocasiones especiales o como símbolo de amor eterno.',
      isNew: true
    },
    {
      id: 'P002',
      name: 'Aretes Amelie',
      price: 20,
      type: 'aretes',
      image: 'src/images/a_amelie_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Aretes en forma de rosas.'
    },
    {
      id: 'P003',
      name: 'Aretes Ceci',
      price: 15,
      image: 'src/images/a_ceci_acero_inoxidable.jpg',
      category: 'women',
      type: 'aretes',
      material: 'Acero inoxidable',
      description: 'Aretes pendientes con diseño moderno y sofisticado',
      isNew: true
    },
    {
      id: 'P004',
      name: 'Aretes Coquette',
      price: 17,
      image: 'src/images/a_coquette_acero_inoxidable.jpg',
      category: 'women',
      type: 'aretes',
      material: 'Acero inoxidable',
      description: 'Aretes Coquette. Diseño versátil que se adapta a cualquier ocasión.'
    },
    {
      id: 'P005',
      name: 'Aretes Coquette blanco',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_coquette_blanco_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Coquette en tono blanco. Elegancia y estilo para cualquier evento.',
      isNew: true
    },
    {
      id: 'P006',
      name: 'Arete Coquette Rosa',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_coquette_rosa_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero enchapado',
      description: 'Aretes Coquette en tono rosa. Diseño elegante y femenino, ideal para realzar cualquier atuendo.'
    },
    {
      id: 'P007',
      name: 'Aretes Corazón',
      price: 18,
      type: 'aretes',
      image: 'src/images/a_cora_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero enchapado',
      description: 'Aretes en forma de corazón. Perfectos para regalar o para darte un gusto especial.'
    },
    {
      id: 'P008',
      name: 'Anillo Corazón',
      price: 15,
      type: 'anillos',
      image: 'src/images/a_cora_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Anillo en forma de corazón. Diseño delicado y romántico, ideal para cualquier ocasión.'
    },
    {
      id: 'P009',
      name: 'Anillo Cora',
      price: 15,
      type: 'anillos',
      image: 'src/images/a_corazon_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Anillo en forma de corazón. Diseño delicado y romántico, ideal para cualquier ocasión.'
    },
    {
      id: 'P010',
      name: 'Aretes Donita',
      price: 15,
      type: 'aretes',
      image: 'src/images/a_donita_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Aretes en forma de dona. Diseño divertido y moderno, perfecto para cualquier ocasión.'
    },
    {
      id: 'P011',
      name: 'Aretes Ear Cuff',
      price: 16,
      type: 'aretes',
      image: 'src/images/a_ear_cuff_xuping.jpg',
      category: 'women',
      material: 'Xuping',
      description: 'Aretes Ear Cuff. Diseño audaz y contemporáneo que realza tu estilo personal.'
    }
    ,
    {
      id: 'P012',
      name: 'Anillo Estrella',
      price: 15,
      type: 'anillos',
      image: 'src/images/a_estrella_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Anillo con diseño de estrella. Perfecto para añadir un toque brillante a tu look diario.'
    }
    ,
    {
      id: 'P013',
      name: 'Aretes Flor',
      price: 18,
      type: 'aretes',
      image: 'src/images/a_flor_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Aretes con diseño de flor. Elegancia natural para cualquier ocasión.'
    },
    {
      id: 'P014',
      name: 'Aretes Flor Glass Oscuro',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_flor_glass_oscuro_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Aretes con diseño de flor y detalle en glass oscuro. Un toque de sofisticación y estilo.'
    },
    {
      id: 'P015',
      name: 'Anillo Gota',
      price: 15,
      type: 'anillos',
      image: 'src/images/a_gota_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Anillo con diseño de gota. Perfecto para realzar tu elegancia diaria.'
    }
    ,
    {
      id: 'P016',
      name: 'Aretes Hoja',
      price: 15,
      type: 'aretes',
      image: 'src/images/a_hoja_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero inoxidable',
      description: 'Anillo con diseño de hoja. Un toque natural y elegante para cualquier ocasión.'
    }
    ,
    {
      id: 'P017',
      name: 'Aretes Hoop',
      price: 19,
      type: 'aretes',
      image: 'src/images/a_hoop_acero_xuping.jpg',
      category: 'women',
      material: 'Acero Xuping',
      description: 'Aretes Hoop. Clásicos y versátiles, ideales para cualquier estilo.'
    }
    ,
    {
      id: 'P018',
      name: 'Aretes Hoop Glass',
      price: 18,
      type: 'aretes',
      image: 'src/images/a_hoop_glass_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Aretes Hoop con detalle en glass. Un diseño moderno que destaca en cualquier ocasión.'
    }
    ,
    {
      id: 'P019',
      name: 'Aretes Hoop Liso',
      price: 19,
      image: 'src/images/a_hoop_liso_acero_xuping.jpg',
      category: 'women',
      type: 'aretes',
      material: 'Acero Xuping',
      description: 'Aretes Hoop Liso. Elegancia atemporal para complementar cualquier atuendo.'
    }
    ,
    {
      id: 'P020',
      name: 'Aretes Iris',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_iris_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Iris. Diseño sofisticado que realza tu belleza natural.'
    }
    ,
    {
      id: 'P021',
      name: 'Aretes Kendall',
      price: 16,
      type: 'aretes',
      image: 'src/images/a_kendall_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Kendall. Perfectos para añadir un toque de elegancia a tu look diario.'
    }
    ,
    {
      id: 'P022',
      name: 'Anillo Lazo',
      price: 15,
      type: 'anillos',
      image: 'src/images/a_lazo_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo con diseño de lazo. Un accesorio encantador para cualquier ocasión.'
    }
    ,
    {
      id: 'P023',
      name: 'Aretes Lia',
      price: 15,
      type: 'aretes',
      image: 'src/images/a_lia_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Lia. Diseño delicado y femenino, ideal para realzar tu estilo personal.'
    }
    ,
    {
      id: 'P024',
      name: 'Aretes Lua',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_lua_acero_inoxidable.jpg ',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Lua. Elegancia y simplicidad en un diseño atemporal.'
    }
    ,
    {
      id: 'P025',
      name: 'Aretes Mariposa Blanco',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_mariposa_blanco_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Mariposa en tono blanco. Un diseño encantador que simboliza transformación y belleza.'
    }
    ,
    {
      id: 'P026',
      name: 'Aretes Mariposa Rosa',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_mariposa_rosa_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Mariposa en tono rosa. Un diseño encantador que simboliza transformación y belleza.'
    }
    ,
    {
      id: 'P027',
      name: 'Aretes Media Flor',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_media_flor_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Media Flor. Diseño delicado que aporta un toque de frescura y elegancia.'
    },
    {
      id: 'P028',
      name: 'Aretes Muñeca',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_muñeca_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Muñeca. Diseño divertido y juvenil, perfecto para cualquier ocasión.'
    }
    ,
    {
      id: 'P029',
      name: 'Aretes Perla',
      price: 16,
      type: 'aretes',
      image: 'src/images/a_perla_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Perla. Clásicos y elegantes, ideales para realzar cualquier atuendo.'
    }
    ,
    {
      id: 'P030',
      name: 'Aretes Pétalos',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_petalos_acero_xuping.jpg',
      category: 'women',
      material: 'Acero Xuping',
      description: 'Aretes Pétalos. Diseño inspirado en la naturaleza, perfecto para cualquier ocasión.'
    }
    ,
    {
      id: 'P031',
      name: 'Aretes Petite',
      price: 15,
      type: 'aretes',
      image: 'src/images/a_petite_oro_rosa.jpg',
      category: 'women',
      material: 'Oro Rosa',
      description: 'Aretes Petite. Diseño delicado y femenino, ideal para realzar tu estilo personal.'
    }
    ,
    {
      id: 'P032',
      name: 'Anillo Ross',
      price: 15,
      type: 'anillos',
      image: 'src/images/a_ross_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo Ross. Diseño moderno y versátil, perfecto para cualquier ocasión.'
    }
    ,
    {
      id: 'P033',
      name: 'Aretes Sofi',
      price: 15,
      type: 'aretes',
      image: 'src/images/a_sofi_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Sofi. Elegancia y simplicidad en un diseño atemporal.'
    }
    ,
    {
      id: 'P034',
      name: 'Aretes Verano',
      price: 17,
      type: 'aretes',
      image: 'src/images/a_verano_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Verano. Diseño fresco y vibrante, perfecto para la temporada estival.'
    }
    ,
    {
      id: 'P035',
      name: 'Aretes Vino',
      price: 14,
      type: 'aretes',
      image: 'src/images/a_vino_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Aretes Vino. Diseño elegante en tono vino, ideal para ocasiones especiales.'
    }
    ,
    {
      id: 'P036',
      name: 'Anillo Amor',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_amor_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo Amor. Un símbolo perfecto de amor y compromiso.'
    }
    ,
    {
      id: 'P037',
      name: 'Anillo Cora',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_cora_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo en forma de corazón. Diseño delicado y romántico, ideal para cualquier ocasión.'
    }
    ,
    {
      id: 'P038',
      name: 'Anillo Cora Puntos',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_cora_puntos_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo Cora color plateado con diseño de puntos. Un toque moderno a un clásico símbolo de amor.'
    }
    ,
    {
      id: 'P039',
      name: 'Anillo Doble',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_doble_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo Doble. Diseño contemporáneo que combina estilo y sofisticación.'
    }
    ,
    {
      id: 'P040',
      name: 'Anillo Espiral',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_espiral_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo con diseño en espiral. Un accesorio único que destaca por su estilo moderno.'
    }
    ,
    {
      id: 'P041',
      name: 'Anillo Estrella',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_estrella_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo con diseño de estrella. Perfecto para añadir un toque brillante a tu look diario.'
    }
    ,
    {
      id: 'P042',
      name: 'Anillo Flor',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_flor_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo con diseño de flor. Elegancia natural para cualquier ocasión.'
    }
    ,
    {
      id: 'P043',
      name: 'Anillo Nudo',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_nudo_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo Nudo. Ideal para regalar o para uso personal.'
    },
    {
      id: 'P044',
      name: 'Anillo Ross',
      price: 15,
      type: 'anillos',
      image: 'src/images/an_ross_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Anillo Ross. Diseño moderno y versátil, perfecto para cualquier ocasión.'
    },
    {
      id: 'P045',
      name: 'Brazalete Carti',
      price: 26,
      type: 'brazaletes',
      image: 'src/images/b_carti_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Brazalete Carti. Un accesorio elegante que complementa cualquier atuendo.'
    },
    {
      id: 'P046',
      name: 'Brazalete Chann',
      price: 24,
      type: 'brazaletes',
      image: 'src/images/b_chann_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Brazalete Chann. Diseño sofisticado que realza tu estilo personal.'
    }
    ,
    {
      id: 'P047',
      name: 'Brazalete Chunky',
      price: 27,
      type: 'brazaletes',
      image: 'src/images/b_chunky_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Brazalete Chunky. Un accesorio audaz que añade un toque moderno a tu look.'
    }
    ,
    {
      id: 'P048',
      name: 'Brazalete Clavo',
      price: 26,
      type: 'brazaletes',
      image: 'src/images/b_clavo_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Brazalete Clavo. Diseño contemporáneo que destaca por su estilo único.'
    },
    {
      id: 'P049',
      name: 'Pulsera Corazón',
      price: 25,
      type: 'brazaletes',
      image: 'src/images/b_corazon_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Pulsera Corazón. Un símbolo perfecto de amor.'
    }
    ,
    {
      id: 'P050',
      name: 'Pulsera Mariposa',
      price: 25,
      type: 'brazaletes',
      image: 'src/images/b_mariposa_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Pulsera Mariposa. Diseño encantador que simboliza transformación y belleza.'
    },
    {
      id: 'P051',
      name: 'Brazalete Tiffany',
      price: 35,
      type: 'brazaletes',
      image: 'src/images/b_tiffany_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Brazalete Tiffany. Elegancia atemporal para complementar cualquier atuendo.'
    }
    ,
    {
      id: 'P052',
      name: 'Pulsera Vancleef',
      price: 24,
      type: 'brazaletes',
      image: 'src/images/b_vancleef_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Pulsera Vancleef. Diseño sofisticado que realza tu estilo personal.'
    }
    ,
    {
      id: 'P053',
      name: 'Collar Amor',
      price: 26,
      type: 'collares',
      image: 'src/images/c_amor_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Amor. Un símbolo perfecto de amor y compromiso.'
    },
    {
      id: 'P054',
      name: 'Collar Caracol',
      type: 'collares',
      price: 25,
      image: 'src/images/c_caracol_acero_quirurgico.jpg',
      category: 'women',
      material: 'Acero quirurgico',
      description: 'Collar Caracol. Diseño único inspirado en la naturaleza.'
    },
    {
      id: 'P055',
      name: 'Collar Cereza',
      price: 23,
      type: 'collares',
      image: 'src/images/c_cereza_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Cereza. Un toque divertido y vibrante para tu estilo diario.'
    },
    {
      id: 'P056',
      name: 'Collar Cherry',
      type: 'collares',
      price: 25,
      image: 'src/images/c_cherry_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Cherry. Un toque divertido y vibrante para tu estilo diario.'
    },
    {
      id: 'P057',
      name: 'Collar Conchita',
      type: 'collares',
      price: 23,
      image: 'src/images/c_conchita_acero_xuping.jpg',
      category: 'women',
      material: 'Acero Xuping',
      description: 'Collar Conchita. Diseño inspirado en la belleza del océano.'
    },
    {
      id: 'P058',
      name: 'Collar Cora Glass',
      type: 'collares',
      price: 26,
      image: 'src/images/c_coraglass_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Cora Glass. Diseño elegante con detalle en glass que realza tu estilo.'
    },
    {
      id: 'P059',
      name: 'Collar Corazón',
      type: 'collares',
      price: 25,
      image: 'src/images/c_corazon_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Collar Corazón. Un símbolo perfecto de amor.'
    },
    {
      id: 'P060',
      name: 'Collar Doble Corazón',
      type: 'collares',
      price: 23,
      image: 'src/images/c_doble_corazon_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Doble Corazón, Doble Encanto.'
    },
    {
      id: 'P061',
      name: 'Collar de Inicial',
      type: 'collares',
      price: 25,
      image: 'src/images/c_inicial_acero_oro_rosa.jpg',
      category: 'women',
      material: 'Acero Oro Rosa',
      description: 'Collar de Inicial. Personaliza tu estilo con tu letra favorita. Letras a pedido.'
    },
    {
      id: 'P062',
      name: 'Collar Jade',
      type: 'collares',
      price: 25,
      image: 'src/images/c_jade_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Jade. Diseño sofisticado que realza tu estilo personal.'
    },
    {
      id: 'P063',
      name: 'Collar Lazo',
      price: 28,
      type: 'collares',
      image: 'src/images/c_lazo_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Lazo. Un accesorio encantador para cualquier ocasión.'
    },
    {
      id: 'P064',
      name: 'Collar Mariposa',
      price: 23,
      type: 'collares',
      image: 'src/images/c_mariposa_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Mariposa. Diseño encantador que simboliza transformación y belleza.'
    },
    {
      id: 'P065',
      name: 'Collar Media Luna',
      price: 23,
      type: 'collares',
      image: 'src/images/c_media_luna_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Media Luna. Un diseño místico que añade un toque celestial a tu look.'
    },
    {
      id: 'P066',
      name: 'Collar Rosa',
      price: 25,
      type: 'collares',
      image: 'src/images/c_rosa_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Rosa. Diseño elegante inspirado en la belleza de las flores.'
    },
    {
      id: 'P067',
      name: 'Collar V',
      price: 26,
      type: 'collares',
      image: 'src/images/c_v_acero_xuping.jpg',
      category: 'women',
      material: 'Acero Xuping',
      description: 'Collar V. Diseño moderno y versátil, perfecto para cualquier ocasión.'
    },
    {
      id: 'P068',
      type: 'collares',
      name: 'Collar Vancleef',
      price: 27,
      image: 'src/images/c_vancleef_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Vancleef. Diseño sofisticado que realza tu estilo personal.'
    },
    {
      id: 'P069',
      type: 'collares',
      name: 'Collar Vancleef Blanco',
      price: 27,
      image: 'src/images/c_vancleefblanco_acero_enchapado.jpg',
      category: 'women',
      material: 'Acero Enchapado',
      description: 'Collar Vancleef Blanco. Diseño sofisticado que realza tu estilo personal.'
    },
    {
      id: 'P070',
      type: 'anillos',
      name: 'Pack de 3 anillos Marinos',
      price: 40,
      image: 'src/images/p_3_anillos_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Pack de 3 anillos con diseño marino. Perfectos para combinar y lucir un estilo playero.'
    },
    {
      id: 'P071',
      type: 'collares',
      name: 'Pack de Collar y Aretes Caracol',
      price: 35,
      image: 'src/images/p_caracol_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Pack de Collar y Aretes Caracol. Diseño único inspirado en la naturaleza.'
    },
    {
      id: 'P072',
      type: 'collares',
      name: 'Pack de Collar y Aretes de Flores',
      price: 35,
      image: 'src/images/p_flores_acero_inoxidable.jpg',
      category: 'women',
      material: 'Acero Inoxidable',
      description: 'Pack de Collar y Aretes de Flores. Elegancia natural para cualquier ocasión.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'products' || sectionId === 'women' || sectionId === 'men') {
      const element = document.getElementById('products-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero-section' : 'products-section');
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <div id="hero-section">
          <Hero onExplore={() => scrollToSection('products')} />
            <ScrollToTopButton />
        </div>
        
        <About />
        
        <div id="products-section">
          <ProductGrid products={products} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
