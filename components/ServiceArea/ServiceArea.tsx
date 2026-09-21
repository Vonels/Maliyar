import Image from "next/image";
import styles from "./ServiceArea.module.css";

const leftLocations = [
  "Bratislava",
  "Pezinok",
  "Senec",
  "Stupava",
  "Svätý Jur",
];

const rightLocations = [
  "Ivanka pri Dunaji",
  "Bernolákovo",
  "Malinovo",
  "Šamorín",
  "a ďalšie",
];

export default function ServiceArea() {
  return (
    <section className={styles.section} id="area">
      <div className={`container ${styles.layout}`}>
        {/* LEFT PHOTO */}

        <div className={styles.photo}>
          <Image
            src="/images/interior.jpg"
            alt="Moderný vymaľovaný interiér"
            fill
            priority={false}
            sizes="(max-width: 700px) 100vw, 30vw"
            className={styles.photoImage}
          />

          <div className={styles.photoGradient} />

          <div className={styles.photoBottom}>
            <strong>
              Kvalitné maľovanie
              <br />
              pre krajší domov
            </strong>

            <a
              href="#portfolio"
              className={styles.photoButton}
              aria-label="Pozrieť realizácie"
            >
              →
            </a>
          </div>
        </div>

        {/* INFO */}

        <div className={styles.info}>
          <span className={styles.eyebrow}>Kde pracujem?</span>

          <h2 className={styles.title}>
            Bratislava
            <br />a okolie <span>do 30 km</span>
          </h2>

          <div className={styles.locations}>
            <div>
              {leftLocations.map((location) => (
                <p key={location}>
                  <span>●</span>
                  {location}
                </p>
              ))}
            </div>

            <div>
              {rightLocations.map((location) => (
                <p key={location}>
                  <span>●</span>
                  {location}
                </p>
              ))}
            </div>
          </div>

          <a href="#contact" className={styles.button}>
            <span>ZOBRAZIŤ CELÚ OBLASŤ</span>
            <b>→</b>
          </a>
        </div>

        {/* MAP */}

        <div className={styles.map}>
          <Image
            src="/images/bratislava-map.jpg"
            alt="Mapa Bratislavy a okolia"
            fill
            sizes="(max-width: 1150px) 100vw, 45vw"
            className={styles.mapImage}
          />

          <div className={styles.mapTint} />

          <div className={styles.radius}>
            <div className={styles.mapCenter}>
              <div className={styles.pin}>
                <span />
              </div>

              <strong>Bratislava</strong>
            </div>

            <div className={styles.distance}>
              <span />
              <strong>30 km</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
