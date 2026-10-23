import styles from "./Contact.module.css";

const PHONE = "+421951285550";
const WHATSAPP = "421951285550";
const TELEGRAM = "SmalMaliar";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.container}`}>
        {/* LEFT */}

        <div className={styles.left}>
          <span className={styles.eyebrow}>KONTAKT</span>

          <h2>
            Potrebujete
            <br />
            <span>vymaľovať priestor?</span>
          </h2>

          <p>
            Ozvite sa mi a dohodneme si rozsah prác, termín a orientačnú cenu.
          </p>

          <div className={styles.brush}>
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* CONTACTS */}

        <div className={styles.center}>
          <span className={styles.centerLabel}>VYBERTE SI SPÔSOB KONTAKTU</span>

          <div className={styles.contacts}>
            <a href={`tel:${PHONE}`} className={styles.contact}>
              <div className={styles.icon}>☎</div>

              <div className={styles.contactText}>
                <span>TELEFÓN</span>
                <strong>+421 951 285 550</strong>
                <small>Zavolať majstrovi</small>
              </div>

              <b className={styles.arrow}>→</b>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact}
            >
              <div className={`${styles.icon} ${styles.whatsapp}`}>W</div>

              <div className={styles.contactText}>
                <span>WHATSAPP</span>
                <strong>Napísať správu</strong>
                <small>Rýchla komunikácia</small>
              </div>

              <b className={styles.arrow}>→</b>
            </a>

            <a
              href={`https://t.me/${TELEGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contact}
            >
              <div className={`${styles.icon} ${styles.telegram}`}>✈</div>

              <div className={styles.contactText}>
                <span>TELEGRAM</span>
                <strong>Napísať správu</strong>
                <small>Kontakt cez Telegram</small>
              </div>

              <b className={styles.arrow}>→</b>
            </a>
          </div>
        </div>

        {/* INFO */}

        <div className={styles.right}>
          <span className={styles.responseLabel}>RÝCHLA ODPOVEĎ</span>

          <h3>
            Som vám
            <br />k dispozícii
          </h3>

          <div className={styles.hours}>
            <span>Denne</span>
            <strong>8:00 – 19:00</strong>
          </div>

          <div className={styles.location}>
            <div className={styles.locationIcon}>⌖</div>

            <div>
              <span>PÔSOBNOSŤ</span>
              <strong>Bratislava + 30 km</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
