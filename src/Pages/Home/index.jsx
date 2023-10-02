import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.apresentacao} >
                    <p>
                        Olá, Sou <span>Vitor de Aguiar</span> <br />Dev Full Stack
                    </p>
                    <Link to="/sobre" className={`${styles.btn} ${styles.btn_blue}`} >Saiba mais sobre mim</Link >
                </div>
                <figure>
                    <img className={styles.img_home} src="/developer-blue.svg" alt="imagem" />
                </figure>
            </section>
        </>
    )
}

export default Home;
