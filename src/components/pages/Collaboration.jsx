import style from './Collaboration.module.scss';

const Collaboration = ({ }) => {
    return (
        <>
            <div className={style.main}>
                <div id='community' className={style.collab}>
                    <article>
                        <div className={style.text}>
                            <h1>Klub Venus</h1>
                            <p>Vi har haft Klub Venus på besøg for at tage nogle professionelle billeder, til deres hjemmeside og sociale medier.</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/klub-venus.jpg")' }}></div>
                    </article>
                    <article className={style.articleReverse}>
                        <div className={style.text}>
                            <h1>Northside 2024</h1>
                            <p>Vi har været med til Northside 2024, og sat en form for workshop med forskellige aktiviteter.</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/northside-24.jpg")' }}></div>
                    </article>
                    <article>
                        <div className={style.text}>
                            <h1>Centrum Vest</h1>
                            <p>Her har Gråzonen som plejer at besøge os for at lave podcasts, formået at lave en live podcast til Centrum Vest eventet.</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/centrum-vest.jpeg")' }}></div>
                    </article>
                    <article className={style.articleReverse}>
                        <div className={style.text}>
                            <h1>ASU Camp</h1>
                            <p>Akademiet for Samfundsengagerede Unge (ASU) har haft et camp med os, hvor vi har arbejdet med projektsparring for unge, der vil sætte aftryk på samfundet og udvikle projekter.</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/ASU_camp.jpg")' }}></div>
                    </article>
                    <article>
                        <div className={style.text}>
                            <h1>Cluster Square</h1>
                            <p>Vi har været kreative og brugt sokker, plakater mm. til at male på.</p>
                        </div>
                        <div className={style.image} style={{ backgroundImage: 'url("img/collab/cluster-square.jpg")' }}></div>
                    </article>
                    <article className={style.articleReverse}>
                        <div className={style.text}>
                            <h1>Akvarel workshop // Wusi Dusi</h1>
                            <p>Vi har haft et workshop der går ud på at bruge akvarelfarver til at lave kreative ting.</p>
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