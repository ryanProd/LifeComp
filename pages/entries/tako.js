import Image from 'next/image';
import ImageComponent from '../../components/images/imageComponent';
import Toolbar from '../../components/toolbar/toolbar';

export default function takoEntry() {

    

    return (
    <div>
        <h1>Tako</h1>
        <Toolbar/>
        <ImageComponent/>
    </div>
    );
}