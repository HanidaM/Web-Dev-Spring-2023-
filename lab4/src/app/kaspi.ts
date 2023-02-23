export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    link: string;
    rating: number;
    category: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ',
      price: 138925,
      description: 'Сверхвысокая частота обновления. Высокая частота обновления 120 Гц обеспечивает бесперебойную работу и высокую детализацию изображения при просмотре веб-страниц. Частота дискретизации сенсорного слоя. Высокая частота дискретизации до 360 Гц обеспечивает более высокую чувствительность и удобство работы. Она адаптируется к каждому движению, помогая легко побеждать. Технология LiquidCool. Тепловые трубки и технология охлаждения с помощью многослойных графитовых листов для максимальной теплоэффективности. Оптимальный баланс между производительностью и управлением температурой. Восьмиядерный процессор MediaTek Helio G96. 1 фотография, 108 млн. деталей. Redmi Note 11 Pro оснащен основной камерой 108 Мп, которая записывает 108 млн. деталей в режиме 108 Мп, обеспечивая кристальную четкость даже при многократном увеличении. Запечатлейте все великолепные ночные пейзажи. Благодаря трем передовым технологиям камера работает ночью так же, как при дневном свете. ',
      image: '../assets/img/1.jpg',
      rating: 456,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
      category: 1
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      price: 369550,
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четкоПроцессор A15 Bionic и камера TrueDepth также обеспечивают работу Face ID, невероятно надежной технологии аутентификации. Объем встроенной памяти iPhone 13 составляет 128 ГБ — места хватит для всех важных фото и видео. Apple iPhone 13 работает от аккумулятора на 2.5 часа дольше предыдущих версий. ',
      image: '../assets/img/2.jpg',
      rating:  778,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item',
      category: 1
    },
    {
      id: 3,
      name: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
      price: 104000,
      description: 'Откройте для себя больше возможностей. Получите всё и сразу. 6.6-дюймовый TFT-дисплей Galaxy A23 с V-образным вырезом позволяет видеть и делать больше. С технологией FHD+ и частотой обновления 90 Гц контент всегда будет оставаться четким и плавным. Делайте бесподобные фото с системой из четырех камер. Запечатлейте ценные моменты во всех деталях с основной камерой 50 Мп. Расширьте угол обзора с ультраширокоугольной камерой. Камера с датчиком глубины поможет настроить фокус, а макрообъектив — снять всё до мельчайших деталей. Технология OIS. Наконец-то в Galaxy A23.',
      image: '../assets/img/3.jpg',
      rating: 226,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
      category: 1
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
      price: 292489,
      description: 'Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу',
      image: '../assets/img/4.jpg',
      rating:  292358,
      link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
      category: 1
    },
  
    {
      id: 5,
      name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
      price: 128350,
      description: 'Операционная система: MIUI 12 (на базе Android 11) / Количество SIM-карт: 2 / Диагональ дисплея: 6,67″ - 16,94 см / Объем встроенной памяти: 256 GB / Основная камера: 108 Mpx + 8 Mpx + 5 Mpx + 2 Mpx / Фронтальная камера: 16 Mpx / NFC: Да ',
      image: '../assets/img/5.jpg',
      rating:  1,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
      category: 1
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый',
      price: 696700,
      description: 'Операционная система: iOS 16 / Количество SIM-карт: 1 / Диагональ дисплея: 6,7″ - 17,02 см / Объем встроенной памяти: 256 GB / Основная камера: 48 Mpx + 12 Mpx + 12 Mpx / Фронтальная камера: 12 Mpx / NFC: Да ',
      image: '../assets/img/6.jpg',
      rating:  2,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item',
      category: 2
    },
    { 
      id: 7,
      name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ черный',
      price: 129585,
      description: 'Операционная система: Android / Количество SIM-карт: 2 / Диагональ дисплея: 6,4″ - 16,25 см / Объем встроенной памяти: 128 GB / Основная камера: 48 Mpx + 8 Mpx + 5 Mpx + 2 Mpx / Фронтальная камера: 13 Mpx / NFC: Да ',
      image: '../assets/img/7.jpg',
      rating: 186,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item',
      category: 2
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 14 128Gb черный',
      price: 423720,
      description: 'Операционная система: iOS 16 / Количество SIM-карт: 1 / Диагональ дисплея: 6,1″ - 15,49 см / Объем встроенной памяти: 128 GB / Основная камера: 12 Mpx + 12 Mpx / Фронтальная камера: 12 Mpx / NFC: Да ',
      image: '../assets/img/8.jpg',
      rating:  543,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000#!/item',
      category: 2
    },
    {
      id: 9,
      name: 'Смартфон Huawei nova 10 SE 8 ГБ/128 ГБ зеленый',
      price: 189890,
      description: 'Операционная система: EMUI 12.0 / Количество SIM-карт: 2 / Диагональ дисплея: 6,67″ - 16,94 см / Объем встроенной памяти: 128 GB / Основная камера: 50 Mpx + 8 Mpx + 2 Mpx / Фронтальная камера: 60 Mpx / NFC: Да ',
      image: '../assets/img/9.jpg',
      rating: 9,
      link: 'https://kaspi.kz/shop/p/huawei-nova-10-se-8-gb-128-gb-zelenyi-107221521/?c=750000000#!/item',
      category: 2
    },
    {
      id: 10,
      name: 'Смартфон Samsung Galaxy A13 4 ГБ/64 ГБ черный',
      price: 79605,
      description: 'Операционная система: Android 12 / Количество SIM-карт: 2 / Диагональ дисплея: 6,6″ - 16,76 см / Объем встроенной памяти: 128 GB / Основная камера: 50 Mpx + 5 Mpx + 2 Mpx + 2 Mpx / Фронтальная камера: 8 Mpx / NFC: Да ',
      image: '../assets/img/10.jpg',
      rating:  363,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-64-gb-chernyi-104253246/?c=750000000#!/item',
      category: 2
    },
  
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */