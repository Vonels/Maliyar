import Image from "next/image";
import Link from "next/link";
import styles from "./Service.module.css";

const services = [
  {
    title: "Maľovanie stien a stropov",
    price: "od 2,5 €/m²",
    image: "/images/services/painting.jpg",
    icon: "▣",
  },
  {
    title: "Stierkovanie a vyrovnávanie",
    price: "od 5,5 €/m²",
    image: "/images/services/plaster.jpg",
    icon: "△",
  },
  {
    title: "Penetrácia povrchov",
    price: "od 0,8 €/m²",
    image: "/images/services/primer.jpg",
    icon: "⌂",
  },
  {
    title: "Maľovanie fasád domov",
    price: "od 4 €/m²",
    image: "/images/services/facade.jpg",
    icon: "▱",
  },
  {
    title: "Náter dverí, okien a radiátorov",
    price: "od 15 €",
    image: "/images/services/doors.jpg",
    icon: "□",
  },
  {
    title: "Príprava a upratanie po práci",
    price: "dohodou",
    image: "/images/services/preparation.jpg",
    icon: "↗",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>MOJE SLUŽBY</span>

          <h2>
            Profesionálne maľovanie
            <br />a renovácia povrchov
          </h2>

          <p>
            Používam kvalitné farby a materiály,
            <br />
            aby výsledok vydržal čo najdlhšie
            <br />a vyzeral skvele.
          </p>

          <div className={styles.brush}>
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link href="#contact" className={styles.card} key={service.title}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                className={styles.cardImage}
              />

              <div className={styles.imageShade} />

              <div className={styles.cardIcon}>{service.icon}</div>

              <div className={styles.cardContent}>
                <div>
                  <h3>{service.title}</h3>
                  <span>{service.price}</span>
                </div>

                <div className={styles.arrow}>→</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
