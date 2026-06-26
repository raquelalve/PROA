import styles from '../css/ComponentesProps.module.css'

function ComponenteProps({lugar, texto, bandeira}){
    return(
        <div className={styles.corpo_texto}>
            <h2>Venha conhecer esse lugar incrível! {lugar}</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="bandeira do país" className={styles.imagem_props} />
        </div>
    )
}

export default ComponenteProps