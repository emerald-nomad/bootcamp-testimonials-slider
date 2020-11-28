import styles from 'styles/Home.module.scss'
import {testimonials} from "../data";

export default function Home() {
    return (
        <div className={styles.container}>
            <img className={styles['pattern-bg']} src="/images/pattern-bg.svg" alt="Background Pattern"/>
            <img className={styles['pattern-curve']} src="/images/pattern-curve.svg" alt="Curve Pattern"/>
            <img className={styles['pattern-quotes']} src="/images/pattern-quotes.svg" alt="Quotes Pattern"/>

            <div className={styles.selector}>
                <img src="/images/image-tanya.jpg" alt="Author Image" className={styles['selector__img']}/>
                <div className={styles['selector__btn-container']}>
                    <button className={styles['selector__btn']}>
                        <img src="/images/icon-prev.svg" alt="Previous Icon"/>
                    </button>
                    <button className={styles['selector__btn']}>
                        <img src="/images/icon-next.svg" alt="Next Icon"/>
                    </button>
                </div>
            </div>

            <div className={styles.testimony}>
                <p className={styles['testimony__content']}>
                    " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t
                    recommend this course enough. I’m now in the job of my dreams and so excited about the future. "
                </p>
                <p className={styles['testimony__author']}>Tanya Sinclair</p>
                <p className={styles['testimony__position']}>UX Engineer</p>

            </div>
        </div>
    )
}
