import { Fragment } from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from 'react'
import mainPic from '/main.png'
import './MainPage.css'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import  Slider  from '../../components/Slider/Slider';

export default function MainPage () {
      const [formIsActive,setFormActive] = useState (false)
    return (
        <Fragment>
            <Layout>
                 <div className='wraper'>
                      
                      <div className='maintext' >
                          <h1 className='toptext'>My name is Stepan</h1>
                          <h1 className='buttontext'>I am a Dog</h1>
                          <h2 className='text'>Что я могу сделать для тебя ?
              
                          </h2>
                          <ul>
                              <li> охранять тебя от всех напастей</li>
                              <li> защищать от всех врагов</li>
                              <li> лечить от всех болезнй</li>
                              <li> сделать тебя счастливым человеком</li>
              
                          </ul>
                          <Button label="Связаться со мной" onClick={()=> setFormActive(active=>!active)} />
                          <>{formIsActive && <Form/>}</>    
                         
                      </div>
                      <div className='picture'>    
                          <img src={mainPic} className="mainpic" />
                      </div> 
                  </div>
                  <Slider/>
            </Layout>
        </Fragment>
    )
}