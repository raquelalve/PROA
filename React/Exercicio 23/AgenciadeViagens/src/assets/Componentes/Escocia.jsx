import styles from '../css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_escocia from '../Imagens/escocia.png'

function Escocia(){
    return(

        <section className={styles.fundo_escocia}>
            <h1>Venha conhecer a Escócia!</h1>
            <div className={styles.posicao_componente}>
                <ComponenteProps 
                    lugar="Escócia"
                    texto="Esse país fantástico, com seus encantos e seus castelos medievais, te aguarda para um roteiro inesquecível, com boa comida, ótimas instalações e um clima super agradável!!"
                    bandeira={Bandeira_escocia} />
            </div>

        </section>

    )

}

export default Escocia