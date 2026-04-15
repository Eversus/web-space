import Link from "next/link";
import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";
import styles from "./Header.module.scss";

const navItems = [
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

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.row}>
          <Link href="/" className={styles.logo}>
            WEB<span>{"//"}</span>SPACE
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.right}>
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

            <div className={styles.contacts}>
              <a href="mailto:web-space@yandex.ru" className={styles.contactLink}>
                web-space@yandex.ru
              </a>
              <a href="tel:+79101234567" className={styles.contactLink}>
                +7 (910) 123 45 67
              </a>
            </div>

            <Button variant="secondary">Оставить заявку</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}