import Link from "next/link";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import styles from "./Footer.module.scss";

const footerNav = [
  { label: "Создание сайтов", href: "#" },
  { label: "Продвижение сайтов", href: "#" },
  { label: "Интернет реклама", href: "#" },
  { label: "Техническая поддержка", href: "#" },
  { label: "Контакты", href: "#" },
];

const socialLinks = [
  { label: "VK", href: "https://vk.com/" },
  { label: "Telegram", href: "https://t.me/" },
  { label: "WhatsApp", href: "https://wa.me/" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              WEB<span>{"//"}</span>SPACE
            </Link>

            <a href="mailto:web-space@yandex.ru" className={styles.contact}>
              web-space@yandex.ru
            </a>
            <a href="tel:+79101234567" className={styles.contact}>
              +7 (910) 123 45 67
            </a>
          </div>

          <nav className={styles.nav} aria-label="Навигация в подвале">
            <ul className={styles.navList}>
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.meta}>
            <ul className={styles.socials} aria-label="Социальные сети">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={item.label}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <Button variant="secondary">Оставить заявку</Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}