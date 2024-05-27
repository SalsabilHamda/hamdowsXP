import Draggable from "react-draggable";
import logo from '../media/icone.png'
const Salsaverse = ({ setActive, left, top, displayedState, setDisplayedState }) => {

    const inverseDisplay = () => {
        if (displayedState.salsaverse == 'block') setDisplayedState({ ...displayedState, salsaverse: "none" })
        else if (displayedState.salsaverse == 'none') setDisplayedState({ ...displayedState, salsaverse: 'block' })
    }
    return (
        <Draggable cancel=".salsaverseContent,.windowHeaderButton">
            <div className="windowDiv">


                <div className="windowHeader " style={{ display: displayedState, left: left, top: top }}>
                    <div>
                        <img src={logo} />
                        <p>SalsaVerse</p>
                    </div>

                    <div className='windowHeaderButton'>

                        <button className="windowReduce" onClick={inverseDisplay}>-</button>
                        <button className="windowClose" onClick={setActive}>x</button>
                    </div>

                </div>

                <div style={{ height: 93 + '%', overflow: 'auto' }} className='salsaverseContent'>

                    <iframe src="https://bangergaming888.web.app" frameborder="0" style={{ width: '100%', height: '100%', }}></iframe>


                </div>
            </div>

        </Draggable >
    );
}

export default Salsaverse;