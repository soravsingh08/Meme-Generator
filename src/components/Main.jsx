import React from "react"
import { useState } from "react"

export default function Main(){
   const [meme,setMeme] = React.useState({
      topText : "One does not simple",
      bottomText: "Walk into mordor",
      imageUrl : "http://i.imgflip.com/1bij.jpg"     
   })

   function handleChange(event){
    const {value} = event.currentTarget
    setMeme(prevMeme => ({
        ...prevMeme,
        topText : value
    }))

   
   }

    return(
        <main>
            <div className="form">
                <label> Top Text
                    <input type="text"
                    placeholder="One does not simply"
                    name="topText"
                    onChange={handleChange}
                 />
                </label>

                <label>Bottom Text
                    <input type="text"
                    placeholder="Walk into Mordor"
                    name="bottomText" 

                    onChange={handleChange}
                />
                </label>
                <button>Get a new meme image</button>
            </div>
            
             <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>

        </main>
    )
}