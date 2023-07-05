import Image from 'next/image';
import { useState, useEffect } from "react";

export default function ProfileImage() {
    const initialStyle = {
        position: 'absolute', 
        left: '100px',
        top: '100px'
    }
    const [style, setStyle] = useState(initialStyle);
    const [count, setCount] = useState(0);

    const setCoordinates = (x, y) => {
        return {
            position: 'absolute', 
            left: `${x}px`,
            top: `${y}px`
        }
        
    }

    function handleClick(e) {
        const newStyle = setCoordinates(e.clientX, e.clientY);
        console.log(newStyle);
        setStyle(newStyle);
        setCount(count+1);
    }

    useEffect(() => {
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div style = {style}>
            
            <Image
                src="/images/Luna.jpg"
                height = {144}
                width = {144}
                alt = "Profile Image"
            />
        </div>
    );
}