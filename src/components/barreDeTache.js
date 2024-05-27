import { useEffect, useState } from "react";
import UserImg from '../media/photo.png'
import iconeFichier from "../media/icone.png"
import iconeOrdi from '../media/XPIcon.webp'
import iconeMail from '../media/gmail.ico'
import iconeActu from "../media/MSN.png"
import iconeUser from "../media/user.png"
import iconeMusique from "../media/musique.png"
import iconeDemarrer from "../media/iconeWindows.png"

const BarreDeTache = ({ setAction, activeObject, displayedState, setDisplayedState }) => {

    let [activeStart, setActiveStart] = useState(false)
    let [time, setTime] = useState("00:00:00")
    let [date, setDate] = useState("00-00-0000")
    useEffect(() => {

        getTime()

    }, [])

    const getTime = () => {
        var today = new Date();
        var time = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0');
        let date = today.getDate().toString().padStart(2, '0') + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getFullYear();
        setTime(time)
        setDate(date)
        let interval = setInterval(() => {
            var today = new Date();
            var time = today.getHours().toString().padStart(2, '0') + ":" + today.getMinutes().toString().padStart(2, '0');
            let date = today.getDate().toString().padStart(2, '0') + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getFullYear();
            setTime(time)
            setDate(date)
        }, 10000)
    }

    const handleStart = () => {
        console.log(activeStart)
        setActiveStart(!activeStart)
    }
    const iconeStartMenu = (title, logo, onClickFunction) => {
        return (
            <div style={{ display: "flex", alignItems: "center", fontSize: "0.8rem" }} onClick={
                onClickFunction
            }>
                <img src={logo} alt="" style={{ width: 20 + "%", padding: '0.5rem' }} />
                <p>{title}</p>
            </div>
        )
    }
    return (<div id="barre">
        <div id="barreStart" onClick={handleStart}>
            <img src={iconeDemarrer} alt="" style={{ width: 15 + '%', float: "left", paddingLeft: '0.5rem' }} />
            Démarrer
        </div>
        <div style={{ display: 'flex', height: 100 + '%', marginLeft: 11 + "%", alignItems: "center" }}>
            {activeObject && activeObject.map((e) => {
                console.log(e)
                return (
                    <div key={e.title} style={{ width: 10 + '%', height: 80 + '%', backgroundColor: '#0042bd', border: '1px solid black', color: 'white', margin: 0.1 + '%' }} onClick={() => { displayedState[e.key] == 'block' ? setDisplayedState({ ...displayedState, [e.key]: 'none' }) : setDisplayedState({ ...displayedState, [e.key]: 'block' }) }}>
                        <div style={{ display: "flex", alignItems: "center", height: 100 + "%", overflow: 'hidden', textWrap: 'nowrap' }}>
                            <img src={e.logo} alt="logo" style={{ width: 12 + '%' }} />
                            <span style={{ padding: 0.2 + 'rem' }}>{e.title}</span >
                        </div>
                    </div>)
            })}
        </div>

        {
            activeStart &&
            <div className="startMenu" >
                <div className="MenuTop">
                    <img src={UserImg} alt="UserImg" />
                    <p>Salsabil Hamda</p>
                </div>
                <div className="MenuBot">
                    <div className="MenuLeft">
                        {iconeStartMenu('Messagerie', iconeMail, setAction.messagerie)}
                        {iconeStartMenu('Profil', iconeUser, setAction.profil)}

                    </div>
                    <div className="MenuRight">
                        {iconeStartMenu('Sites Web', iconeFichier, setAction.explorer)}
                        {iconeStartMenu('Projets', iconeFichier, setAction.explorer)}
                        {iconeStartMenu('Musiques', iconeMusique, setAction.explorer)}
                        {iconeStartMenu('Stack Techniques', iconeOrdi, setAction.profil)}
                    </div>


                </div>

            </div>
        }
        <div className="timeBarre" style={{ display: 'inline-block', right: 0, top: 0, padding: '0 1rem', color: 'white', height: 100 + "%", position: "absolute" }}>
            <div style={{ height: 100 + "%", display: 'flex', alignItems: 'center', flexDirection: "column", justifyContent: "center" }}>
                <p style={{ margin: 0, textAlign: "center" }}>{time}</p>
                <p style={{ margin: 0, textAlign: "center" }}>{date}</p>

            </div>

        </div>

    </div >);
}

export default BarreDeTache;