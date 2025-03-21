
import { useEffect, useState } from "react";

export default function useResize () {
    const [width,setWidth] = useState (window.innerWidth);
    useEffect (()=> {
        const handleResize = () => setWidth(window.innerWidth) 
        window.addEventListener("resize",handleResize);
        return() => {
            window.removeEventListener ("resize",handleResize)
        }
    },[])
    return width;
} 