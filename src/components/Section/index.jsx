/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Container } from "./styles";
import { motion } from 'framer-motion';

export function Section({ title, cards }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container>
      <h2>{title}</h2>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {cards.map((card, index) => (
            <motion.div key={String(index)} classname="item">
              {card}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}