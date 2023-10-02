import styles from './Contato.module.css';
import { GoMail } from 'react-icons/go';
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs';

function Contato() {

    return (
        <>
        <section className={styles.contatos}>
            <h2>Contato</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>
            <div className={styles.icones}>
                
                <a href="mailto:jacare2229@gmail.com" target="_blank" rel="noopener noreferrer">
                    <GoMail className={styles.icone} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className={styles.icone} />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <BsYoutube className={styles.icone} />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <BsGithub className={styles.icone} />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className={styles.icone} />
                </a>
            </div>
        </section>
        </>
    );
}
export default Contato;
