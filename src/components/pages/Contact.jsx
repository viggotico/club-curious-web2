import style from './Contact.module.scss';

const Contact = ({ }) => {
    return (
        <>
            <div className={style.main}>
                <h1>Vi glæder os til at høre fra dig!</h1>
                <div className={style.formWrapper}>
                    <div className={style.left}>
                        <div className={style.leftItem}>
                            <p><strong>Skriv til os: </strong></p>
                            <p>hello.club.custious@gmail.com</p>
                        </div>
                        <div className={style.leftItem}>
                            <p>Jægergårdsgade 154e</p>
                            <p>8000 Arhuc C</p>
                        </div>
                        <div className={style.leftItem}>
                            <p>Kunne I tænke jer at holde jeres næste arrangement?</p>
                            <p>Skriv til os her!</p>
                        </div>
                    </div>
                    <img src="cutouts/cc-collage-cutout__0018_Screenshot-2024-05-14-at-11-21-23-Club-Curious-(@club.curious)-•-Instagram-billeder-og--videoer-.png" alt="brevkasse" />
                    <form>
                        <label htmlFor="fname">Navn & efternavn</label>
                        <div className={style.group}>
                            <input type="text" name="fname" id="fname" placeholder='Fornavn' />
                            <input type="text" name="lname" id="lname" placeholder='Efternavn' />
                        </div>
                        <label htmlFor="femail">Email</label>
                        <input type="email" name="email" id="femail" placeholder='eksempel@gmail.com' />
                        <label htmlFor="ftext">Besked</label>
                        <input type="text" name="text" id="ftext" className={style.contactMsg} placeholder='...' />
                        <input type="submit" name="submit" value='Send' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact