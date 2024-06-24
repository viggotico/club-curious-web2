import style from './Collaboration.module.scss';

const Collaboration = ({ }) => {
    return (
        <>
            <div className={style.main}>
                <div id='community' className={style.collab}>
                    <article>
                        <div className={style.text}>
                            <h1>Klub Venus</h1>
                            <p>Tekst omkring dette collab event...</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/klub-venus.jpg")' }}></div>
                    </article>
                    <article className={style.articleReverse}>
                        <div className={style.text}>
                            <h1>Northside 2024</h1>
                            <p>Tekst omkring dette collab event...</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/northside-24.jpg")' }}></div>
                    </article>
                    <article>
                        <div className={style.text}>
                            <h1>Centrum Vest</h1>
                            <p>Tekst omkring dette collab event...</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/centrum-vest.jpeg")' }}></div>
                    </article>
                    <article className={style.articleReverse}>
                        <div className={style.text}>
                            <h1>ASU Camp</h1>
                            <p>Tekst omkring dette collab event...</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/ASU_camp.jpg")' }}></div>
                    </article>
                    <article>
                        <div className={style.text}>
                            <h1>Cluster Square</h1>
                            <p>Tekst omkring dette collab event...</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/cluster-square.jpg")' }}></div>
                    </article>
                    <article className={style.articleReverse}>
                        <div className={style.text}>
                            <h1>Akvarel workshop // Wusi Dusi</h1>
                            <p>Tekst omkring dette collab event...</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/akvarelworkshop-wusi-dusi.jpg")' }}></div>
                    </article>
                </div>
                <div id='sponsor' className={style.sponsor}>
                    <h1>Bliv sponsor til vores næste event!</h1>
                    <p>Vi leder altid efter nye sponsors til vores arrangementer.</p>
                    <p>Skriv til os <a href="../contact">her</a> for at komme i betragtning med os.</p>
                </div>
            </div>
        </>
    )
}

export default Collaboration