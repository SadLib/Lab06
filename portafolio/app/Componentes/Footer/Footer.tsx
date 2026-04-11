import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer(){
    return(
        <footer className={styles.footer} id="footer">
  <div className="container">

    <div className={styles.footer__content}>

      <div>
        <a href="#" className={styles.footer__logo}>
          <span className="logo__bracket">&lt;</span>
          Libonatti Valdivia Sadrach Neftali
          <span className="logo__bracket">/&gt;</span>
        </a>

        <p className={styles.footer__text}>
          Gracias por visitar mi portfolio. ¡Espero que podamos trabajar juntos pronto!
        </p>
      </div>

      <div className={styles.footer__social}>
        <a
          href="https://www.linkedin.com/in/n-l-632a10308/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["footer__social-link"]}
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>

        <a
          href="https://github.com/SadLib"
          target="_blank"
          rel="noopener noreferrer"
          className={styles["footer__social-link"]}
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>

        <a
          href="mailto:sadrach.nef@email.com"
          className={styles["footer__social-link"]}
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>

    </div>

    <div className={styles.footer__bottom}>
      <p className={styles.footer__copyright}>
        &copy; 2026 Sadrach. Todos los derechos reservados.
      </p>

      <p className={styles.footer__made}>
        Hecho con <i className="fas fa-heart"></i> y mucho <i className="fas fa-coffee"></i>
      </p>
    </div>

  </div>
</footer>

    );
}