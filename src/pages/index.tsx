import styles from 'styles/Home.module.scss'
import {testimonials} from "../data";
import {useState} from "react";

export default function Home() {
    const [selectedTestimony, setSelectedTestimony] = useState(0);

    const onNextClick = () => {
        const nextIndex = selectedTestimony + 1;

        if (nextIndex === testimonials.length) {
            setSelectedTestimony(0);
        } else {
            setSelectedTestimony(selectedTestimony + 1);
        }
    }

    const onPrevClick = () => {
        const nextIndex = selectedTestimony - 1;

        if (nextIndex === -1) {
            setSelectedTestimony(testimonials.length - 1);
        } else {
            setSelectedTestimony(selectedTestimony - 1);
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles['pattern-bg']} src="/images/pattern-bg.svg" alt="Background Pattern"/>
            <img className={styles['pattern-curve']} src="/images/pattern-curve.svg" alt="Curve Pattern"/>
            <img className={styles['pattern-quotes']} src="/images/pattern-quotes.svg" alt="Quotes Pattern"/>

            <div className={styles.selector}>
                <img src={testimonials[selectedTestimony].imgPath} alt="Author Image"
                     className={styles['selector__img']}/>
                <div className={styles['selector__btn-container']}>
                    <button className={styles['selector__btn']}>
                        <img src="/images/icon-prev.svg" alt="Previous Icon" onClick={onPrevClick}/>
                    </button>
                    <button className={styles['selector__btn']}>
                        <img src="/images/icon-next.svg" alt="Next Icon" onClick={onNextClick}/>
                    </button>
                </div>
            </div>

            <div className={styles.testimony}>
                <p className={styles['testimony__content']}>
                    " {testimonials[selectedTestimony].quote} "
                </p>
                <p className={styles['testimony__author']}>{testimonials[selectedTestimony].name}</p>
                <p className={styles['testimony__position']}>{testimonials[selectedTestimony].position}</p>

            </div>
        </div>
    )
}
