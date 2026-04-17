export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  cms?: string[];
  price: string;
  duration: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  cards: ServiceCard[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'websites',
    title: 'Создание сайтов',
    cards: [
      {
        id: 'landing',
        title: 'Landing Page',
        description:
          'Быстрый старт для рекламы услуги, продукта или отдельного предложения.',
        technologies: ['HTML', 'JS'],
        price: 'от 30 000 руб.',
        duration: 'от 2 нед.',
      },
      {
        id: 'corporate',
        title: 'Корпоративный сайт',
        description:
          'Многостраничный сайт компании с услугами, страницами и контактной инфраструктурой.',
        technologies: ['HTML', 'JS'],
        cms: ['WordPress'],
        price: 'от 70 000 руб.',
        duration: 'от 1 мес.',
      },
      {
        id: 'shop',
        title: 'Интернет-магазин',
        description:
          'Полноценный e-commerce проект с каталогом, карточками товаров и интеграциями.',
        technologies: ['HTML', 'JS'],
        cms: ['1С-Битрикс', 'OpenCart', 'Joomla', 'WordPress'],
        price: 'от 150 000 руб.',
        duration: 'от 2.5 мес.',
      },
      {
        id: 'apps',
        title: 'Разработка приложений',
        description:
          'Разработка интерфейсов и цифровых продуктов под бизнес-задачи.',
        technologies: ['Axure', 'AI', 'XD'],
        price: 'от 120 000 руб.',
        duration: 'от 2 мес.',
      },
      {
        id: 'support',
        title: 'Техническая поддержка',
        description:
          'Поддержка, обновления и развитие уже существующих проектов.',
        technologies: ['HTML', 'JS'],
        cms: ['1С-Битрикс', 'WordPress'],
        price: 'от 15 000 руб.',
        duration: 'ежемесячно',
      },
    ],
  },
  {
    id: 'seo',
    title: 'Продвижение сайтов',
    cards: [
      {
        id: 'seo-base',
        title: 'SEO-продвижение',
        description:
          'Работа с технической и контентной оптимизацией сайта для роста позиций в поиске.',
        technologies: ['HTML', 'JS'],
        price: 'от 25 000 руб.',
        duration: 'от 1 мес.',
      },
      {
        id: 'analytics',
        title: 'Веб-аналитика',
        description:
          'Настройка целей, событий и систем аналитики для оценки эффективности.',
        technologies: ['HTML', 'JS'],
        price: 'от 20 000 руб.',
        duration: 'от 2 нед.',
      },
      {
        id: 'seo-audit',
        title: 'SEO-аудит',
        description:
          'Анализ ошибок, структуры и контента сайта с рекомендациями по улучшению.',
        technologies: ['HTML'],
        price: 'от 15 000 руб.',
        duration: 'от 1 нед.',
      },
    ],
  },
  {
    id: 'ads',
    title: 'Интернет реклама',
    cards: [
      {
        id: 'context',
        title: 'Контекстная реклама',
        description:
          'Запуск рекламных кампаний в поиске и сетях для привлечения клиентов.',
        technologies: ['AI'],
        price: 'от 30 000 руб.',
        duration: 'от 2 нед.',
      },
      {
        id: 'target',
        title: 'Таргетированная реклама',
        description:
          'Продвижение через социальные сети с сегментацией аудитории и тестированием.',
        technologies: ['AI'],
        price: 'от 25 000 руб.',
        duration: 'от 2 нед.',
      },
      {
        id: 'creatives',
        title: 'Креативы и баннеры',
        description:
          'Подготовка рекламных материалов для эффективных кампаний.',
        technologies: ['AI', 'XD'],
        price: 'от 10 000 руб.',
        duration: 'от 1 нед.',
      },
    ],
  },
];