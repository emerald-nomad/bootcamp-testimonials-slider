import styles from 'styles/Home.module.scss'
import {testimonials} from "../data";

export default function Home() {
  return (
    <div className={styles.container}>
      <img className={styles['pattern-bg']} src="/images/pattern-bg.svg" alt="Background Pattern" />
      <img className={styles['pattern-curve']} src="/images/pattern-curve.svg" alt="Curve Pattern"/>
      <img className={styles['pattern-quotes']} src="/images/pattern-quotes.svg" alt="Quotes Pattern" />
    </div>
  )
}
