"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./Services.module.scss";

import AxureIcon from "../../../components/ui/icons/AxureIcon";
import AiIcon from "../../../components/ui/icons/AiIcon";
import XdIcon from "../../../components/ui/icons/XdIcon";
import HtmlIcon from "../../../components/ui/icons/HtmlIcon";
import JsIcon from "../../../components/ui/icons/JsIcon";

type CategoryId = "sites" | "seo" | "ads";

type ServiceItem = {
  id: string;
  title: string;
  icon: string;
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

type ServiceDetails = {
  title: string;
  subtitle: string;
  description: string;
  price: string;
  duration: string;
  technologies: TechItem[];
  cms: CmsItem[];
};

const categoryTabs: { id: CategoryId; label: string }[] = [
  { id: "sites", label: "Создание сайтов" },
  { id: "seo", label: "Продвижение сайтов" },
  { id: "ads", label: "Интернет реклама" },
];

const siteServices: ServiceItem[] = [
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
];

const siteServiceDetails: Record<string, ServiceDetails> = {
  landing: {
    title: "Landing Page",
    subtitle: "Быстрый запуск продукта или услуги с высокой конверсией.",
    description:
      "Создадим одностраничный сайт, продуманный под рекламный трафик и конкретную цель: получение заявок, регистрацию или продажу продукта.",
    price: "от 50 000 руб.",
    duration: "от 2 нед.",
    technologies: [
      { id: "axure", title: "Axure", icon: <AxureIcon /> },
      { id: "ai", title: "Adobe Illustrator", icon: <AiIcon /> },
      { id: "xd", title: "Adobe XD", icon: <XdIcon /> },
      { id: "html", title: "HTML", icon: <HtmlIcon /> },
      { id: "js", title: "Javascript", icon: <JsIcon /> },
      { id: "figma", title: "Figma" },
      { id: "css", title: "CSS" },
    ],
    cms: [
      {
        id: "bitrix",
        title: "1C-Битрикс",
        image: "/images/cms/bitrix.png",
        width: 44,
        height: 44,
      },
      {
        id: "wordpress",
        title: "WordPress.com",
        image: "/images/cms/wordpress.png",
        width: 180,
        height: 30,
      },
    ],
  },

  corporate: {
    title: "Корпоративный сайт",
    subtitle: "Представительство компании в интернете с акцентом на доверие.",
    description:
      "Разработаем структуру и страницы компании, покажем услуги, преимущества, кейсы и контактную информацию для удобной коммуникации с клиентами.",
    price: "от 100 000 руб.",
    duration: "от 1.5 мес.",
    technologies: [
      { id: "axure", title: "Axure", icon: <AxureIcon /> },
      { id: "ai", title: "Adobe Illustrator", icon: <AiIcon /> },
      { id: "xd", title: "Adobe XD", icon: <XdIcon /> },
      { id: "html", title: "HTML", icon: <HtmlIcon /> },
      { id: "js", title: "Javascript", icon: <JsIcon /> },
      { id: "figma", title: "Figma" },
      { id: "php", title: "PHP" },
      { id: "css", title: "CSS" },
    ],
    cms: [
      {
        id: "bitrix",
        title: "1C-Битрикс",
        image: "/images/cms/bitrix.png",
        width: 44,
        height: 44,
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
    ],
  },

  shop: {
    title: "Интернет - магазин",
    subtitle:
      "Комплексное решение с широкими возможностями адаптации под конкретный проект.",
    description:
      "Оценим возможности и цели исходя из специфики вашего бизнеса, поможем выбрать подходящую систему управления (CMS), настроим модель продаж и разработаем онлайн магазин способный к дальнейшему развитию.",
    price: "от 150 000 руб.",
    duration: "от 2.5 мес.",
    technologies: [
      { id: "axure", title: "Axure", icon: <AxureIcon /> },
      { id: "ai", title: "Adobe Illustrator", icon: <AiIcon /> },
      { id: "xd", title: "Adobe XD", icon: <XdIcon /> },
      { id: "html", title: "HTML", icon: <HtmlIcon /> },
      { id: "js", title: "Javascript", icon: <JsIcon /> },
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
    ],
  },

  apps: {
    title: "Разработка приложений",
    subtitle: "Интерфейсы и цифровые продукты под задачи бизнеса.",
    description:
      "Создадим удобные мобильные и веб-приложения для автоматизации процессов, взаимодействия с клиентами и развития вашего цифрового продукта.",
    price: "от 180 000 руб.",
    duration: "от 2 мес.",
    technologies: [
      { id: "axure", title: "Axure", icon: <AxureIcon /> },
      { id: "ai", title: "Adobe Illustrator", icon: <AiIcon /> },
      { id: "xd", title: "Adobe XD", icon: <XdIcon /> },
      { id: "html", title: "HTML", icon: <HtmlIcon /> },
      { id: "js", title: "Javascript", icon: <JsIcon /> },
      { id: "figma", title: "Figma" },
      { id: "php", title: "PHP" },
      { id: "css", title: "CSS" },
      { id: "bootstrap", title: "Bootstrap" },
    ],
    cms: [],
  },

  support: {
    title: "Техническая поддержка",
    subtitle: "Поддержка, обновления и развитие уже существующих проектов.",
    description:
      "Следим за стабильностью, исправляем ошибки, вносим правки, обновляем функциональность и обеспечиваем бесперебойную работу сайта.",
    price: "от 15 000 руб.",
    duration: "от 1 мес.",
    technologies: [
      { id: "html", title: "HTML", icon: <HtmlIcon /> },
      { id: "js", title: "Javascript", icon: <JsIcon /> },
      { id: "php", title: "PHP" },
      { id: "css", title: "CSS" },
      { id: "bootstrap", title: "Bootstrap" },
    ],
    cms: [
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
    ],
  },
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("sites");
  const [activeService, setActiveService] = useState<string>("shop");

  const currentDetails = useMemo(() => {
    if (activeCategory !== "sites") return null;
    return siteServiceDetails[activeService];
  }, [activeCategory, activeService]);

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          МЫ СФОРМИРОВАЛИ ТРИ ФОРМАТА УСЛУГ,
          <br />
          ПОКРЫВАЮЩИЕ ЗАПРОСЫ ЛЮБОЙ КОМПАНИИ:
        </h2>

        <div className={styles.tabs}>
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${
                activeCategory === tab.id ? styles.tabActive : ""
              }`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeCategory === "sites" && currentDetails && (
          <>
            <div className={styles.servicesList}>
              {siteServices.map((item) => {
                const isActive = item.id === activeService;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.serviceItem} ${
                      isActive ? styles.serviceItemActive : ""
                    }`}
                    onClick={() => setActiveService(item.id)}
                  >
                    <span className={styles.serviceIconWrap}>
                      <Image
                        src={item.icon}
                        alt={item.title.replace("\n", " ")}
                        width={88}
                        height={88}
                        className={styles.serviceIcon}
                      />
                    </span>
                    <span className={styles.serviceLabel}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className={styles.content}>
              <div className={styles.left}>
                <h3 className={styles.title}>{currentDetails.title}</h3>

                <p className={styles.subtitle}>{currentDetails.subtitle}</p>

                <p className={styles.description}>{currentDetails.description}</p>

                <div className={styles.actions}>
                  <button type="button" className={styles.primaryButton}>
                    ЗАКАЗАТЬ ПРОЕКТ
                  </button>

                  <button type="button" className={styles.secondaryButton}>
                    ПОДРОБНЕЕ
                  </button>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <p className={styles.metricLabel}>Стоимость разработки</p>
                    <p className={styles.metricValue}>{currentDetails.price}</p>
                  </div>

                  <div className={styles.metric}>
                    <p className={styles.metricLabel}>Время разработки</p>
                    <p className={styles.metricValue}>{currentDetails.duration}</p>
                  </div>
                </div>

                <div className={styles.section}>
                  <p className={styles.sectionTitle}>Ключевые технологии</p>

                  <div className={styles.techList}>
                    {currentDetails.technologies.map((tech) => (
                      <div key={tech.id} className={styles.techItem}>
                        {tech.icon && (
                          <span className={styles.techIcon}>{tech.icon}</span>
                        )}
                        <span>{tech.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {currentDetails.cms.length > 0 && (
                  <div className={styles.section}>
                    <p className={styles.sectionTitle}>Рекомендуемые CMS</p>

                    <div className={styles.cmsList}>
                      {currentDetails.cms.map((cms) => (
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
          </>
        )}

        {activeCategory === "seo" && (
          <div className={styles.placeholder}>
            <p>Блок «Продвижение сайтов» будет заполнен по аналогии.</p>
          </div>
        )}

        {activeCategory === "ads" && (
          <div className={styles.placeholder}>
            <p>Блок «Интернет реклама» будет заполнен по аналогии.</p>
          </div>
        )}
      </div>
    </section>
  );
}