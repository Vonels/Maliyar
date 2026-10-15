import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          MALIAR<span>.</span>
        </Link>

        <nav className={styles.nav}>
          <Link href="#services">Služby</Link>
          <Link href="#about">O mne</Link>
          <Link href="#contact">Kontakt</Link>
        </nav>

        <Link href="#contact" className={styles.button}>
          Získať ponuku
          <span>↗</span>
        </Link>
      </div>
    </header>
  );
}
