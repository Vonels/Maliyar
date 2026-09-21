import Image from "next/image";
import styles from "./WhyMe.module.css";

const benefits = [
  {
    icon: "◫",
    title: "Skúsenosti",
    text: "Dlhoročná prax s bytmi, domami a komerčnými priestormi.",
  },
  {
    icon: "◷",
    title: "Spoľahlivosť",
    text: "Dodržiavam termíny a dohodnuté ceny.",
  },
  {
    icon: "▣",
    title: "Kvalitné materiály",
    text: "Používam overené farby a profesionálne náradie.",
  },
  {
    icon: "⌂",
    title: "Čistota",
    text: "Po práci odovzdám priestor uprataný a pripravený.",
  },
];

export default function WhyMe() {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.container}`}>
        {/* PAINTER */}

        <div className={styles.painter}>
          <Image
            src="/images/painter-about.png"
            alt="Profesionálny maliar"
            fill
            sizes="300px"
            className={styles.painterImage}
          />
        </div>

        {/* TITLE */}

        <div className={styles.intro}>
          <span className={styles.eyebrow}>PREČO JA?</span>

          <h2>
            Prečo si vybrať
            <br />
            práve mňa?
          </h2>

          <div className={styles.brush}>
            <i />
            <i />
            <i />
          </div>
        </div>

        {/* BENEFITS */}

        <div className={styles.benefits}>
          {benefits.map((benefit) => (
            <div className={styles.benefit} key={benefit.title}>
              <div className={styles.icon}>{benefit.icon}</div>

              <h3>{benefit.title}</h3>

              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
