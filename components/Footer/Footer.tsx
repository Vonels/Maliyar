import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.main}`}>
        {/* LOGO */}

        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.roller}>
              <i className={styles.rollerTop} />
              <i className={styles.rollerHandle} />
            </span>

            <span className={styles.logoText}>
              <strong>MALIAR</strong>
              <small>BRATISLAVA</small>
            </span>
          </Link>
        </div>

        {/* QUICK LINKS */}

        <div className={styles.column}>
          <h3>Rýchle odkazy</h3>

          <nav>
            <Link href="/">Úvod</Link>
            <Link href="#services">Služby</Link>
            <Link href="#calculator">Cenník</Link>
          </nav>
        </div>

        {/* GALLERY */}

        <div className={styles.column}>
          <h3>Galéria</h3>

          <nav>
            <Link href="#portfolio">Referencie</Link>
            <Link href="#contact">Kontakt</Link>
          </nav>
        </div>

        {/* CONTACT */}

        <div className={styles.column}>
          <h3>Kontakt</h3>

          <div className={styles.contacts}>
            <a href="tel:+421948123456">
              <span>☎</span>
              +421 948 123 456
            </a>

            <a href="mailto:maliar.bratislava@gmail.com">
              <span>✉</span>
              maliar.bratislava@gmail.com
            </a>

            <p>
              <span>⌖</span>
              Bratislava a okolie do 30 km
            </p>
          </div>
        </div>

        {/* SOCIAL */}

        <div className={styles.social}>
          <h3>Sledujte ma</h3>

          <div className={styles.socialLinks}>
            <a href="#" aria-label="Facebook" className={styles.socialButton}>
              f
            </a>

            <a href="#" aria-label="Instagram" className={styles.socialButton}>
              ◎
            </a>

            <a href="#" aria-label="YouTube" className={styles.socialButton}>
              ▶
            </a>
          </div>
        </div>

        {/* SLOGAN */}

        <div className={styles.slogan}>
          <span>Spolu vytvoríme</span>
          <strong>krajšie priestory</strong>

          <div className={styles.brush}>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {new Date().getFullYear()} Maliar Bratislava. Všetky práva
            vyhradené.
          </p>

          <div>
            <Link href="/ochrana-osobnych-udajov">Ochrana osobných údajov</Link>

            <span>/</span>

            <Link href="/podmienky">Podmienky používania</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
