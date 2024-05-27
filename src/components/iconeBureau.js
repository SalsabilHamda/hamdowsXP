import { useRef, useState } from 'react';
import Draggable from 'react-draggable'
const IconeBureau = ({ title, icone, onDoubleClickProps, left, top }) => {
    let watingClick = null; // a reference to timeout function
    let lastClick = 0;

    const handleClick = (e) => {
        if (
            lastClick &&
            e.timeStamp - lastClick < 250 &&
            watingClick
        ) {
            lastClick = 0;
            clearTimeout(watingClick);
            onDoubleClickProps()
            watingClick = null;
        } else {
            lastClick = e.timeStamp;
            watingClick = setTimeout(() => {
                watingClick = null;
                console.log("Do the steps to respond single click");
            }, 251);
        }
    }

    return (
        <Draggable handle='p'  >
            <div className='drag-react icone' style={{ cursor: 'pointer' }} onClick={handleClick}  >
                <img src={icone} alt="" style={{ pointerEvents: "none" }} className='imgIconeClass' />
                <p>{title}</p>
            </div>


        </Draggable >
    );
}

export default IconeBureau;