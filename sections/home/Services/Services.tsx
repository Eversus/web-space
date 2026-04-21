"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./Services.module.scss";

type CategoryId = "development" | "seo" | "ads";

type TechItem = {
  id: string;
  title: string;
  image: string;
};

type CmsItem = {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
};

type ServiceItem = {
  id: string;
  title: string;
  icon?: string;
};

type ServiceDetails = {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  technologies: TechItem[];
  cms: CmsItem[];
  primaryButtonText: string;
  secondaryButtonText: string;
};

type CategoryConfig = {
  id: CategoryId;
  label: string;
  defaultServiceId: string;
  services: ServiceItem[];
  details: Record<string, ServiceDetails>;
};

const cmsItems: CmsItem[] = [
  {
    id: "bitrix",
    title: "1C-Битрикс",
    image: "/images/cms/bitrix.png",
    width: 44,
    height: 44,
  },
  {
    id: "opencart",
    title: "OpenCart",
    image: "/images/cms/opencart.png",
    width: 126,
    height: 24,
  },
  {
    id: "joomla",
    title: "Joomla!",
    image: "/images/cms/joomla.png",
    width: 148,
    height: 32,
  },
  {
    id: "wordpress",
    title: "WordPress.com",
    image: "/images/cms/wordpress.png",
    width: 180,
    height: 30,
  },
];

