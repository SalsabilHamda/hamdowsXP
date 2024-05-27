import { useState } from 'react'
import '../css/window.css'
import logo from '../media/icone.png'
import test from '../media/icone.png'
import Draggable from 'react-draggable'
import Explorer from './explorer'
const Window = ({ setUrlActive, setNavigateurActive, title, setActive, left, top, displayedState, setDisplayedState }) => {


    const inverseDisplay = () => {
        if (displayedState.explorer == 'block') setDisplayedState({ ...displayedState, explorer: "none" })
        else if (displayedState.explorer == 'none') setDisplayedState({ ...displayedState, explorer: 'block' })
    }

    return (

        <Draggable cancel=".contentWindow,.windowHeaderButton " >
            <div className="drag-react windowDiv" style={{ display: displayedState.explorer }}>


                <div className="windowHeader">
                    <div>
                        <img src={logo} />
                        <p>{title}</p>
                    </div>

                    <div className='windowHeaderButton'>

                        <button className="windowReduce" onClick={inverseDisplay}>-</button>
                        <button className="windowClose" onClick={setActive}>x</button>
                    </div>

                </div>

                <div className="contentWindow">
                    <Explorer activeFunction={setNavigateurActive} setUrlActive={setUrlActive} ></Explorer>
                </div>
            </div>
        </Draggable>
    );
}

export default Window;