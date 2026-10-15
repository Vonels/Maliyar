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
        {/* =================================
            REVIEWS
        ================================= */}

        <div className={styles.reviewsRow}>
          <div className={styles.heading}>
            <span>RECENZIE</span>

            <h2>Čo hovoria zákazníci</h2>

            <p>Vaša spokojnosť je pre mňa najväčšou odmenou.</p>
          </div>

          <div className={styles.slider}>
            <button
              type="button"
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
              type="button"
              className={`${styles.sliderButton} ${styles.next}`}
              aria-label="Ďalšie recenzie"
            >
              ›
            </button>
          </div>
        </div>

        {/* =================================
            SERVICE GUARANTEE
        ================================= */}

        <div className={styles.cta}>
          <div className={styles.ctaBrushLeft} />
          <div className={styles.ctaBrushRight} />

          {/* LEFT */}

          <div className={styles.ctaText}>
            <div className={styles.roller}>
              <span className={styles.rollerHead} />
              <span className={styles.rollerHandle} />
            </div>

            <p>
              <strong>
                Bez starostí od začiatku
                <br />
                až do konca
              </strong>

              <span>O všetko sa postarám za vás</span>
            </p>
          </div>

          {/* GUARANTEES */}

          <div className={styles.guarantees}>
            <div className={styles.guarantee}>
              <div className={styles.guaranteeIcon}>✓</div>

              <div>
                <strong>Čistá práca</strong>

                <span>Ochrana nábytku a podlahy</span>
              </div>
            </div>

            <div className={styles.guarantee}>
              <div className={styles.guaranteeIcon}>€</div>

              <div>
                <strong>Férová cena</strong>

                <span>Bez skrytých poplatkov</span>
              </div>
            </div>

            <div className={styles.guarantee}>
              <div className={styles.guaranteeIcon}>★</div>

              <div>
                <strong>Záruka kvality</strong>

                <span>Za svojou prácou si stojím</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
