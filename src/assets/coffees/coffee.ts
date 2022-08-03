import tradicional from './tradicional.png'
import americano from './americano.png'
import cremoso from './cremoso.png'
import gelado from './gelado.png'
import comLeite from './com-leite.png'
import latte from './latte.png'
import capuccino from './capuccino.png'
import macchiato from './macchiato.png'
import mocaccino from './mocaccino.png'
import chocolateQuente from './chocolate-quente.png'
import cubano from './cubano.png'
import havaiano from './havaiano.png'
import arabe from './arabe.png'
import irlandes from './irlandes.png'

type Category = 'tradicional' | 'especial' | 'com leite' | 'alcoólico' | 'gelado'

export const coffees = [
  {
    image: tradicional,
    categories: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
    id: 'expressotradicional-01',
  },

  {
    image: americano,
    categories: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90,
    id: 'expressoamericano-02',
  },

  {
    image: cremoso,
    categories: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
    id: 'expressocremoso-03',
  },

  {
    image: gelado,
    categories: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90,
    id: 'expressogelado-04',
  },

  {
    image: comLeite,
    categories: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.90,
    id: 'cafecomleite-05',
  },

  {
    image: latte,
    categories: ['tradicional', 'com leite'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90,
    id: 'latte-06',
  },

  {
    image: capuccino,
    categories: ['tradicional', 'com leite'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90,
    id: 'capuccino-07',
  },

  {
    image: macchiato,
    categories: ['tradicional', 'com-leite'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90,
    id: 'macchiato-08',
  },

  {
    image: mocaccino,
    categories: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90,
    id: 'mocaccino-09',
  },

  {
    image: chocolateQuente,
    categories: ['tradicional', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90,
    id: 'chocolatequente-10',
  },

  {
    image: cubano,
    categories: ['tradicional', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90,
    id: 'cubano-11',
  },

  {
    image: havaiano,
    categories: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90,
    id: 'havaiano-12',
  },

  {
    image: arabe,
    categories: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90,
    id: 'arabe-13',
  },

  {
    image: irlandes,
    categories: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90,
    id: 'irlandes-14',
  },
]

export type CoffeeType = typeof coffees[0]