const categories: CategoryConfig[] = [
  {
    id: "development",
    label: "Создание сайтов",
    defaultServiceId: "shop",
    services: [
      {
        id: "landing",
        title: "Landing\nPage",
        icon: "/images/services/landing-page.png",
      },
      {
        id: "corporate",
        title: "Корпоративный\nсайт",
        icon: "/images/services/corporate-site.png",
      },
      {
        id: "shop",
        title: "Интернет\nмагазин",
        icon: "/images/services/online-store.png",
      },
      {
        id: "apps",
        title: "Разработка\nприложений",
        icon: "/images/services/app-development.png",
      },
      {
        id: "support",
        title: "Техническая\nподдержка",
        icon: "/images/services/tech-support.png",
      },
    ],
    details: {
      landing: {
        title: "Landing Page",
        subtitle:
          "Быстрый запуск продукта или услуги с акцентом на конверсию и рекламный трафик.",
        description:
          "Создадим одностраничный сайт под конкретное предложение: услугу, продукт, акцию или лидогенерацию. Продумываем структуру, оффер, CTA и адаптацию под рекламу.",
        price: "от 30 000 ₽",
        duration: "от 2 нед.",
        technologies: [
          { id: "axure", title: "Axure", image: "/images/technologies/axure.png" },
          {
            id: "illustrator",
            title: "Adobe Illustrator",
            image: "/images/technologies/adobe-illustrator.png",
          },
          { id: "xd", title: "Adobe XD", image: "/images/technologies/adobe-xd.png" },
          { id: "html", title: "HTML", image: "/images/technologies/html.png" },
          {
            id: "javascript",
            title: "Javascript",
            image: "/images/technologies/javascript.png",
          },
          { id: "figma", title: "Figma", image: "/images/technologies/figma.png" },
          { id: "css", title: "CSS", image: "/images/technologies/css.png" },
          {
            id: "photoshop",
            title: "Photoshop",
            image: "/images/technologies/photoshop.png",
          },
        ],
        cms: [
          cmsItems[0],
          cmsItems[3],
        ],
        primaryButtonText: "ЗАКАЗАТЬ ПРОЕКТ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      corporate: {
        title: "Корпоративный сайт",
        subtitle:
          "Сайт компании с полноценной структурой, услугами, кейсами и точками контакта.",
        description:
          "Разработаем многостраничный сайт под презентацию компании, услуг и экспертности. Продумываем навигацию, разделы, посадочные страницы и подачу для будущего продвижения.",
        price: "от 70 000 ₽",
        duration: "от 1 мес.",
        technologies: [
          { id: "axure", title: "Axure", image: "/images/technologies/axure.png" },
          {
            id: "illustrator",
            title: "Adobe Illustrator",
            image: "/images/technologies/adobe-illustrator.png",
          },
          { id: "xd", title: "Adobe XD", image: "/images/technologies/adobe-xd.png" },
          { id: "html", title: "HTML", image: "/images/technologies/html.png" },
          {
            id: "javascript",
            title: "Javascript",
            image: "/images/technologies/javascript.png",
          },
          { id: "figma", title: "Figma", image: "/images/technologies/figma.png" },
          { id: "php", title: "PHP", image: "/images/technologies/php.png" },
          { id: "css", title: "CSS", image: "/images/technologies/css.png" },
          {
            id: "bootstrap",
            title: "Bootstrap",
            image: "/images/technologies/bootstrap.png",
          },
        ],
        cms: [
          cmsItems[0],
          cmsItems[2],
          cmsItems[3],
        ],
        primaryButtonText: "ЗАКАЗАТЬ ПРОЕКТ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      shop: {
        title: "Интернет - магазин",
        subtitle:
          "Комплексное решение с широкими возможностями адаптации под конкретный проект.",
        description:
          "Оценим возможности и цели исходя из специфики вашего бизнеса, поможем выбрать подходящую систему управления (CMS), настроим модель продаж и разработаем онлайн магазин способный к дальнейшему развитию.",
        price: "от 150 000 ₽",
        duration: "от 2.5 мес.",
        technologies: [
          { id: "axure", title: "Axure", image: "/images/technologies/axure.png" },
          {
            id: "illustrator",
            title: "Adobe Illustrator",
            image: "/images/technologies/adobe-illustrator.png",
          },
          { id: "xd", title: "Adobe XD", image: "/images/technologies/adobe-xd.png" },
          { id: "html", title: "HTML", image: "/images/technologies/html.png" },
          {
            id: "javascript",
            title: "Javascript",
            image: "/images/technologies/javascript.png",
          },
          {
            id: "composer",
            title: "Composer",
            image: "/images/technologies/composer.png",
          },
          {
            id: "photoshop",
            title: "Photoshop",
            image: "/images/technologies/photoshop.png",
          },
          { id: "figma", title: "Figma", image: "/images/technologies/figma.png" },
          { id: "php", title: "PHP", image: "/images/technologies/php.png" },
          { id: "css", title: "CSS", image: "/images/technologies/css.png" },
          {
            id: "bootstrap",
            title: "Bootstrap",
            image: "/images/technologies/bootstrap.png",
          },
        ],
        cms: cmsItems,
        primaryButtonText: "ЗАКАЗАТЬ ПРОЕКТ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      apps: {
        title: "Сложные веб-приложения",
        subtitle:
          "Интерфейсы и сервисы для автоматизации процессов, личных кабинетов и digital-продуктов.",
        description:
          "Проектируем и разрабатываем сложные веб-приложения под задачи бизнеса: личные кабинеты, внутренние сервисы, B2B-инструменты и интерфейсы с глубокой логикой.",
        price: "от 500 000 ₽",
        duration: "от 3 мес.",
        technologies: [
          { id: "axure", title: "Axure", image: "/images/technologies/axure.png" },
          {
            id: "illustrator",
            title: "Adobe Illustrator",
            image: "/images/technologies/adobe-illustrator.png",
          },
          { id: "xd", title: "Adobe XD", image: "/images/technologies/adobe-xd.png" },
          { id: "html", title: "HTML", image: "/images/technologies/html.png" },
          {
            id: "javascript",
            title: "Javascript",
            image: "/images/technologies/javascript.png",
          },
          { id: "figma", title: "Figma", image: "/images/technologies/figma.png" },
          { id: "php", title: "PHP", image: "/images/technologies/php.png" },
          { id: "css", title: "CSS", image: "/images/technologies/css.png" },
          {
            id: "bootstrap",
            title: "Bootstrap",
            image: "/images/technologies/bootstrap.png",
          },
        ],
        cms: [],
        primaryButtonText: "ОБСУДИТЬ ПРОЕКТ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      support: {
        title: "Техническая поддержка",
        subtitle:
          "Поддержка, развитие и доработка уже работающих сайтов и цифровых продуктов.",
        description:
          "Берём на поддержку действующие проекты: исправляем ошибки, обновляем контент, вносим правки в функциональность, следим за стабильностью и помогаем развивать сайт без потери качества.",
        price: "от 5 000 ₽",
        duration: "ежемесячно",
        technologies: [
          { id: "html", title: "HTML", image: "/images/technologies/html.png" },
          {
            id: "javascript",
            title: "Javascript",
            image: "/images/technologies/javascript.png",
          },
          { id: "php", title: "PHP", image: "/images/technologies/php.png" },
          { id: "css", title: "CSS", image: "/images/technologies/css.png" },
          {
            id: "bootstrap",
            title: "Bootstrap",
            image: "/images/technologies/bootstrap.png",
          },
        ],
        cms: cmsItems,
        primaryButtonText: "ОБСУДИТЬ ПОДДЕРЖКУ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },
    },
  },

  {
    id: "seo",
    label: "Продвижение сайтов",
    defaultServiceId: "seo-promotion",
    services: [
      { id: "seo-audit", title: "Базовый\nSEO-аудит" },
      { id: "seo-promotion", title: "SEO-\nпродвижение" },
      { id: "content-marketing", title: "Контент-\nмаркетинг" },
    ],
    details: {
      "seo-audit": {
        title: "Базовый SEO-аудит",
        subtitle:
          "Выявляем слабые места сайта и формируем понятный список приоритетных доработок.",
        description:
          "Проверяем структуру, мета-данные, индексацию, технические ошибки, контент и базовые точки роста. После аудита вы получаете рекомендации, которые можно внедрять по шагам.",
        price: "от 10 000 ₽",
        duration: "от 5 дней",
        technologies: [],
        cms: [],
        primaryButtonText: "ЗАКАЗАТЬ АУДИТ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      "seo-promotion": {
        title: "SEO-продвижение",
        subtitle:
          "Системная работа над ростом позиций, трафика и целевых обращений из поиска.",
        description:
          "Собираем семантику, дорабатываем структуру, оптимизируем страницы, усиливаем техническую базу и контент. Работаем не только над позициями, но и над реальной пользой для бизнеса.",
        price: "от 20 000 ₽/мес",
        duration: "от 1 мес.",
        technologies: [],
        cms: [],
        primaryButtonText: "ОБСУДИТЬ ПРОДВИЖЕНИЕ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      "content-marketing": {
        title: "Контент-маркетинг",
        subtitle:
          "SEO-контент, который помогает сайту расти в поиске и лучше раскрывать услуги.",
        description:
          "Подготавливаем SEO-тексты и контентные материалы под структуру сайта и поисковые запросы. Это помогает усиливать страницы услуг и привлекать дополнительный органический трафик.",
        price: "от 3 000 ₽/статья",
        duration: "500–1000 знаков",
        technologies: [],
        cms: [],
        primaryButtonText: "ЗАКАЗАТЬ КОНТЕНТ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },
    },
  },

  {
    id: "ads",
    label: "Интернет реклама",
    defaultServiceId: "context",
    services: [
      { id: "context", title: "Контекстная\nреклама" },
      { id: "target", title: "Таргетированная\nреклама" },
      { id: "strategy", title: "Комплексные\nстратегии" },
    ],
    details: {
      context: {
        title: "Контекстная реклама",
        subtitle:
          "Настройка и ведение рекламных кампаний в Яндекс.Директ и myTarget.",
        description:
          "Подбираем структуру кампаний, объявления, ключевые запросы, сегментацию и аналитику. Работаем на привлечение обращений, снижение стоимости заявки и прозрачность рекламных расходов.",
        price: "от 15 000 ₽",
        duration: "настройка",
        technologies: [],
        cms: [],
        primaryButtonText: "ЗАПУСТИТЬ РЕКЛАМУ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      target: {
        title: "Таргетированная реклама",
        subtitle:
          "Запуск и ведение рекламы во ВКонтакте и Одноклассниках под конкретную аудиторию.",
        description:
          "Настраиваем аудитории, креативы, гипотезы и воронки взаимодействия. Подходит для продвижения услуг, товаров и локального бизнеса, которому важны быстрые касания и понятная аналитика.",
        price: "от 10 000 ₽",
        duration: "запуск",
        technologies: [],
        cms: [],
        primaryButtonText: "ЗАПУСТИТЬ ТАРГЕТ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },

      strategy: {
        title: "Комплексные стратегии",
        subtitle:
          "Связываем рекламу, воронку и CRM в одну систему продаж для стабильного роста.",
        description:
          "Подходим к рекламе как к системе: анализируем путь клиента, проектируем воронку, связываем рекламные источники с CRM и усиливаем эффективность всех точек касания.",
        price: "от 50 000 ₽/мес",
        duration: "ведение",
        technologies: [],
        cms: [],
        primaryButtonText: "ОБСУДИТЬ СТРАТЕГИЮ",
        secondaryButtonText: "ПОДРОБНЕЕ",
      },
    },
  },
];

export default function Services() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<CategoryId>("development");
  const [activeServiceId, setActiveServiceId] = useState("shop");

  const activeCategory = useMemo(() => {
    return categories.find((category) => category.id === activeCategoryId) ?? categories[0];
  }, [activeCategoryId]);

  const activeDetails = useMemo(() => {
    return (
      activeCategory.details[activeServiceId] ??
      activeCategory.details[activeCategory.defaultServiceId]
    );
  }, [activeCategory, activeServiceId]);

  const handleCategoryChange = (categoryId: CategoryId) => {
    const category = categories.find((item) => item.id === categoryId);
    if (!category) return;

    setActiveCategoryId(categoryId);
    setActiveServiceId(category.defaultServiceId);
  };

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          МЫ СФОРМИРОВАЛИ ТРИ ФОРМАТА УСЛУГ,
          <br />
          ПОКРЫВАЮЩИЕ ЗАПРОСЫ ЛЮБОЙ КОМПАНИИ:
        </h2>

        <div className={styles.tabs} role="tablist" aria-label="Категории услуг">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              className={`${styles.tab} ${
                activeCategoryId === category.id ? styles.tabActive : ""
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.servicesList}>
          {activeCategory.services.map((service) => (
            <button
              key={service.id}
              type="button"
              className={`${styles.serviceItem} ${
                activeServiceId === service.id ? styles.serviceItemActive : ""
              } ${!service.icon ? styles.serviceItemTextOnly : ""}`}
              onClick={() => setActiveServiceId(service.id)}
            >
              {service.icon && (
                <span className={styles.serviceIconWrap}>
                  <Image
                    src={service.icon}
                    alt={service.title.replace("\n", " ")}
                    width={88}
                    height={88}
                    className={styles.serviceIcon}
                  />
                </span>
              )}

              <span className={styles.serviceLabel}>{service.title}</span>
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.left}>
            <h3 className={styles.title}>{activeDetails.title}</h3>
            <p className={styles.subtitle}>{activeDetails.subtitle}</p>
            <p className={styles.description}>{activeDetails.description}</p>

            <div className={styles.actions}>
              <button type="button" className={styles.primaryButton}>
                {activeDetails.primaryButtonText}
              </button>

              <button type="button" className={styles.secondaryButton}>
                {activeDetails.secondaryButtonText}
              </button>
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <p className={styles.metricLabel}>Стоимость</p>
                <p className={styles.metricValue}>{activeDetails.price}</p>
              </div>

              <div className={styles.metric}>
                <p className={styles.metricLabel}>Срок / формат</p>
                <p className={styles.metricValue}>{activeDetails.duration}</p>
              </div>
            </div>

            {activeDetails.technologies.length > 0 && (
              <div className={styles.section}>
                <p className={styles.sectionTitle}>Ключевые технологии</p>

                <div className={styles.techList}>
                  {activeDetails.technologies.map((tech) => (
                    <div key={tech.id} className={styles.techItem}>
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        width={18}
                        height={18}
                        className={styles.techImage}
                      />
                      <span>{tech.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeDetails.cms.length > 0 && (
              <div className={styles.section}>
                <p className={styles.sectionTitle}>Рекомендуемые CMS</p>

                <div className={styles.cmsList}>
                  {activeDetails.cms.map((cms) => (
                    <div key={cms.id} className={styles.cmsItem}>
                      <Image
                        src={cms.image}
                        alt={cms.title}
                        width={cms.width}
                        height={cms.height}
                        className={styles.cmsLogo}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}