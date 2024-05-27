import './App.css'
import fondwin from './media/fondwin.jpg'
import iconeFichier from "./media/icone.png"
import iconeOrdi from './media/XPIcon.webp'
import iconeMail from './media/gmail.ico'
import iconeActu from "./media/MSN.png"
import iconeUser from "./media/user.png"
import iconeMusique from "./media/musique.png"
import iconeInternet from './media/explorerInternet.png'
import iconeVerse from './media/verseIcone.png'

import CV from './media/CV-ESGI.pdf'

import Window from './components/window'
import WindowLong from './components/windowLong'
import IconeBureau from './components/iconeBureau'
import BarreDeTache from './components/barreDeTache'
import Messagerie from './components/messagerie'
import Navigateur from './components/navigateur'
import Salsaverse from './components/salsaverse'
import Draggable from 'react-draggable'
import { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const App = () => {

  let naviRef = useRef()

  let [explorerActive, setExplorerActive] = useState(false)

  let [ActualitéActive, setActualitéActive] = useState(false)

  let [ProfilActive, setProfilActive] = useState(false)

  let [techActive, settechActive] = useState(false)

  let [messagerieActive, setMessagerieActive] = useState(false)

  let [navigateurActive, setNavigateurActive] = useState(false)
  let [urlActive, setUrlActive] = useState("https://clemjetid.web.app")

  let [SalsaverseActive, setSalsaverseActive] = useState(false)

  let setActiveFunction = {
    explorer: () => setExplorerActive(!explorerActive),
    actu: setActualitéActive,
    profil: () => setProfilActive(!ProfilActive),
    tech: settechActive,
    messagerie: () => setMessagerieActive(!messagerieActive),
    navigateur: () => setNavigateurActive(!navigateurActive)
  }
  const [displayedState, setDisplayedState] = useState({ explorer: 'block', actualité: 'block', profil: 'block', tech: 'block', messagerie: 'block', navigateur: 'block' })

  const setDisplayed = (e) => {
    let table = { ...displayedState }
    console.log('oui')
    if (displayedState[e] == 'block') {

    } else if (displayedState[e] == 'none') {

    }
  }

  let objectTestActive = [
    { bool: explorerActive, title: 'Explorateur de Fichier', logo: iconeFichier, key: "explorer" },
    { bool: ActualitéActive, title: 'Actu et Profil...', logo: iconeUser, key: "actualité" },
    { bool: ProfilActive, title: 'Profil et Stack', logo: iconeUser, key: "profil" },
    { bool: techActive, title: 'Profil et Stack', logo: iconeUser, key: "tech" },
    { bool: messagerieActive, title: 'Messagerie', logo: iconeMail, key: "messagerie" },
    { bool: navigateurActive, title: 'Navigateur', logo: iconeInternet, key: "navigateur" }
  ]
  let [StateObject, setStateObject] = useState([])

  useEffect(() => {
    let StateObject2 = [];
    objectTestActive.map((e) => {
      if (e.bool) {

        StateObject2.push(e)
      }
    })

    setStateObject(StateObject2)

  }, [explorerActive, ActualitéActive, ProfilActive, techActive, messagerieActive, navigateurActive])

  useEffect(() => {
    // toast((t) => {
    //   return (
    //     <div style={{ display: 'flex' }}>
    //       <div style={{ display: 'flex', width: 30 + '%', justifyContent: 'space-around' }} >

    //         <div style={{ width: 30 + '%' }} onClick={() => { setMessagerieActive(true) }}>
    //           <img src={iconeMail} alt="Mail" style={{ margin: '0.2rem' }} className="iconeToaster" />

    //         </div>



    //       </div>
    //       <div style={{ display: 'flex', width: 70 + '%', alignItems: 'center', fontSize: '0.8rem', margin: '0.2rem', color: 'white' }}>

    //         Bienvenue sur mon site de con !

    //       </div>

    //     </div>
    //   )
    // }, {
    //   style: {
    //     backgroundColor: '#0252e5',

    //   },
    //   duration: "1000",
    //   position: "top-right"
    // })
    // console.log('oui')
  }, [])


  return (
    <div id="bureau">
      <img src={fondwin} alt="fond" />

      <Toaster />
      <BarreDeTache setAction={setActiveFunction} activeObject={StateObject} displayedState={displayedState} setDisplayedState={setDisplayedState}></BarreDeTache>

      {
        SalsaverseActive &&
        <Salsaverse displayedState={displayedState} setDisplayedState={setDisplayedState} setActive={() => setSalsaverseActive(!SalsaverseActive)} left={20} top={20}></Salsaverse>
      }
      {explorerActive && <Window displayedState={displayedState} setDisplayedState={setDisplayedState} setNavigateurActive={() => { setNavigateurActive(!navigateurActive) }} setUrlActive={setUrlActive} title="Mes Documents" setActive={() => setExplorerActive(!explorerActive)} left={20} top={20}></Window>}



      {/* {ActualitéActive && <WindowLong contentState="actu" setActive={() => { setActualitéActive(!ActualitéActive) }} left={40} top={15}></WindowLong>} */}

      {ProfilActive && <WindowLong displayedState={displayedState} setDisplayedState={setDisplayedState} contentState="profil" setActive={() => { setProfilActive(!ProfilActive) }} left={30} top={10}></WindowLong>}

      {/* {techActive && <WindowLong displayedState={displayedState} setDisplayedState={setDisplayedState} contentState="tech" setActive={() => { settechActive(!techActive) }} left={60} top={5}></WindowLong>} */}

      {messagerieActive && <Messagerie setActive={() => { setMessagerieActive(!messagerieActive) }} left={40} top={20}></Messagerie>}

      {navigateurActive && <Navigateur displayedState={displayedState} setDisplayedState={setDisplayedState} url={urlActive} title="Navigateur" setActive={() => { setNavigateurActive(!navigateurActive) }}  ></Navigateur>}










      <IconeBureau title="Mes Documents" icone={iconeFichier} onDoubleClickProps={() => { setExplorerActive(!explorerActive); setDisplayedState({ ...displayedState, explorer: 'block' }) }} ></IconeBureau>



      {/* <IconeBureau title="Stack Technique" icone={iconeOrdi} onDoubleClickProps={() => { settechActive(!techActive); setDisplayedState({ ...displayedState, tech: 'block' }) }}  ></IconeBureau> */}

      <IconeBureau title="Messagerie" icone={iconeMail} onDoubleClickProps={() => { setMessagerieActive(!messagerieActive); setDisplayedState({ ...displayedState, messagerie: 'block' }) }} ></IconeBureau>

      {/* <IconeBureau title="Actualités" icone={iconeActu} onDoubleClickProps={() => { setActualitéActive(!ActualitéActive) }}  ></IconeBureau> */}

      <IconeBureau title="Profil" icone={iconeUser} onDoubleClickProps={() => { setProfilActive(!ProfilActive); setDisplayedState({ ...displayedState, profil: 'block' }) }} ></IconeBureau>



      <IconeBureau title="Navigateur" icone={iconeInternet} onDoubleClickProps={() => { setNavigateurActive(!navigateurActive); setDisplayedState({ ...displayedState, navigateur: 'block' }) }} ></IconeBureau>

      <IconeBureau title="SalsaVerse" icone={iconeVerse} onDoubleClickProps={() => { setSalsaverseActive(!SalsaverseActive); setDisplayedState({ ...displayedState }) }} ></IconeBureau>



      <script src="https://kit.fontawesome.com/472b4ee173.js" crossOrigin="anonymous"></script>

    </div >
  );
}



export default App;
