import styles from '../css/Home.module.css'

function Home(){

    return(
        <section className={styles.container_home}>
            <div className={styles.mala}></div>
            <div className={styles.texto}>
                <h2>Encontre aqui a viagem dos seus sonhos!!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ullam porro placeat officiis officia molestiae. Quia veritatis nam, officiis incidunt dolore inventore, ipsam mollitia non a aut totam illo. Itaque.</p>
            </div>
        </section>
    )

}

export default Home