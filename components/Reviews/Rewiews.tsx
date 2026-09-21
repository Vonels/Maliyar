import Link from "next/link";
import styles from "./Reviews.module.css";

const reviews = [
  {
    text: "Veľmi precízna práca, steny vyzerajú perfektne. Určite odporúčam!",
    name: "Peter K.",
    city: "Bratislava",
    avatar: "P",
  },
  {
    text: "Rýchla komunikácia, dodržanie termínov a skvelý výsledok. Ďakujem!",
    name: "Martina S.",
    city: "Pezinok",
    avatar: "M",
  },
  {
    text: "Profesionálny prístup, čistota a kvalita. Som veľmi spokojný.",
    name: "Jozef M.",
    city: "Senec",
    avatar: "J",
  },
];

export default function Reviews() {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        {/* REVIEWS */}

        <div className={styles.reviewsRow}>
          <div className={styles.heading}>
            <span>RECENZIE</span>

            <h2>Čo hovoria zákazníci</h2>

            <p>Vaša spokojnosť je pre mňa najväčšou odmenou.</p>
          </div>

          <div className={styles.slider}>
            <button
              className={`${styles.sliderButton} ${styles.prev}`}
              aria-label="Predchádzajúce recenzie"
            >
              ‹
            </button>

            <div className={styles.cards}>
              {reviews.map((review) => (
                <article className={styles.card} key={review.name}>
                  <div className={styles.stars}>★★★★★</div>

                  <p className={styles.reviewText}>„{review.text}“</p>

                  <div className={styles.author}>
                    <div className={styles.avatar}>{review.avatar}</div>

                    <div>
                      <strong>{review.name}</strong>
                      <span>{review.city}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button
              className={`${styles.sliderButton} ${styles.next}`}
              aria-label="Ďalšie recenzie"
            >
              ›
            </button>
          </div>
        </div>

        {/* CTA */}

        <div className={styles.cta}>
          <div className={styles.ctaBrushLeft} />
          <div className={styles.ctaBrushRight} />

          <div className={styles.ctaText}>
            <div className={styles.roller}>
              <span className={styles.rollerHead} />
              <span className={styles.rollerHandle} />
            </div>

            <p>
              <strong>
                Potrebujete vymaľovať byt, dom
                <br />
                alebo kanceláriu?
              </strong>

              <span>Bratislava a okolie do 30 km</span>
            </p>
          </div>

          <div className={styles.ctaActions}>
            <Link href="#contact" className={styles.offerButton}>
              ZÍSKAŤ CENOVÚ PONUKU
            </Link>

            <a href="tel:+421948123456" className={styles.phoneButton}>
              <span className={styles.phoneIcon}>☎</span>

              <span>
                <strong>+421 948 123 456</strong>
                <small>Po–Ne 8:00 – 19:00</small>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
