import Link from "next/link";
import styles from "./Hero.module.css";

const PHONE = "+421951285550";

const benefits = [
  {
    icon: "◇",
    title: "20+",
    text: "rokov skúseností",
  },
  {
    icon: "◇",
    title: "Záruka",
    text: "na prácu",
  },
  {
    icon: "◷",
    title: "Rýchla",
    text: "realizácia",
  },
  {
    icon: "⌖",
    title: "Do 30 km",
    text: "od Bratislavy",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          {/* EYEBROW */}

          <p className={styles.eyebrow}>
            PROFESIONÁLNY <span>MALIAR</span>
          </p>

          {/* TITLE */}

          <h1 className={styles.title}>
            Kvalitná maľba,
            <span>
              ktorá <b>mení priestor</b>
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p className={styles.description}>
            Maľovanie bytov, domov a komerčných priestorov v Bratislave a okolí
            do 30 km. Čistá práca, spoľahlivosť a férové ceny.
          </p>

          {/* BUTTONS */}

          <div className={styles.actions}>
            {/* ПЕРВАЯ КНОПКА — К КОНТАКТАМ */}

            <Link href="#contact" className={styles.primary}>
              <span className={styles.buttonIcon}>→</span>
              ZÍSKAŤ CENOVÚ PONUKU
            </Link>

            {/* ВТОРАЯ КНОПКА — СРАЗУ ЗВОНОК */}

            <a href={`tel:${PHONE}`} className={styles.secondary}>
              <span className={styles.phone}>☎</span>
              ZAVOLAŤ MAJSTROVI
            </a>
          </div>

          {/* BENEFITS */}

          <div className={styles.benefits}>
            {benefits.map((benefit) => (
              <div className={styles.benefit} key={benefit.title}>
                <div className={styles.icon}>{benefit.icon}</div>

                <div>
                  <strong>{benefit.title}</strong>

                  <span>{benefit.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
