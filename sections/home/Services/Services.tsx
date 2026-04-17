"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./Services.module.scss";

import AxureIcon from "../../../components/ui/icons/AxureIcon";
import AiIcon from "../../../components/ui/icons/AiIcon";
import XdIcon from "../../../components/ui/icons/XdIcon";
import HtmlIcon from "../../../components/ui/icons/HtmlIcon";
import JsIcon from "../../../components/ui/icons/JsIcon";

type ServiceCategoryId = "web-dev" | "seo" | "ads";

type ServiceItem = {
  id: string;
  title: string;
  icon: string;
  shortTitle?: string;
};

type TechItem = {
  id: string;
  title: string;
  icon?: React.ReactNode;
};

type CmsItem = {
  id: string;
  title: string;
  image: string;
  width: number;
  height: number;
};

type ServiceCategory = {
  id: ServiceCategoryId;
  title: string;
  items: ServiceItem[];
  activeItemId: string;
  detail: {
    title: string;
    subtitle: string;
    description: string;
    price: string;
    duration: string;
    technologies: TechItem[];
    cms: CmsItem[];
  };
};

const serviceCategories: ServiceCategory[] = [
  {
    id: "web-dev",
    title: "Создание сайтов",
    activeItemId: "shop",
    items: [
      {
        id: "landing",
        title: "Landing Page",
        icon: "/images/services/landing-page.png",
      },
      {
        id: "corporate",
        title: "Корпоративный сайт",
        icon: "/images/services/corporate-site.png",
      },
      {
        id: "shop",
        title: "Интернет магазин",
        icon: "/images/services/online-store.png",
      },
      {
        id: "apps",
        title: "Разработка приложений",
        icon: "/images/services/app-development.png",
      },
      {
        id: "support",
        title: "Техническая поддержка",
        icon: "/images/services/tech-support.png",
      },
    ],
    detail: {
      title: "Интернет - магазин",
      subtitle:
        "Комплексное решение с широкими возможностями адаптации под конкретный проект.",
      description:
        "Оценим возможности и цели исходя из специфики вашего бизнеса, поможем выбрать подходящую систему управления (CMS), настроим модель продаж и разработаем онлайн магазин способный к дальнейшему развитию.",
      price: "от 150 000 руб.",
      duration: "от 2.5 мес.",
      technologies: [
        { id: "axure", title: "Axure", icon: <AxureIcon /> },
        { id: "ai", title: "Adobe Ilustrator", icon: <AiIcon /> },
        { id: "xd", title: "Adobe XD", icon: <XdIcon /> },
        { id: "html", title: "HTML", icon: <HtmlIcon /> },
        { id: "js", title: "Javascript", icon: <JsIcon /> },

        // Для этих технологий ты позже можешь подставить свои иконки
        { id: "composer", title: "Composer" },
        { id: "photoshop", title: "Photoshop" },
        { id: "figma", title: "Figma" },
        { id: "php", title: "PHP" },
        { id: "css", title: "CSS" },
        { id: "bootstrap", title: "Bootstrap" },
      ],
      cms: [
        {
          id: "bitrix",
          title: "1C-Битрикс",
          image: "/images/cms/bitrix.png",
          width: 54,
          height: 54,
        },
        {
          id: "opencart",
          title: "OpenCart",
          image: "/images/cms/opencart.png",
          width: 171,
          height: 34,
        },
        {
          id: "joomla",
          title: "Joomla!",
          image: "/images/cms/joomla.png",
          width: 236,
          height: 51,
        },
        {
          id: "wordpress",
          title: "WordPress.com",
          image: "/images/cms/wordpress.png",
          width: 284,
          height: 48,
        },
      ],
    },
  },
  {
    id: "seo",
    title: "Продвижение сайтов",
    activeItemId: "seo",
    items: [],
    detail: {
      title: "Продвижение сайтов",
      subtitle: "Повышаем видимость сайта в поиске и увеличиваем поток заявок.",
      description:
        "Проводим аудит, собираем семантику, оптимизируем страницы, работаем над техническим состоянием сайта и помогаем получать больше целевого трафика.",
      price: "от 30 000 руб.",
      duration: "от 1 мес.",
      technologies: [],
      cms: [],
    },
  },
  {
    id: "ads",
    title: "Интернет реклама",
    activeItemId: "ads",
    items: [],
    detail: {
      title: "Интернет реклама",
      subtitle: "Настраиваем и ведём рекламные кампании с прозрачной аналитикой.",
      description:
        "Запускаем рекламные кампании в поиске, сетях и социальных площадках, тестируем объявления и оптимизируем стоимость заявки.",
      price: "от 25 000 руб.",
      duration: "от 1 мес.",
      technologies: [],
      cms: [],
    },
  },
];

