import React from 'react';
import styles from './CV.module.css';
import Link from 'next/link';

let CvCorreo: string = 'sadrach.nef@gmail.com';
let CvLinkedin:string = '@N L';
let CvGithub:string = '@SadLib';

export default function CV(){
    return(
        <section className={`${styles.cv} section`} id="cv">
            <div className="container">
                <div className={styles.cv__content}>
                    <div className={styles.cv__info}>
                        <span className="section__subtitle">Conoce mi trayectoria</span>
                        <h2 className="section__title">Mi Currículum</h2>
                        <p className={styles.cv__description}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                    <div className={styles.cv__buttons}>
                    <a 
                        href="https://www.overleaf.com/gallery/tagged/cv"
                        className={`btn ${'btn--primary'} ${'btn--large'}`}
                    >
                        <i className="fas fa-download"></i> Descargar CV
                    </a>

                    <a 
                        href="https://sadlib.github.io/Lab05LibonattiValdiviaSadrachNeftali/"
                        className={`btn ${'btn--secondary'} ${'btn--large'}`}
                    >
                        <i className="fas fa-eye"></i> Ver CV Digital
                    </a>
                    </div>
                    </div>
                    
                    <div className={styles.cv__social}>
                        <h3 className={styles["cv__social-title"]}>Conectemos</h3>
                        <div className={styles["cv__social-links"]}>
                            <a href="https://www.linkedin.com/in/n-l-632a10308/" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={styles.social__icon + ' ' + styles['social__icon--linkedin']}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>LinkedIn</span>
                                    <span className={styles.social__user}>{CvLinkedin}</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                            
                            <a href="https://github.com/SadLib" target="_blank" rel="noopener noreferrer" className={styles.social__card}>
                                <div className={styles.social__icon + ' ' + styles['social__icon--github']}>
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>GitHub</span>
                                    <span className={styles.social__user}>{CvGithub}</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                            
                            <a href="mailto:sadrach.nef@email.com" className={styles.social__card}>
                                <div className={styles.social__icon + ' ' + styles['social__icon--email']}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles.social__info}>
                                    <span className={styles.social__name}>Email</span>
                                    <span className={styles.social__user}>{CvCorreo}</span>
                                </div>
                                <i className="fas fa-arrow-right social__arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}