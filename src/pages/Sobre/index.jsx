import styles from './Sobre.module.css';
import avatar from './image/perfil.png';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";

function Sobre(){
    return(
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt='Avatar' className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Giordano Sousa</span> <br/>
                    <strong>Dev Full Stack</strong></p>

                    <p>Trabalho com Desenvolvimento Web desde 2023.</p>

                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas <br/>
                    com o foco na experiência do usuário.</p>
                </div>   
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <IoLogoJavascript className={styles.svg}/>
                    <FaReact className={styles.svg}/>
                    <FaNodeJs className={styles.svg} />
                    <GrMysql className={styles.svg}/>
                    <SiMongodb className={styles.svg}/>
                    <BiLogoPostgresql className={styles.svg}/>
                </div>
            </div>
        </section>
    );
}

export default Sobre;