import { Link } from 'react-router-dom';
import styles from './Home.module.css';


function Home(){
    return(
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br/> 
                    <span>Giordano Sousa</span> <br/>
                    Dev Full Stack <br/>
                </p>
                <p className={styles.p_dois}>Então clique no botão abaixo e realize seu <br/>
                orçamento sem compromisso.
                </p>
                <Link to={"/sobre"} className={`${styles.btn} ${styles.btn_red}`}>
                    Saiba mais
                </Link>
            </div>
            <figure>
                <img className={styles.img_home} src="/developer-red.svg" alt="Image-Home" />
            </figure>
        </section>
    )
}

export default Home;