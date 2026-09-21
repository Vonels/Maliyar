"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Calculator.module.css";

/* ================================
   PRICES
================================ */

const workPrices = {
  painting: 2.5,
  plaster: 5.5,
  facade: 4,
};

const wallMultipliers = {
  good: 1,
  medium: 1.15,
  bad: 1.35,
};

const paintMultipliers = {
  white: 1,
  color: 1.12,
  premium: 1.25,
};

type WorkType = keyof typeof workPrices;
type WallType = keyof typeof wallMultipliers;
type PaintType = keyof typeof paintMultipliers;

type Price = {
  min: number;
  max: number;
};

/* ================================
   COMPONENT
================================ */

export default function Calculator() {
  const [work, setWork] = useState<WorkType>("painting");
  const [area, setArea] = useState(65);
  const [wall, setWall] = useState<WallType>("good");
  const [paint, setPaint] = useState<PaintType>("white");

  const [price, setPrice] = useState<Price>({
    min: 150,
    max: 180,
  });

  /* ================================
     CALCULATION
  ================================ */

  const calculatePrice = () => {
    const safeArea = Math.max(1, Math.min(2000, area));

    const basePrice =
      safeArea *
      workPrices[work] *
      wallMultipliers[wall] *
      paintMultipliers[paint];

    const minPrice = Math.round((basePrice * 0.9) / 10) * 10;

    const maxPrice = Math.round((basePrice * 1.1) / 10) * 10;

    setPrice({
      min: minPrice,
      max: maxPrice,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    calculatePrice();
  };

  return (
    <section className={styles.section} id="calculator">
      <div className="container">
        {/* ==================================
            CALCULATOR
        ================================== */}

        <div className={styles.calculator}>
          {/* LEFT IMAGE */}

          <div className={styles.visual}>
            <Image
              src="/images/calculator/calculator-room.jpg"
              alt="Maľovanie interiéru"
              fill
              sizes="(max-width: 900px) 100vw, 35vw"
              className={styles.visualImage}
            />

            <div className={styles.visualOverlay} />

            <div className={styles.visualContent}>
              <span>Rýchlo a jednoducho</span>

              <h2>
                Vypočítajte si
                <br />
                orientačnú cenu
              </h2>

              <div className={styles.brush}>
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>

          {/* ==================================
              FORM
          ================================== */}

          <form className={styles.form} onSubmit={handleSubmit}>
            {/* WORK TYPE */}

            <div className={styles.field}>
              <label htmlFor="work">Typ práce</label>

              <select
                id="work"
                value={work}
                onChange={(event) => setWork(event.target.value as WorkType)}
              >
                <option value="painting">Maľovanie</option>

                <option value="plaster">Stierkovanie</option>

                <option value="facade">Maľovanie fasády</option>
              </select>
            </div>

            {/* AREA */}

            <div className={styles.field}>
              <label htmlFor="area">Plocha (m²)</label>

              <div className={styles.areaInput}>
                <input
                  id="area"
                  type="number"
                  min="1"
                  max="2000"
                  value={area}
                  onChange={(event) => {
                    const value = Number(event.target.value);

                    setArea(value);
                  }}
                />

                <span>m²</span>
              </div>
            </div>

            {/* WALL CONDITION */}

            <div className={styles.field}>
              <label htmlFor="wall">Stav stien</label>

              <select
                id="wall"
                value={wall}
                onChange={(event) => setWall(event.target.value as WallType)}
              >
                <option value="good">Dobrý</option>

                <option value="medium">Bežné opravy</option>

                <option value="bad">Zlý stav</option>
              </select>
            </div>

            {/* PAINT */}

            <div className={styles.field}>
              <label htmlFor="paint">Typ farby</label>

              <select
                id="paint"
                value={paint}
                onChange={(event) => setPaint(event.target.value as PaintType)}
              >
                <option value="white">Biela</option>

                <option value="color">Farebná</option>

                <option value="premium">Prémiová</option>
              </select>
            </div>

            {/* BUTTON */}

            <button type="submit" className={styles.calculate}>
              VYPOČÍTAŤ CENU
            </button>
          </form>

          {/* ==================================
              RESULT
          ================================== */}

          <div className={styles.result}>
            <span className={styles.resultLabel}>Orientačná cena</span>

            <strong>
              {price.min} – {price.max} €
            </strong>

            <p>*Konečná cena sa určuje po obhliadke objektu.</p>

            <div className={styles.answer}>
              <div className={styles.answerIcon}>☎</div>

              <div>
                <b>Rýchla odpoveď</b>

                <span>do 1 hodiny</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================
            GALLERY
        ================================== */}

        <div className={styles.gallery}>
          {/* GALLERY TEXT */}

          <div className={styles.galleryIntro}>
            <h2>Galéria prác</h2>

            <p>
              Skutočné výsledky,
              <br />
              spokojní zákazníci.
            </p>

            <Link href="#portfolio" className={styles.galleryButton}>
              ZOBRAZIŤ VIAC
              <span>→</span>
            </Link>
          </div>

          {/* GALLERY CARDS */}

          <div className={styles.galleryGrid}>
            <GalleryCard image="/images/portfolio/work-1.jpg" label="PRED" />

            <GalleryCard image="/images/portfolio/work-2.jpg" label="PO" />

            <GalleryCard image="/images/portfolio/work-3.jpg" label="PO" />

            <GalleryCard image="/images/portfolio/work-4.jpg" label="PRED" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================
   GALLERY CARD
================================ */

type GalleryCardProps = {
  image: string;
  label: "PRED" | "PO";
};

function GalleryCard({ image, label }: GalleryCardProps) {
  return (
    <Link href="#portfolio" className={styles.galleryCard}>
      <Image
        src={image}
        alt={`Ukážka maliarskych prác ${label}`}
        fill
        sizes="(max-width: 700px) 50vw, 20vw"
        className={styles.galleryImage}
      />

      <span className={styles.galleryLabel}>{label}</span>

      <div className={styles.galleryArrow}>↔</div>
    </Link>
  );
}
