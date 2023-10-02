import styles from './Sobre.module.css';
import avatar from './images/logo.jpg';
import html from './images/icon-html.svg';
import css from './images/icon-css.svg';
import js from './images/icon-js.svg';
import react from './images/icon-react.svg';
import node from './images/icon-node.svg';
import sql from './images/icon-sql.svg';

function Sobre() {

    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
            <div className={styles.textos}>
                <h2>Sobre</h2>
                <p>
                Sou <span>Vitor de Aguiar,</span> <strong>Dev Full Stack Pyton.</strong></p>

                <p>Trabalho com desenvolvimento Web desde 2000.</p>

                <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                <p>Especializado em criação de aplicações dinâmicas e intuitivas,<br />
                com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                <img src={html} alt="icone" />
                <img src={css} alt="icone" />
                <img src={js} alt="icone" />
                <img src={react} alt="icone" />
                <img src={node} alt="icone" />
                <img src={sql} alt="icone" />
                </div>
            </div>
        </section>
    );
}
export default Sobre;
