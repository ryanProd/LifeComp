import { createContext, useContext, useState } from 'react';

export default function Toolbar({
    moveElement,
    setMove
}) {

    

    function moveElementHandleClick() {
        setMove(!moveElement);
    }

    function handleButtonColor(moveElement) {
        if (moveElement){
            return "#4CAF50";
        }
        else {
            return "#FF0000"
        }
    }

    return (
        <div>
            <button id= 'moveElementButton' onClick={moveElementHandleClick}>
                Move Element
            </button>
            <style jsx>{`
            button {
                background-color: ${handleButtonColor(moveElement)}
            }
            `}</style>
        </div>
    );

}