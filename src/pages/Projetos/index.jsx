import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from './Projetos.module.css';

function Projetos() {

    const[ repositories, setRepositories ] = useState([]); // Definindo estado para armazenar os repositórios

    useEffect(() => {  // Buscar repositórios assim que o componente for montado
        const buscarRepositorios = async () => { // Função assíncrona para buscar repositórios
            const response = await fetch ('https://api.github.com/users/giordanosousa/repos') // Requisição para a API do GitHub
            const data = await response.json()  // Convertendo resposta para JSON
            setRepositories(data) // Atualizando estado com os dados dos repositórios
        }
        buscarRepositorios() // Chamando a função para buscar repositórios
    }, [])


    return(
        <section className={styles.projetos}>
            <h2>Projetos</h2>  
            {
                repositories.length > 0 ? ( 
                    <section className={styles.lista}> 
                        {
                            repositories.map((repo) => (
                                <Card 
                                    key={repo.id}
                                    name={repo.name}
                                    descripton={repo.description}
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repósitorios...</p>
                )
            }
        </section>
    )
}

export default Projetos;