import Image from 'next/image';
import ImageComponent from '../../components/images/imageComponent';
import Toolbar from '../../components/toolbar/toolbar';
import { createContext, useContext, useState } from 'react';

export default function takoEntry() {

    const [moveElement, setMoveElement] = useState(true);

    return (
    <div>
        <h1>Tako</h1>
        <Toolbar moveElement={moveElement} setMove = {(boolean) => setMoveElement(boolean)}/>
        <ImageComponent/>
    </div>
    );
}