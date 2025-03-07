import { useState } from 'react'
import photo1 from '/photo1.png'
import photo2 from '/photo2.png'
import photo3 from '/photo3.png'
import Slide from './Slide'
import Button from '../Button/Button'

import { v4 as uuid } from 'uuid';
import styles from  './slider.module.css'

export default function Slider () {
    let [index, setIndex] =useState (0);
    let [buttonState] = useState ( {previus: false, next: false});
    const images = [ 
        {src:photo1,key:uuid()},
        {src:photo2,key:uuid()},
        {src:photo3,key:uuid()}
    ];
    return (
        
        <div className={styles['slider-container']}>
            <h1 >Фото счастливых клиентов</h1>
            <div
            style={{transform: `translateX(-${index*100}%)`}}
            className={styles.slider}>
           
            {images.map(({src, key})=>
            <div 
            
            className={styles['slide-container']}key={key}> 
            <Slide image={src} />
            </div>)}
            </div>
            <div className={styles['button-container']}>
            <Button label= '<'disabled={buttonState.previus} onClick={()=> {
                if (buttonState.next) setDisabled(prev=>({...prev,next:false})) 
                setIndex(index=> {
                    const newIndex = index -1;
                    if(newIndex<=0) setDisabled(prev =>({...prev,next:true}))
                    return newIndex;
                })
            }}/>   
            
            
            
            <Button label= '>'disabled={buttonState.next} onClick={()=>{
                 setIndex(index=>{
                    const newIndex = index +1;
                    if(newIndex>=images.length-1) setDisabled(prev =>({...prev,previous:true}))
                    return newIndex
                });
                if (buttonState.previus) setDisabled(prev=>({...prev,previous:true})) 
                }}/>
        
        
        </div>
        </div>
    )
}
