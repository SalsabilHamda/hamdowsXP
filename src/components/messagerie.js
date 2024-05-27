import Window from "./window";
import Draggable from "react-draggable";
import logo from '../media/gmail.ico'
import linkedin from '../media/linkedin.png'

import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Messagerie = ({ left, top, setActive }) => {

    let [objectForm, setObjectForm] = useState()
    let [contentForm, setContentForm] = useState()
    let [expediteurForm, setExpediteurForm] = useState()

    let [debugMessage, setDebugMessage] = useState()

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        if (objectForm && contentForm && expediteurForm) {
            emailjs.sendForm('service_salsaid', 'template_akkp0mj', form.current, '5YZEFrzMNCcP1c7da')
                .then((result) => {
                    console.log(result.text);
                    setDebugMessage("votre message à bien été envoyé")
                }, (error) => {
                    console.log(error.text);

                });
        }
        else {
            setDebugMessage("Vérifiez que tout les champs soit bien rempli")
        }

    };

    const SendTheMail = (e) => {
        e.preventDefault();
        console.log(e.target)
    }

    return (<>
        <Draggable cancel=".windowHeaderButton,.messagerieContent">
            <div className="windowDiv">

                <div className="windowHeader ">
                    <div>
                        <img src={logo} />
                        <p>Messagerie</p>
                    </div>

                    <div className='windowHeaderButton'>

                        <button className="windowReduce">-</button>
                        <button className="windowClose" onClick={setActive}>x</button>
                    </div>

                </div>

                <div className="messagerieContent">
                    <div className="contact">
                        <p>Me contacter autrement :</p>
                        <p>Num : <a href="tel:+330769739835">07 69 73 98 35</a></p>
                        <a href="https://linkedin.com/in/salsabil-hamda" target="_blank"><img src={linkedin} /></a>
                        {debugMessage && <div style={{ marginTop: '3rem', textAlign: 'center', color: 'red' }}>
                            <p>{debugMessage}</p>
                        </div>

                        }
                    </div>
                    <div className="NewMessage">
                        <form ref={form} onSubmit={sendEmail}>
                            <p>Nouveau Message :</p>
                            <label htmlFor="destinataire">A<input type="text" name="destinataire" defaultValue="lecomptedesalsa@gmail.com" /></label>
                            <label htmlFor="expediteur">Nom<input type="text" name="expediteurForm" value={expediteurForm} onChange={(e) => setExpediteurForm(e.target.value)} /></label>
                            <label htmlFor="objet">Objet<input type="text" name="objectForm" value={objectForm} onChange={(e) => setObjectForm(e.target.value)} /></label>

                            <p >Contenu du message :</p>
                            <textarea name="contentForm" id="content" value={contentForm} onChange={(e) => setContentForm(e.target.value)} ></textarea>
                            <div className="messagerieFooter">
                                <input type="submit" defaultValue="Envoyer" />
                                <button onClick={setActive}>Annuler</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </Draggable>
    </>);
}

export default Messagerie;