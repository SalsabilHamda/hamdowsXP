
import imgReact from '../media/react.png'
import imgNode from '../media/node.png'
import imgPhp from '../media/PHP.png'
import imgUnity from '../media/unity.png'
import imgPython from '../media/Python.png'

import stars from '../media/star.png'
import { useState } from 'react'

const TechContent = () => {


    let [techContentInput, setTechContentInput] = useState('react')

    return (<>
        <fieldset style={{ border: 1 + 'px solid black', height: 25 + '%' }}>
            <legend>Technologies</legend>

            <div style={{ display: 'flex', justifyContent: 'space-around' }} onChange={(e) => { setTechContentInput(e.target.value); }}>
                <label htmlFor="react" style={{ width: 20 + '%', textAlign: 'center' }} >
                    <img src={imgReact} alt="" />
                    <input readOnly type="radio" name="techno" id="react" value="react" />
                </label>
                <label htmlFor="nodeJs" style={{ width: 20 + '%', textAlign: 'center' }}>
                    <img src={imgNode} alt="" />
                    <input readOnly type="radio" name="techno" id="nodeJs" value="nodejs" />
                </label>
                <label htmlFor="PHP" style={{ width: 20 + '%', textAlign: 'center' }}>
                    <img src={imgPhp} alt="" />
                    <input readOnly type="radio" name="techno" id="PHP" value="PHP" />
                </label>
                <label htmlFor="unity" style={{ width: 20 + '%', textAlign: 'center' }}>
                    <img src={imgUnity} alt="" />
                    <input readOnly type="radio" name="techno" id="unity" value="unity" />
                </label>
                <label htmlFor="python" style={{ width: 20 + '%', textAlign: 'center' }}>
                    <img src={imgPython} alt="" />
                    <input readOnly type="radio" name="techno" id="python" value="python" />
                </label>

            </div>
        </fieldset>
        <div style={{ display: "flex", height: 30 + '%', justifyContent: 'space-between' }}>
            <fieldset style={{ border: 1 + 'px solid black', width: 60 + '%' }}>
                <legend> Spécificités</legend>
                {techContentInput === 'react' ? <>
                    <p>Language Front-End</p>
                    <p>Techno Novatrice</p>
                    <p>Composant réutilisable</p>
                </> : <></>}
                {techContentInput === 'nodejs' ? <>
                    <p>Language Back-End</p>
                    <p>Techno Novatrice</p>
                    <p>Language Back en JS</p>
                </> : <></>}
                {techContentInput === 'PHP' ? <>
                    <p>Language Back-End</p>
                    <p>Grande présence sur le marché</p>
                    <p>Language interprété</p>
                </> : <></>}
                {techContentInput === 'unity' ? <>
                    <p>Moteur de Jeu Vidéo</p>
                    <p>Exportation Web pratique</p>
                    <p>Utile pour intégration 3D</p>
                </> : <></>}
                {techContentInput === 'python' ? <>
                    <p>Language de programmation logiciel</p>
                    <p>Multi-Plateforme</p>
                    <p>Outil polyvalent</p>
                </> : <></>}
            </fieldset>
            <fieldset style={{ border: 1 + 'px solid black', width: 30 + '%' }}>
                <legend> Options de Couplages</legend>

                {techContentInput === 'react' ? <>
                    <p>NodeJs</p>
                    <p>ReactUnity</p>
                    <p>Firebase</p>
                </> : <></>}
                {techContentInput === 'nodejs' ? <>
                    <p>React</p>
                    <p>Express / MeteorJs</p>
                    <p>MongoDB</p>
                </> : <></>}
                {techContentInput === 'PHP' ? <>
                    <p>MySQL</p>
                    <p>JS Natif</p>

                </> : <></>}
                {techContentInput === 'unity' ? <>
                    <p>C#</p>
                    <p>ReactUnity</p>
                    <p>Blender</p>
                </> : <></>}
                {techContentInput === 'python' ? <>
                    <p>Raspberry</p>
                    <p></p>
                    <p>Composant réutilisable</p>
                </> : <></>}

            </fieldset>
        </div>
        <div style={{ display: "flex", margin: '1rem 0', height: 30 + '%', justifyContent: 'space-between' }}>
            <fieldset style={{ border: 1 + 'px solid black', width: 50 + '%' }}>
                <legend> Expériences</legend>

                {techContentInput === 'react' ? <>

                    <div className="stars" >
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />
                    </div>
                    <p>Sites vitrines</p>
                    <p>Appli de Gestion Domotique</p>
                </> : <></>}
                {techContentInput === 'nodejs' ? <>
                    <div className="stars" >
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />
                    </div>
                    <p>Appli de Gestion Domotique</p>
                    <p>API</p>
                    <p></p>
                </> : <></>}
                {techContentInput === 'PHP' ? <>
                    <div className="stars" >
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />

                    </div>
                    <p>Sites Vitrines</p>
                    <p>Bibliothèque Musicale</p>

                </> : <></>}
                {techContentInput === 'unity' ? <>
                    <div className="stars" >
                        <img src={stars} />
                        <img src={stars} />
                        <img src={stars} />

                    </div>
                    <p>Metaverse Boutique de Produit</p>
                    <p>Salsaverse, Experience de visite de mon univers 3D</p>
                </> : <></>}
                {techContentInput === 'python' ? <>
                    <div className="stars" >
                        <img src={stars} />
                        <img src={stars} />

                    </div>
                    <p>Gestion de Capteur electronique</p>
                    <p>Script Domotique</p>
                </> : <></>}

            </fieldset>
            <fieldset style={{ border: 1 + 'px solid black', width: 30 + '%' }}>
                <legend> Possibilités</legend>
                {techContentInput === 'react' ? <>
                    <p>One page Application</p>
                    <p>Mise en place rapide</p>

                </> : <></>}
                {techContentInput === 'nodejs' ? <>
                    <p>Back-End optimisé</p>
                    <p>Compatibilité</p>
                </> : <></>}
                {techContentInput === 'PHP' ? <>
                    <p>Gestion de grosse base de données</p>
                    <p>Templating</p>

                </> : <></>}
                {techContentInput === 'unity' ? <>
                    <p>Jeu vidéo multi-plateforme</p>
                    <p>Scènes 3D intégrable et intéractive</p>
                    <p>Matérialisation 3D de produit</p>
                </> : <></>}
                {techContentInput === 'python' ? <>
                    <p>Scripting</p>
                    <p>Appli Multi-Plateforme</p>
                    <p>Administration web</p>
                </> : <></>}
            </fieldset>
        </div>
    </>);
}

export default TechContent;