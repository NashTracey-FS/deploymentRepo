
import React from 'react'
import iconBlue from '../images/icon blue.png'

function Latest(){
    return(
        <div>
         <h2>Latest</h2>
         <p>Check out the latest videos from <b>DeadRhose</b></p>
         <b>YouTube</b>
          <section>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fQ-AcPGWI4k?start=5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </section>  
         <b>Twitch</b>
         <section>
         <iframe src="https://player.twitch.tv/?video=1574320665&parent=127.0.0.1/latest" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
         </section>
           

        </div>
       
    )
}

export default Latest;