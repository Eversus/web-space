"use client";

import { useMemo, useState } from "react";
import Container from "../../../components/ui/Container/Container";
import Button from "../../../components/ui/Button/Button";
import styles from "./Hero.module.scss";

const services = [
  {
    id: "landing-page",
    title: "Landing Page",
    category: "Landing Page",
    price: "от 30 000 руб.",
    duration: "от 2 нед.",
    description:
      "Одностраничный сайт для продвижения услуги, продукта или рекламной кампании.",
  },
  {
    id: "corporate-site",
    title: "Корпоративный сайт",
    category: "Корпоративный сайт",
    price: "от 70 000 руб.",
    duration: "от 1 мес.",
    description:
      "Многостраничный сайт компании с подробной структурой, услугами и контактной информацией.",
  },
  {
    id: "online-store",
    title: "Интернет магазин",
    category: "Интернет магазин",
    price: "от 100 000 руб.",
    duration: "от 2 мес.",
    description:
      "С помощью дизайна и всех необходимых функций сайт помогает продавать в интернете, а ещё интегрируется с любыми CRM и учётными системами.",
  },
  {
    id: "app-development",
    title: "Разработка приложений",
    category: "Разработка приложений",
    price: "от 150 000 руб.",
    duration: "от 2.5 мес.",
    description:
      "Разработка цифровых продуктов под бизнес-задачи, внутренние сервисы и клиентские интерфейсы.",
  },
  {
    id: "support",
    title: "Тех. поддержка",
    category: "Тех. поддержка",
    price: "от 5 000 руб.",
    duration: "ежемесячно",
    description:
      "Поддержка, развитие, исправление ошибок и сопровождение уже работающих проектов.",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("online-store");

  const activeService = useMemo(
    () => services.find((service) => service.id === activeTab) ?? services[0],
    [activeTab]
  );

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
            <div className={styles.mainCard}>
              <p className={styles.cardLabel}>Делаем сайты и приложения</p>

              <p className={styles.cardText}>
                Наш технический отдел специализируется на разработке проектов
                любого масштаба: от небольших CMS-систем управления сайтом до
                любой бизнес- или бренд-среды деятельности.
              </p>

              <div className={styles.tabs} role="tablist" aria-label="Услуги">
                {services.map((service) => {
                  const isActive = service.id === activeTab;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                      onClick={() => setActiveTab(service.id)}
                    >
                      {service.title}
                    </button>
                  );
                })}
              </div>

              <div className={styles.cardMeta}>
                <div className={styles.metaContent}>
                  <span>{activeService.category}</span>
                  <p>{activeService.description}</p>
                  <strong>{activeService.price}</strong>
                  <p>{activeService.duration}</p>
                </div>

                <Button>Заказать</Button>
              </div>
            </div>

            <button className={styles.secondaryCard} type="button">
              Продвигаем сайты
            </button>

            <button className={styles.secondaryCard} type="button">
              Создаем интернет рекламу
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}