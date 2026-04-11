import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero(){
    return(
        <section className={`${styles.hero} section`} id="home">
            <div className={`container ${styles.hero__container}`}>
                
                <div className={styles.hero__content}>
                    <span className={styles.hero__greeting}>¡Hola! 👋 Soy</span>

                    <h1 className={styles.hero__title}>
                        Libonatti Valdivia Sadrach Neftali
                    </h1>

                    <h2 className={styles.hero__subtitle}>
                        <span className={styles.highlight}>
                            Ingeniero de Software
                        </span> en Crecimiento
                    </h2>

                    <p className={styles.hero__description}>
                        Estudiante de Matematicas Aplicadas y apasionado por crear soluciones digitales innovadoras. Combino creatividad técnica con un enfoque orientado a resultados para transformar ideas en código funcional.
                    </p>

                    <div className={styles.hero__buttons}>
                        <Link href="#projects" className="btn btn--primary">
                            Ver mis proyectos
                        </Link>

                        <Link href="#contact" className="btn btn--outline">
                            Contáctame
                        </Link>
                    </div>
                </div>

                <div className={styles.hero__image}>
                    <div className={styles.hero__blob}>
                        <div className={styles.hero__avatar}>
                            <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
  />
                        </div>
                    </div>

                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--1']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--2']}`}></div>
                    <div className={`${styles.hero__decoration} ${styles['hero__decoration--3']}`}></div>
                </div>

            </div>

            <div className={styles.hero__scroll}>
                <Link href="#interests" className={styles.hero__scrollLink}>
                    <span>Scroll</span>
                </Link>
            </div>
        </section>
    );
}
