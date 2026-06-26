import styles from '../css/GrandCanyon.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_usa from "../Imagens/usa.png";
import Formulario from './Formulario'

function GrandCanyon(){
    return(

        <section className={styles.fundo_grandcanyon}>

            <h1>Aventure-se pela imensidão do Grand Canyon</h1>
            <section className={styles.cta_formulario}>
                <ComponenteProps 
                    lugar="Grand Canyon"
                    texto="Essa maravilha natural, com seus encantos e seus desfiladeiros monumentais, te aguarda para um roteiro inesquecível, com boa comida, trilhas épicas e um pôr do sol espetacular!!"
                    bandeira={Bandeira_usa} />
                <Formulario />
            </section>
        </section>

    )

}

export default GrandCanyon