import Link from "next/link";
import styles from "./Hero.module.css";

const benefits = [
  {
    icon: "◇",
    title: "10+",
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
          <p className={styles.eyebrow}>
            PROFESIONÁLNY <span>MALIAR</span>
          </p>

          <h1 className={styles.title}>
            Kvalitná maľba,
            <span>
              ktorá <b>mení priestor</b>
            </span>
          </h1>

          <p className={styles.description}>
            Maľovanie bytov, domov a komerčných priestorov
            <br />
            v Bratislave a okolí do 30 km. Čistá práca, spoľahlivosť
            <br />a férové ceny.
          </p>

          <div className={styles.actions}>
            <Link href="#calculator" className={styles.primary}>
              <span className={styles.buttonIcon}>▦</span>
              VYPOČÍTAŤ CENU
            </Link>

            <Link href="#contact" className={styles.secondary}>
              <span className={styles.phone}>●</span>
              ZAVOLAŤ MAJSTROVI
            </Link>
          </div>

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
