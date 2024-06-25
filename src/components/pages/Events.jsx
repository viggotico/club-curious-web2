import { useEffect } from "react";
import style from './Events.module.scss';

const Events = ({ }) => {
    useEffect(() => {
        const wrapper = document.getElementById('billetto').cloneNode(true);
        const eventsWrapper = document.getElementById('events-wrapper');
        eventsWrapper.appendChild(wrapper);
        wrapper.style.setProperty('display', 'block');

        return () => eventsWrapper.removeChild(wrapper);
    }, []);

    return (
        <>
            <div className={style.main} id="events-wrapper">
                <p className={style.emoji}>🤠</p>
                <header>
                    <h1>Oversigt over vores aktiviteter</h1>
                    <p>Til disse events kan du b.la. møde nye mennesker, opleve noget nyt, eller dele din kreativitet!</p>
                    <p>De fleste aktiviteter foregår i Aarhus, både indendørs og udendørs.</p>
                    <p>Hvis I kunne tænkte jer at holde jeres næste arrangement her, kan I kontakte os <a href="../contact">her</a>.</p>
                </header>
            </div>
        </>
    )
}

export default Events