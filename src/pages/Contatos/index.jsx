import styles from './Contatos.module.css';
import { GoMail } from 'react-icons/go';
import { BsInstagram, BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';


function Contatos(){
    return(
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>
                <a href='mailto:giordanosousa.dev@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <GoMail  className={styles.icone}/>
                </a>
                <a href='https://www.instagram.com/giordanogabriel_' target='_blank' rel='noopener noreferrer'>
                    <BsInstagram  className={styles.icone}/>
                </a>
                <a href="https://wa.me/5585992291928" target='_blank' rel='nooper noreferrer'>
                    <BsWhatsapp  className={styles.icone}/>
                </a>
                <a href="https://github.com/giordanosousa" target='_blank' rel='nooper noreferrer'>
                    <BsGithub  className={styles.icone}/>
                </a>
                <a href="https://www.linkedin.com/in/giordano-sousa-4bb6a0239/" target='_blank' rel='nooper noreferrer'>
                    <BsLinkedin  className={styles.icone}/>
                </a> 
            </div>
        </section>
    );
}

export default Contatos;