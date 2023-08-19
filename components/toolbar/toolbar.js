import { useState, useEffect } from "react";

export default function Toolbar(){

    const [moveElement, setMoveElement] = useState(false);
    const [style, setStyle] = useState()

    function moveElementHandleClick() {
        setMoveElement(!moveElement);
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