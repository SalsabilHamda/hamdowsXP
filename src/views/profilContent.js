import photo from '../media/photo.png'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls, PerformanceMonitor, useAnimations, useFBX } from '@react-three/drei'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SKIN from '../media/TauntCostard.fbx'
import React, { Suspense, useEffect, useState } from 'react'
import { fontSize } from '@mui/system'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Html, useProgress } from '@react-three/drei'

import CircularProgress from '@mui/material/CircularProgress';

import logoPython from '../media/Python.png'
import logoReact from '../media/react.png'
import logoNode from '../media/nodejs-logo.png'
import logoPHP from '../media/PHP.png'
import logoAngular from '../media/angular-logo.png'
import logoUnity from '../media/unity.png'
import logoArduino from '../media/Arduino_uno.png'
import logo25 from '../media/25logo.png'
import logoUnreal from '../media/Unreal_Engine_logo.png'
import logoJava from '../media/java-logo.png'
import logoNest from '../media/nestjs_logo.png'

function Loader() {
    const { progress } = useProgress()
    return <Html center><CircularProgress /></Html>
}
const Scene = () => {

    const fbx = useFBX(SKIN)
    const myMesh = React.useRef()

    useFrame(({ clock }) => {
        // myMesh.current.rotation.y = clock.getElapsedTime() / 2

    })
    const { actions, names } = useAnimations(fbx.animations, fbx)
    useEffect(() => {

        actions[names[0]].play()
    }, [])
    return <primitive object={fbx} scale={0.55} position={[0, -40, -80]} ref={myMesh} />
}
const ProfilContent = () => {
    const [selectSkill, setSelectSkill] = useState('Languages de programation')

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 18
        },
        desktop: {
            breakpoint: { max: 3000, min: 1224 },
            items: 8
        },

        tablet: {
            breakpoint: { max: 1224, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    return (
        // <>
        //     <div style={{ display: "flex" }}>
        //         <div style={{ width: 80 + '%' }}>
        //             <label htmlFor="Name">Prénom et Nom
        //                 <input type="select" name="Name" defaultValue="Salsabil Hamda" style={{ display: 'block', margin: 0.5 + 'rem', width: 80 + '%' }} />
        //             </label>
        //             <label htmlFor="Age">Age
        //                 <input type="select" name="Age" defaultValue="25" style={{ display: 'block', margin: 0.5 + 'rem', width: 80 + '%' }} />
        //             </label>
        //             <label htmlFor="Formations">Formations
        //                 <select name="Formations" style={{ display: 'block', margin: 0.5 + 'rem', width: 80 + '%' }} >
        //                     <option defaultValue="EPITECH">Architecte et Concepteur d'application Web (+5) | EPITECH (alternance)</option>
        //                     <option defaultValue="3W Academy">Développeur d'application Web (+2) | 3W Academy (alternance)</option>
        //                     <option defaultValue="BAC">BAC STI2D Option ITEC | Lycée Stephane Hessel</option>

        //                 </select>
        //             </label>
        //         </div>
        //         <div>
        //             <img src={photo} style={{ width: 95 + '%', float: "right" }} />
        //         </div>
        //     </div>
        //     <div>
        //         <p style={{ margin: '1rem 0 0.5rem 0' }}>Compétences et Savoirs-être</p>
        //         <div style={{ backgroundColor: '#FFFFFF', padding: '0.3rem 1rem', display: 'flex', flexDirection: 'column', border: 1 + 'px solid black' }}>
        //             <label htmlFor="Optimiste">
        //                 <input type="checkbox" name="Optimiste" defaultChecked />Optimiste</label>
        //             <label htmlFor="Travail en équipe">
        //                 <input type="checkbox" name="Travail en équipe" defaultChecked />Travail en équipe</label>
        //             <label htmlFor="Curieux">
        //                 <input type="checkbox" name="Curieux" defaultChecked />Curieux</label>
        //             <label htmlFor="Force de proposition">
        //                 <input type="checkbox" name="Force de proposition" defaultChecked />Force de proposition</label>
        //         </div>
        //     </div>
        //     <div>
        //         <p style={{ margin: '1rem 0 0.5rem 0' }}>Hobbies et Passion</p>
        //         <div style={{ backgroundColor: '#FFFFFF', padding: '0.3rem 1rem', display: 'flex', flexDirection: 'column', border: 1 + 'px solid black' }}>
        //             <label htmlFor="Musique">
        //                 <input type="checkbox" name="Musique" defaultChecked />Musique (Piano et MAO)</label>
        //             <label htmlFor="Jeux Vidéos">
        //                 <input type="checkbox" name="Jeux Vidéos" defaultChecked />Jeux Vidéos</label>
        //             <label htmlFor="Sport">
        //                 <input type="checkbox" name="Sport" defaultChecked />Sport (Boxe)</label>
        //             <label htmlFor="Bricolage">
        //                 <input type="checkbox" name="Bricolage" defaultChecked />Bricolage et électronique</label>
        //         </div>
        //         <p style={{ margin: '1rem 0 0.5rem 0' }}>Anecdotes</p>
        //         <div style={{ backgroundColor: '#FFFFFF', padding: '0.3rem 1rem', display: 'flex', flexDirection: 'column', border: 1 + 'px solid black', fontSize: 0.8 + "rem" }}>
        //             <ul style={{ padding: '0.5rem', margin: 0 }}>
        //                 <li>Je fait un poulet pané de fou</li>
        //                 <li>J'ai déjà fait de l'animation</li>
        //                 <li>J'ai une idée assez utopique du monde</li>
        //             </ul>
        //         </div>

        //     </div>
        // </> 
        <div onClick={(e) => e.preventDefault()} style={{ width: '100%', margin: 'auto', height: '100%' }}>
            <div className="gamingFont profilHeader">
                <div className='nameHeader'>
                    <h3 className="profilTitleName"><span style={{ fontSize: '0.5rem' }}>Nom de l'Agent : </span>SALSABIL HAMDA</h3>
                    <h4 className="profilSubTitleName"><span style={{ fontSize: '0.5rem' }}>Spécialisation : </span>Créateur de rèves</h4>
                </div>
                <div className='logoHeader'>
                    <img src={logo25} alt="25" />
                </div>

            </div>
            <div className='customDivCanvas'>
                <ArrowCircleLeftIcon></ArrowCircleLeftIcon>
                <Canvas className='customCanvas'>

                    <Suspense fallback={<Loader></Loader>}>
                        <Scene />
                        <ambientLight intensity={1} />
                        <directionalLight color="blue" position={[0, 10, 5]} />
                    </Suspense>
                </Canvas>
                <ArrowCircleRightIcon></ArrowCircleRightIcon>
            </div>
            <div className='profilFooter profilCarousel'>
                <div className="inputFooter">
                    <span className="gamingFont">STUFF :</span>
                    <Select
                        labelId="simple-select-label"
                        className="gamingFont simple-select "
                        value={selectSkill}
                        onChange={(e) => { setSelectSkill(e.target.value) }}
                        label="Age"
                        size='small'
                    >
                        <MenuItem value={'Languages de programation'}>Languages de programation</MenuItem>
                        <MenuItem value={'Outils & Logiciels'}>Outils & Logiciels</MenuItem>
                        <MenuItem value={'Domaine de predilection'}>Domaine de predilection</MenuItem>
                    </Select>
                </div>
                {selectSkill == 'Languages de programation' && <Carousel
                    swipeable={false}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="profilCarousel carouselAjout"
                    renderButtonGroupOutside={true}
                >
                    <div className='carouselItemCustom'> <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Angular_Logo_SVG.svg/2560px-Angular_Logo_SVG.svg.png'} alt="Angular" /></div>
                    <div className='carouselItemCustom'> <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/2560px-Arduino_Logo.svg.png'} alt="Arduino" /></div>
                    <div className='carouselItemCustom'><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png'} alt="Node" /></div>
                    <div className='carouselItemCustom'><img src={logoPHP} alt="PHP" /></div>
                    <div className='carouselItemCustom'><img src={logoPython} alt="Python" /></div>
                    <div className='carouselItemCustom'><img src={'https://cdn.iconscout.com/icon/free/png-256/free-react-4-1175110.png?f=webp'} alt="React" /></div>
                    <div className='carouselItemCustom'><img src={logoJava} alt="Java" /></div>
                    <div className='carouselItemCustom'><img src={logoNest} alt="NestJs" /></div>
                    <div className='carouselItemCustom'><img src={'https://datajungle.fr/wp-content/uploads/2017/03/Logo-SQL.png'} alt="Sql" /></div>
                    <div className='carouselItemCustom'><img src={'https://cdn.icon-icons.com/icons2/2415/PNG/512/django_line_logo_icon_146560.png'} alt="django" /></div>

                    {/* <div className='carouselItemCustom'><img src={logo} alt="" /></div> */}
                </Carousel>}
                {selectSkill == 'Outils & Logiciels' && <Carousel
                    swipeable={false}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="profilCarousel carouselAjout"
                    renderButtonGroupOutside={true}
                >
                    <div className='carouselItemCustom'> <img src={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png'} alt="VsCode" /></div>
                    <div className='carouselItemCustom'> <img src={'https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png'} alt="GitHub" /></div>
                    <div className='carouselItemCustom'><img src={'https://static-00.iconduck.com/assets.00/gitlab-plain-wordmark-icon-256x255-fmoe8hgb.png'} alt="gitlab" /></div>
                    <div className='carouselItemCustom'><img src={'https://cdn.iconscout.com/icon/free/png-256/free-docker-226091.png'} alt="docker" /></div>
                    <div className='carouselItemCustom'><img src={'https://logos-marques.com/wp-content/uploads/2022/07/Kubernetes-Logo.png'} alt="Kubernetes" /></div>
                    <div className='carouselItemCustom'><img src={'https://upload.wikimedia.org/wikipedia/commons/0/05/Ansible_Logo.png'} alt="Ansible" /></div>
                    <div className='carouselItemCustom'><img src={'https://pngimg.com/d/linux_PNG9.png'} alt="linux" /></div>
                    <div className='carouselItemCustom'><img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntj4W0UDOBt-9gn32O0h6l-zrC1E4gU4sSBEjCxlnbg&s'} alt="PostMan" /></div>

                    <div className='carouselItemCustom'><img src={logoUnity} alt="Unity" /></div>
                    <div className='carouselItemCustom'><img src={logoUnreal} alt="Unreal Engine" /></div>
                    <div className='carouselItemCustom'><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Adobe_Logo_Standard.svg/1200px-Adobe_Logo_Standard.svg.png'} alt="adobe" /></div>
                </Carousel>}
                {selectSkill == 'Domaine de predilection' && <Carousel
                    swipeable={false}
                    draggable={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="profilCarousel carouselAjout"
                    renderButtonGroupOutside={true}
                >
                    <div className='carouselItemCustom'> <img src={'https://cdn.pixabay.com/photo/2023/05/29/11/14/artificial-intelligence-8025738_1280.png'} alt="IA" /></div>
                    <div className='carouselItemCustom'> <img src={'https://cdn-icons-png.flaticon.com/512/7979/7979074.png'} alt="Domotique" /></div>
                    <div className='carouselItemCustom'><img src={'https://e7.pngegg.com/pngimages/337/410/png-clipart-augmented-reality-virtual-reality-headset-the-vr-ar-association-oculus-rift-ethnographic-design-blue-angle.png'} alt="AR/VR" /></div>

                    {/* <div className='carouselItemCustom'><img src={logo} alt="" /></div> */}
                </Carousel>}
            </div>
        </div>
    );
}

export default ProfilContent;