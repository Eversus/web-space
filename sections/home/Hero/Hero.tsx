"use client";

import { useMemo, useState } from "react";
import Container from "../../../components/ui/Container/Container";
import Button from "../../../components/ui/Button/Button";
import styles from "./Hero.module.scss";

type ServiceItem = {
  id: string;
  title: string;
  category: string;
  price: string;
  duration: string;
  description: string;
  cms: string[];
};

type WebDevDirection = {
  id: "web-dev";
  title: string;
  description: string;
  services: ServiceItem[];
};

type SimpleDirection = {
  id: "seo" | "ads";
  title: string;
  description: string;
  price: string;
  duration: string;
};

type HeroDirection = WebDevDirection | SimpleDirection;

const heroDirections: HeroDirection[] = [
  {
    id: "web-dev",
    title: "Делаем сайты и приложения",
    description:
      "Наш технический отдел специализируется на разработке проектов любого масштаба: от небольших CMS-систем управления сайтом до любой бизнес- или бренд-среды деятельности.",
    services: [
      {
        id: "landing-page",
        title: "Landing Page",
        category: "LANDING PAGE",
        price: "от 30 000 руб.",
        duration: "от 2 нед.",
        description:
          "Одностраничный сайт для продвижения услуги, продукта или рекламной кампании.",
        cms: ["Tilda", "WordPress"],
      },
      {
        id: "corporate-site",
        title: "Корпоративный сайт",
        category: "КОРПОРАТИВНЫЙ САЙТ",
        price: "от 70 000 руб.",
        duration: "от 1 мес.",
        description:
          "Многостраничный сайт компании с подробной структурой, услугами и контактной информацией.",
        cms: ["1C-Битрикс", "Joomla", "WordPress"],
      },
      {
        id: "online-store",
        title: "Интернет магазин",
        category: "ИНТЕРНЕТ МАГАЗИН",
        price: "от 100 000 руб.",
        duration: "от 2 мес.",
        description:
          "С топовым дизайном и всеми необходимыми функциями, чтобы сделать вас лучшими на рынке, а ещё интегрируем с любыми учётными системами.",
        cms: ["1C-Битрикс", "OpenCart", "Joomla"],
      },
      {
        id: "app-development",
        title: "Разработка приложений",
        category: "РАЗРАБОТКА ПРИЛОЖЕНИЙ",
        price: "от 150 000 руб.",
        duration: "от 2.5 мес.",
        description:
          "Разработка цифровых продуктов под бизнес-задачи, внутренние сервисы и клиентские интерфейсы.",
        cms: ["React", "Next.js", "Node.js"],
      },
      {
        id: "support",
        title: "Тех. поддержка",
        category: "ТЕХ. ПОДДЕРЖКА",
        price: "от 5 000 руб.",
        duration: "ежемесячно",
        description:
          "Поддержка, развитие, исправление ошибок и сопровождение уже работающих проектов.",
        cms: ["WordPress", "Joomla", "1C-Битрикс"],
      },
    ],
  },
  {
    id: "seo",
    title: "Продвигаем сайты",
    description:
      "Помогаем сайту получать больше целевого трафика, усиливаем видимость в поиске и повышаем конверсию.",
    price: "от 15 000 руб.",
    duration: "от 1 мес.",
  },
  {
    id: "ads",
    title: "Создаем интернет рекламу",
    description:
      "Запускаем и ведем рекламные кампании, приводим целевые заявки и оптимизируем рекламные расходы.",
    price: "от 10 000 руб.",
    duration: "от 1 мес.",
  },
];

export default function Hero() {
  const [activeDirection, setActiveDirection] =
    useState<HeroDirection["id"]>("web-dev");
  const [activeService, setActiveService] = useState("online-store");

  const currentDirection =
    heroDirections.find((direction) => direction.id === activeDirection) ??
    heroDirections[0];

  const isWebDevDirection = currentDirection.id === "web-dev";

  const currentServices = useMemo(() => {
    if (!isWebDevDirection) return [];
    return currentDirection.services;
  }, [isWebDevDirection, currentDirection]);

  const currentService = useMemo(() => {
    if (!isWebDevDirection) return null;

    return (
      currentServices.find((service) => service.id === activeService) ??
      currentServices[0]
    );
  }, [isWebDevDirection, currentServices, activeService]);

  const handleDirectionChange = (directionId: HeroDirection["id"]) => {
    setActiveDirection(directionId);

    if (directionId === "web-dev") {
      setActiveService("online-store");
    }
  };

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              WEB<span>{"//"}</span>SPACE
            </h1>

            <p className={styles.subtitle}>
              Создаем цифровую среду для пользователя
            </p>

            <Button>Рассчитать проект</Button>
          </div>

          <div className={styles.panel}>
            {heroDirections.map((direction) => {
              const isActive = direction.id === activeDirection;

              if (!isActive) {
                return (
                  <button
                    key={direction.id}
                    type="button"
                    className={styles.collapsedCard}
                    onClick={() => handleDirectionChange(direction.id)}
                  >
                    {direction.title}
                  </button>
                );
              }

              return (
                <div key={direction.id} className={styles.mainCard}>
                  <div className={styles.mainCardHeader}>
                    <p className={styles.cardLabel}>{direction.title}</p>
                  </div>

                  {direction.id === "web-dev" && currentService && (
                    <div className={styles.webDevLayout}>
                      <div className={styles.webDevLeft}>
                        <p className={styles.cardText}>{direction.description}</p>

                        <div
                          className={styles.serviceTabs}
                          role="tablist"
                          aria-label="Услуги разработки"
                        >
                          {currentServices.map((service) => {
                            const isServiceActive = service.id === activeService;

                            return (
                              <button
                                key={service.id}
                                type="button"
                                role="tab"
                                aria-selected={isServiceActive}
                                className={`${styles.serviceTab} ${
                                  isServiceActive ? styles.serviceTabActive : ""
                                }`}
                                onClick={() => setActiveService(service.id)}
                              >
                                {service.title}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className={styles.serviceCard}>
                        <p className={styles.serviceCardTitle}>
                          {currentService.category}
                        </p>

                        <p className={styles.serviceCardText}>
                          {currentService.description}
                        </p>

                        <div className={styles.serviceCardMeta}>
                          <p>
                            Цена разработки: <strong>{currentService.price}</strong>
                          </p>
                          <p>
                            Время разработки:{" "}
                            <strong>{currentService.duration}</strong>
                          </p>
                        </div>

                        <div className={styles.cmsBlock}>
                          <strong>Используемые CMS:</strong>

                          <ul className={styles.cmsList}>
                            {currentService.cms.map((cmsItem) => (
                              <li key={cmsItem} className={styles.cmsItem}>
                                {cmsItem}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button>Заказать</Button>
                      </div>
                    </div>
                  )}

                  {direction.id !== "web-dev" && (
                    <div className={styles.simpleDirectionMeta}>
                      <p className={styles.cardText}>{direction.description}</p>

                      <div className={styles.simpleMetaBlock}>
                        <p>
                          Цена: <strong>{direction.price}</strong>
                        </p>
                        <p>
                          Срок: <strong>{direction.duration}</strong>
                        </p>
                      </div>

                      <Button>Заказать</Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}