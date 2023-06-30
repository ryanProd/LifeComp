//index.html
import { useState } from 'react';

function Header({title}) {
    return (<h1>{`🚀 ${title}`}</h1>);
}

export default function HomePage() {
    const [likes, setLikes] = useState(0);

    const names = ['Winton Overwatch', 'Gengo', 'Peter Griffin']

    function handleClick(){
        setLikes(likes + 1);
    }

    return (
        <div>
            <Header title="Custom Title"/>
            <ul>
                {names.map((name) => (
                    <li>{`Character Name: ${name}`}</li>
                    ))}
            </ul>
            <h1>{`Number of Likes: ${likes}`}</h1>
            <button onClick={handleClick}>Like({likes})</button>
        </div>
    );
}
