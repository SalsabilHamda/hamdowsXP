import Draggable from "react-draggable";
import { useEffect, useState } from "react";

import logo from '../media/explorerInternet.png'

const Navigateur = ({ url, title, left, top, setActive, displayedState, setDisplayedState }) => {

    let [refreshId, setRefreshId] = useState("0")
    let [link, setLink] = useState()
    let [precedentLink, setPrecedentLink] = useState()

    const inverseDisplay = () => {
        if (displayedState.navigateur == 'block') setDisplayedState({ ...displayedState, navigateur: "none" })
        else if (displayedState.navigateur == 'none') setDisplayedState({ ...displayedState, navigateur: 'block' })
    }
    let LinkIcone = (title, img, adress) => {

        return (<div style={{ display: "flex", fontSize: '0.7rem', maxWidth: 15 + "%" }} onClick={() => {
            setPrecedentLink(link)
            setLink(adress);

        }}>
            <img src={logo} alt="" style={{ width: '20%', padding: 0.2 + 'rem' }} />
            <p>{title}</p>
        </div>)
    }


    let changeUrl = (url) => {
        setLink(url)
    }
    useEffect(() => {
        changeUrl(url)
    }, [])
    return (
        <Draggable cancel=".navNavigateur,.iFrameDiv,.windowHeaderButton">
            <div className="NavigateurDiv" style={{ display: displayedState.navigateur, }}>
                <div className="windowHeader" >
                    <div>
                        <img src={logo} />
                        <p>Navigateur</p>
                    </div>

                    <div className='windowHeaderButton'>

                        <button className="windowReduce" onClick={inverseDisplay}>-</button>
                        <button className="windowClose" onClick={setActive}>x</button>
                    </div>

                </div>
                <div className="navNavigateur">
                    <div>
                        <button onClick={() => setLink(precedentLink)}>Précedent</button>
                        <button onClick={() => setRefreshId(Math.random)}>Raffraichir</button>
                        <input type="text" defaultValue={link} style={{ width: 70 + '%', padding: 0.5 + 'rem', margin: '0 0.5rem ' }} />
                    </div>
                    <div style={{ display: "flex" }}>
                        {LinkIcone('clemjet', logo, "https://clemjetid.web.app/")}
                        {LinkIcone('apsideu.web.app', logo, "https://apsideu.web.app")}
                    </div>

                </div>
                <div className="iFrameDiv">
                    <iframe key={refreshId} src={link} />
                </div>
            </div>
        </Draggable>);
}

export default Navigateur;