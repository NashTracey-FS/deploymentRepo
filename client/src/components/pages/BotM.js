import React from 'react'
import iconBlue from '../images/icon blue.png'

function BotM(){
    return(
        <div style={{ height: "90vh" }} class="container">
        <div class="row justify-content-center">
    
        <div class="col-12">
            <h2>Bud of the Month</h2>
            <h3>Mysterio675</h3>
            <img alt="placeholder" src={iconBlue} height="300px" width="300px" />
            <p>
            This month's BOTM is Mysterio675! Check out what they had to say:
            “I’m a creative genius and I’m here to show you another side of gaming that no one ever knew existed. Well, except for me, but now I want to share my creativity with the rest of the world.
             So, whether you’re looking for: gameplay videos, retrospectives, opinion pieces or short stories – I’ve got you covered!”
             You can follow Mysterio675 at <a href='/'>YouTube</a>
            </p>
        </div>
        </div>
        </div>
    )
}

export default BotM;