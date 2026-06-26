import styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_aruba from  "../Imagens/aruba.png";

function Aruba(){
    return(

        <section className={styles.fundo_aruba}>
            <h1>Veja as maravilhas de Aruba!</h1>
            <div className={styles.posicao_componente}>
                <ComponenteProps 
                lugar="Aruba"
                texto="Essa ilha paradisíaca, com seus encantos e suas praias de águas cristalinas, te aguarda para um roteiro inesquecível, com boa comida, excelentes resorts e um clima de verão o ano todo!!"
                bandeira={Bandeira_aruba} />
            </div>
        </section>

    )

}

export default Aruba