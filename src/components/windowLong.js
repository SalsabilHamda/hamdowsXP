import { useEffect, useState } from 'react'
import '../css/window.css'
import logo from '../media/icone.png'
import test from '../media/icone.png'
import photo from '../media/photo.png'
import imgReact from '../media/react.png'
import imgNode from '../media/node.png'
import imgPhp from '../media/PHP.png'
import imgUnity from '../media/unity.png'
import imgPython from '../media/Python.png'

import CV from '../media/CV-ESGI.pdf'

import stars from '../media/star.png'
import iconeActu from "../media/MSN.png"
import iconeUser from "../media/user.png"
import iconeOrdi from '../media/XPIcon.webp'
import Draggable from 'react-draggable'

import TechComponent from '../views/techContent'
import ActuComponent from '../views/actuContent'
import ProfilComponent from '../views/profilContent'
import zIndex from '@mui/material/styles/zIndex'

const WindowLong = ({ contentState, setActive, left, top, displayedState, setDisplayedState }) => {
    let [titleState, setTitleState] = useState()
    let [icones, setIcones] = useState()
    let [content, setContent] = useState()
    let [techContentInput, setTechContentInput] = useState()


    const inverseDisplay = () => {
        if (displayedState[content] == 'block') setDisplayedState({ ...displayedState, [content]: "none" })
        else if (displayedState[content] == 'none') setDisplayedState({ ...displayedState, [content]: 'block' })
    }

    const profilContent = () => {
        setTitleState("Profil")
        setIcones(iconeUser)
        setContent('profil')

    }
    const techContent = () => {
        setTitleState("Stack Technique")
        setIcones(iconeOrdi)

        setContent('tech')
    }
    const actuContent = () => {

        setTitleState("Actualité")
        setIcones(iconeActu)
        setContent('actu')

    }

    const updateContent = () => {
        switch (contentState) {
            case 'actu':
                actuContent();

                break;
            case 'profil':
                profilContent();

                break;
            case 'tech':
                techContent();

                break;
            default:
                break;
        }
    }
    useEffect(() => {
        updateContent()
    }, [techContentInput])


    return (

        <Draggable cancel=".windowLongContent,.windowHeaderButton">
            <div className="drag-react windowLongDiv" style={{ cursor: 'pointer', display: displayedState[content] }} >


                <div className="windowHeader">
                    <div>
                        <img src={icones} style={{ width: 10 + '%', margin: '0 0.5rem' }} />
                        <p style={{ fontSize: 1 + 'rem', color: 'white' }}>{titleState}</p>
                    </div>

                    <div className='windowHeaderButton'>

                        <button className="windowReduce" onClick={inverseDisplay}>-</button>
                        <button className="windowClose" onClick={setActive}>x</button>
                    </div>

                </div>
                <div className='windowLongContent'>
                    <div className='windowLongContentDiv'>
                        {content == "tech" && <TechComponent></TechComponent>}
                        {content == "profil" && <ProfilComponent></ProfilComponent>}
                        {content == "actu" && <ActuComponent></ActuComponent>}
                    </div>
                    <div>
                        <button style={{ margin: '0.5rem 0', width: 30 + '%', float: 'right' }} onClick={setActive}>OK</button>
                        {/* <button style={{ margin: '0.5rem 0.2rem', width: 30 + '%', float: 'right' }}> <a href={CV} download style={{ color: 'black', textDecoration: 'none' }}> Télécharger le CV</a></button> */}
                    </div>
                </div>
            </div>
        </Draggable>
    );
}

export default WindowLong;