export default function Services() {
  const [activeCategoryId, setActiveCategoryId] =
    useState<ServiceCategoryId>("web-dev");

  const activeCategory = useMemo(
    () =>
      serviceCategories.find((category) => category.id === activeCategoryId) ??
      serviceCategories[0],
    [activeCategoryId]
  );

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.title}>
          МЫ СФОРМИРОВАЛИ ТРИ ФОРМАТА УСЛУГ,
          <br />
          ПОКРЫВАЮЩИЕ ЗАПРОСЫ ЛЮБОЙ КОМПАНИИ:
        </h2>

        <div className={styles.categoryTabs} role="tablist" aria-label="Категории услуг">
          {serviceCategories.map((category) => {
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.categoryTab} ${
                  isActive ? styles.categoryTabActive : ""
                }`}
                onClick={() => setActiveCategoryId(category.id)}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {activeCategory.id === "web-dev" && (
          <>
            <div className={styles.serviceIcons}>
              {activeCategory.items.map((item) => {
                const isActive = item.id === activeCategory.activeItemId;

                return (
                  <div
                    key={item.id}
                    className={`${styles.serviceIconCard} ${
                      isActive ? styles.serviceIconCardActive : ""
                    }`}
                  >
                    <div className={styles.serviceIconImageWrap}>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={120}
                        height={120}
                        className={styles.serviceIconImage}
                      />
                    </div>
                    <p className={styles.serviceIconTitle}>{item.title}</p>
                  </div>
                );
              })}
            </div>

            <div className={styles.content}>
              <div className={styles.left}>
                <h3 className={styles.serviceTitle}>
                  {activeCategory.detail.title}
                </h3>

                <p className={styles.serviceSubtitle}>
                  {activeCategory.detail.subtitle}
                </p>

                <p className={styles.serviceDescription}>
                  {activeCategory.detail.description}
                </p>

                <div className={styles.actions}>
                  <button type="button" className={styles.primaryButton}>
                    ЗАКАЗАТЬ ПРОЕКТ
                  </button>

                  <button type="button" className={styles.secondaryButton}>
                    ПОДРОБНЕЕ
                  </button>
                </div>
              </div>

              <div className={styles.right}>
                <div className={styles.detailsCard}>
                  <div className={styles.metrics}>
                    <div className={styles.metric}>
                      <p className={styles.metricLabel}>Стоимость разработки</p>
                      <p className={styles.metricValue}>
                        {activeCategory.detail.price}
                      </p>
                    </div>

                    <div className={styles.metric}>
                      <p className={styles.metricLabel}>Время разработки</p>
                      <p className={styles.metricValue}>
                        {activeCategory.detail.duration}
                      </p>
                    </div>
                  </div>

                  <div className={styles.techSection}>
                    <p className={styles.sectionLabel}>Ключевые технологии</p>

                    <div className={styles.techList}>
                      {activeCategory.detail.technologies.map((tech) => (
                        <div key={tech.id} className={styles.techBadge}>
                          {tech.icon && (
                            <span className={styles.techBadgeIcon}>
                              {tech.icon}
                            </span>
                          )}
                          <span className={styles.techBadgeText}>
                            {tech.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cmsSection}>
                    <p className={styles.sectionLabel}>Рекомендуемые CMS</p>

                    <div className={styles.cmsList}>
                      {activeCategory.detail.cms.map((cms) => (
                        <div key={cms.id} className={styles.cmsItem}>
                          <Image
                            src={cms.image}
                            alt={cms.title}
                            width={cms.width}
                            height={cms.height}
                            className={styles.cmsImage}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeCategory.id === "seo" && (
          <div className={styles.placeholderBlock}>
            <h3 className={styles.placeholderTitle}>
              Продвижение сайтов
            </h3>
            <p className={styles.placeholderText}>
              Здесь будет контент для вкладки «Продвижение сайтов».
            </p>
          </div>
        )}

        {activeCategory.id === "ads" && (
          <div className={styles.placeholderBlock}>
            <h3 className={styles.placeholderTitle}>
              Интернет реклама
            </h3>
            <p className={styles.placeholderText}>
              Здесь будет контент для вкладки «Интернет реклама».
            </p>
          </div>
        )}
      </div>
    </section>
  );
}