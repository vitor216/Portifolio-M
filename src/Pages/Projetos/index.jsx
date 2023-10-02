import { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import styles from './Projetos.module.css';
function Projetos() {

    const [repositories, setrepositories] = useState([])

    useEffect(() => {
        const buscarRepositorios = async() => {
            const response = await fetch('https://api.github.com/users/vitor216/repos?page=1&per_page=50')
        const data = await response.json()
        setrepositories(data)
        }
        buscarRepositorios()
    },[])

    return (
        <section className={styles.projetos}>
        <h2>Projetos</h2>
        {
            repositories.length > 0 ? (
                <section className={styles.lista}>
                    {
                        repositories.map((repo) => (
                            <Cards
                                key={repo.id}
                                name={repo.name}
                                description={repo.description}
                                html_url={repo.html_url}
                            />
                        ))
                    }
            </section>
            ) : (
                <p>Carregando repositórios...</p>
            )
            }
        </section>
    );
}
export default Projetos;
