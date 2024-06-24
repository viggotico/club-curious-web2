import style from './AboutUs.module.scss';

const AboutUs = ({ }) => {
    const maps_iframeSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4445.110689830471!2d10.207486377932346!3d56.14750217323279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f8f6e2328c1%3A0xf0681bc3c7063087!2sJ%C3%A6gerg%C3%A5rdsgade%20154e%2C%208000%20Aarhus!5e0!3m2!1sda!2sdk!4v1716522426149!5m2!1sda!2sdk';
    return (
        <>
            <div className={style.main}>
                <div className={style.hours} id='hours'>
                    <h1>Åbningstider</h1>
                    <div className={style.item}>
                        <p>Mandag</p>
                        <p>12:00 - 21:00</p>
                    </div>
                    <div className={style.item}>
                        <p>Tirsdag</p>
                        <p>12:00 - 21:00</p>
                    </div>
                    <div className={style.item}>
                        <p>Onsdag</p>
                        <p>12:00 - 21:00</p>
                    </div>
                    <div className={style.item}>
                        <p>Torsdag</p>
                        <p>12:00 - 21:00</p>
                    </div>
                    <div className={style.item}>
                        <p>Fredag</p>
                        <p>12:00 - 21:00</p>
                    </div>
                    <div className={style.item}>
                        <p>Lørdag</p>
                        <p>12:00 - 22:00</p>
                    </div>
                    <div className={style.item}>
                        <p>Søndag</p>
                        <p>12:00 - 22:00</p>
                    </div>
                </div>
                <div className={style.gallery} id='galleri'>
                        <div className={style.item} style={{ backgroundImage: 'url("img/ClubCurious_Polterabend_06.08.22_2.jpg")' }}></div>
                        <div className={style.item} style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-106.jpg")' }}></div>
                        <div className={style.item} style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-107.jpg")' }}></div>
                        <div className={style.item} style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-108.jpg")' }}></div>
                        <div className={style.item} style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-110.jpg")' }}></div>
                        <div className={style.item} style={{ backgroundImage: 'url("img/slides/ClubCurious_Croquis&Cava_22.10.20-112.jpg")' }}></div>
                </div>
                <div className={style.address} id='address'>
                    <h1>Adresse</h1>
                    <p>Jægergårdsgade 154e</p>
                    <p>8000 Aarhus</p>
                    <iframe
                        className={style.maps}
                        src={maps_iframeSrc}
                        height='200'
                        loading='lazy'
                        style={{ border: '0' }}
                        referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default AboutUs