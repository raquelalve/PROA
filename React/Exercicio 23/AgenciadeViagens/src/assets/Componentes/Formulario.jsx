import styles from '../css/Formulario.module.css'

function Formulario(){
    return(
        <div className={styles.corpo_formulario}>
            <h2>Não perca essa oportunidade</h2>
            <p>Reserve sua viagem já!</p>

            <form className={styles.inputs}>
                <input type="text" placeholder="Nome completo: " />
                <input type="text" placeholder="E-mail: " />
                <input type="text" placeholder="Contato: "/>
                <button className={styles.botaoReserva}>Reservar</button>
            </form>
        </div>
    )
}

export default Formulario