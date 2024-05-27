import { useState } from 'react'
import logo from '../media/icone.png'
import { styled } from '@mui/material/styles';
import iconeInternet from '../media/explorerInternet.png'
import iconeMusique from "../media/musique.png"
import iconeOrdi from '../media/XPIcon.webp'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));
const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
    justifyContent: 'start'
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const Explorer = ({ activeFunction, setUrlActive }) => {
    let [explicationTitle, setExplicationTitle] = useState()
    let [explicationDesc, setExplicationDesc] = useState()

    let [precedentContent, setPrecedentContent] = useState()

    let domotiqueProjectView = () => {
        return (<>
            <h3>Domotisation de mon habitation et electronique embarqué</h3>
        </>)
    }
    let MetaverseProjectView = () => {
        return (<>
            <h3>Domotisation de mon habitation et electronique embarqué</h3>
        </>)
    }
    let data = [

        {
            title: 'Mes Créations Web',
            content: [
                {
                    title: 'apsideu.wep.app',
                    icone: logo,
                    desc: "Site de Photographie",
                    type: 'site',
                    link: 'apsideu.web.app'
                },
                {
                    title: 'clemjet.web.app',
                    icone: logo,
                    desc: "Site de l'artiste CLEMJET en construction",
                    type: 'site',
                    link: 'clemjetid.web.app'
                }
            ],
            icone: logo,
            desc: "J'ai participé à l'élaboration de plusieurs sites web actuellement en ligne. D'autre création ne sont plus disponible sur internet.",
            type: 'folder'
        },
        {

            title: 'Mes Projets Perso',
            content: [
                {
                    title: 'Domotique',
                    icone: logo,
                    desc: "J'ai crée un environnement de gestion d'outils domotique, d'electronique integré et connecté.",
                    type: 'project',
                    projectContent: domotiqueProjectView
                },
                {
                    title: 'Metaverse',
                    icone: logo,
                    desc: "Un environnement 3d multi-plateforme, construit avec des outils de création de jeu vidéo.",
                    type: 'project',
                    projectContent: MetaverseProjectView
                },
                {
                    title: 'Un Jardin automatique',
                    icone: logo,
                    desc: "Un environnement de création électronique pour la gestion d'un 'potager' (je n'ai plus de potager à l'heure actuelle ...) ou d'une terasse remplie de plantes !",
                    type: 'project',
                    projectContent: MetaverseProjectView
                },
                {
                    title: "Jarvis, l'IA de rève",
                    icone: logo,
                    desc: "Mon project qui relève le plus du rève d'enfant, j'ai toujours voulu un assitant virtuel, qui donnerai à mon ordinateur une interface vivante de communication ! Plus que jamais proche du but grâce aux dernières avancées, j'essaye d'y consacrer du temps lorsque j'en ai.",
                    type: 'project',
                    projectContent: MetaverseProjectView
                }
            ],
            icone: logo,
            desc: "J'ai toujours voulu utiliser mes compétences personnelle et professionnelle afin d'améliorer mon quotidien et m'entraîner.",
            type: 'folder'
        },
        {

            title: 'Mes Musiques',
            content: [
                {

                }
            ],
            icone: logo,
            desc: "Des compositions personnelle ou des musiques qui me sont particulierement chère. Oui, j'adore la musique.",
            type: 'folder'
        },
        {

            title: 'Mes Jeux',
            content: [
                {

                }
            ],
            icone: logo,
            desc: "Les jeux vidéos ont eu un impact culturel énorme sur moi, voila de quoi me cerner un peu mieux !",
            type: 'folder'
        }

    ]

    let [content, setContent] = useState([...data]);

    const setExplication = (desc, title) => {
        setExplicationTitle(title)
        setExplicationDesc(desc)
    }

    const iconeFolder = (titleIcone = "test", img = logo, desc, contentIcone) => {
        return (<div className="windowIcone" onDoubleClick={() => { contentIcone && setPrecedentContent(content); setContent(contentIcone); }} onClick={() => { setExplication(desc, titleIcone) }}>
            <img src={img} />
            <p>{titleIcone}</p>

        </div >
        )
    }
    const icone = (titleIcone = "test", img = logo, desc, link) => {
        return (<div className="windowIcone" onClick={() => { setExplication(desc, titleIcone) }} >
            <img src={img} />
            <p >{titleIcone}</p>

        </div >
        )
    }
    const iconeproject = (titleIcone = "test", img = logo, desc, content) => {

        let contentTest = content()
        return (<div className="windowIcone" onClick={() => { setExplication(desc, titleIcone) }} >
            <img src={img} />
            <p >{titleIcone}</p>

        </div >
        )
    }
    const handleNavigateur = (link) => {
        setUrlActive('https://' + link);
        activeFunction()
    }
    const iconeLink = (titleIcone = "test", img = logo, desc, link) => {
        return (<div className="windowIcone" onClick={() => { setExplication(desc, titleIcone) }} onDoubleClick={() => handleNavigateur(link)} >
            <img src={img} />
            <p >{titleIcone}</p>

        </div >
        )
    }
    const handleIconeDoubleClick = (e) => {
        if (e.type == 'project') {
            setExplication(e.desc, e.titleIcone)
        } else if (e.type == 'site') {
            handleNavigateur(e.link)
        } else if (e.type == 'folder') {
            setExplication(e.desc, e.title); setPrecedentContent(content); setContent(e.content)
        } else if (e.type == 'musique') {

        }
    }
    return (<>
        <div className="windowNav">
            <button onClick={() => { setContent(precedentContent) }}>Précedent</button>
            <button>Rechercher</button>
        </div>
        <div className="windowContent">
            <div className="explication">

                <Accordion defaultExpanded>
                    <AccordionSummary onClick={() => { setContent([...data]) }}>
                        Ce PC
                    </AccordionSummary>
                    <MuiAccordionDetails style={{ margin: 0, padding: 0, paddingLeft: '1rem' }}>
                        {data && data.map((e) => {
                            return (<>
                                <Accordion defaultExpanded>
                                    <AccordionSummary ><span onClick={() => { handleIconeDoubleClick(e) }}>{e.title}</span></AccordionSummary>
                                    <MuiAccordionDetails style={{ margin: 0, padding: 0 }}>
                                        <ul  >
                                            {e.content.map((c) => {
                                                return c.title && <li style={{ margin: '0.5rem' }} onDoubleClick={() => { handleIconeDoubleClick(c) }}>{c.title}</li>
                                            })}
                                        </ul>
                                    </MuiAccordionDetails>
                                </Accordion>
                            </>)
                        })}
                    </MuiAccordionDetails>
                </Accordion>
                {/* <h3>Ce PC</h3>
                    {data && data.map((e) => {
                        return <>
                            <h3 style={{ border: '0.5px solid black', padding: '1rem', margin: 0 }}>{e.title}</h3>
                            {e.content.map((c) => {
                                return <p>{c.title}</p>
                            })}
                        </>
                    })} */}

            </div>
            <div className="explorer">
                <div className='contentExplorer'>
                    {typeof content == 'object' && content.map((e, key) => {


                        if (e.type == 'folder') {
                            return (iconeFolder(e.title, logo, e.desc, e.content))
                        } else if (e.type == 'site') {
                            return (iconeLink(e.title, iconeInternet, e.desc, e.link))
                        } else if (e.type == 'musique') {
                            return (iconeLink(e.title, iconeMusique, e.desc, e.link))
                        } else if (e.type == 'project') {
                            return (iconeproject(e.title, iconeOrdi, e.desc, e.projectContent))
                        }

                    })}

                    {!content &&
                        <p>Il n'y a rien dans cette endroit...</p>
                    }
                </div>
                <div className='explicationExplorer'>
                    <h2>{explicationTitle}</h2>
                    <p>{explicationDesc}</p>
                </div>
            </div>
        </div>
    </>);
}

export default Explorer;