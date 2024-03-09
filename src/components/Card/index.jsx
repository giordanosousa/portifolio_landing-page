import styles from './Card.module.css';
import { FaReact, FaNodeJs, FaArrowAltCircleRight } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Card({name, description, html_url }){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>

            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaReact />
                    <FaNodeJs />
                    <GrMysql />
                    <SiMongodb />
                    <BiLogoPostgresql />
                    <IoLogoJavascript />
                </div>
                <Link to={ html_url } className={styles.botao}> 
                    <FaArrowAltCircleRight />
                </Link>
            </div>
        
        </section>
    );
}

export default Card;