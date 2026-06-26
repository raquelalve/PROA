import styles from '../css/Muralhas.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_china from  "../Imagens/china.png";

function Muralhas(){
    return(

        <section className={styles.fundo_muralhas}>
            <h1>Descubra a grandiosidade das Muralhas da China</h1>
            <div className={styles.posicao_componente}>
                <ComponenteProps 
                    lugar="Muralha da China"
                    texto="Esse monumento milenar, com seus encantos e suas vistas de tirar o fôlego, te aguarda para um roteiro inesquecível, com boa comida, muita história e um cenário de tirar o fôlego!!"
                    bandeira={Bandeira_china} 
                />
            </div>
        </section>

    )

}

export default Muralhas