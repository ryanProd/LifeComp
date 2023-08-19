import Image from 'next/image';
import { useState } from "react";

export default function ImageComponent(){
    return (
        <div>
            <Image
                src="/images/Luna.jpg"
                height = {144}
                width = {144}
                alt = "Profile Image"
            />
        </div>
    )
}