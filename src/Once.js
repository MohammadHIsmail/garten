import React, {Component} from 'react';
import './css/Once.css';

class Once extends Component{
    
    
    render(){
        return(
            <div>
                <div className='line'>
                    <img alt='img' className='banner' src='./assets/images/Home/Once/Rectangle 40.png'/>
                    <div className='one'>  
                     <img alt='img' src='./assets/images/Home/Once/Asset 27.png'/>
                    </div>
                </div>
                
                <p className='para'>The future is being built in front of our eyes. We now spend 70 percent
                more on experiences and events than we did three decades ago
                (Eventbrite). We are seeking unique experiences, in spaces that are
                diverse and reflect multiplicity of uses.</p>
                <div className='grid-container'>
                    <div className='grid-item'>
                        <img alt='img' src='./assets/images/Home/Once/home page 3.png'/>
                        <h3>SANCTUARY</h3>
                        <p>The architectural wonder emerges from a
                        dense jungle. A surrounding belt of green
                        encloses the venue. Guests are immersed in
                        a sanctuary of experience.</p>
                    </div>
                    <div className='grid-item'>
                        <img alt='img' src='./assets/images/Home/Once/home page 4.png'/>
                        <h3>MODULAR</h3>
                        <p>Intersecting different artistic fields in a fully
                        purposed, modular production venue. An
                        iconic center of attraction as seen from the
                        sky. </p>
                    </div>
                    <div className='grid-item'>
                        <img alt='img' src='./assets/images/Home/Once/home page 5.png'/>
                        <h3>GLOWING</h3>
                        <p>The project is a glowing lantern. As a show
                        is set to begin the building’s color seeps
                        into a luscious red. This hurries the crowd
                        and excites those eager to get inside.</p>
                    </div>
                    <div className='grid-item'>
                        <img alt='img' src='./assets/images/Home/Once/home page 6.png'/>
                        <h3>GATHERINGS</h3>
                        <p>Product launches, Live TV broadcasts, Food
                        and Farmer’s markets, fundraisers and gala
                        dinners and an entire month dedicated to
                        Wellness!</p>
                    </div>
                    <div className='grid-item'>
                        <img alt='img' src='./assets/images/Home/Once/home page 7.png'/>
                        <h3>CULTURE</h3>
                        <p>Fashion shows, performing arts, exhibitions
                        and installations, arthouse cinema nights,
                        audiovisual theater, book readings and
                        panels. All you can ask for from a cultural
                        basin such as ours!</p>
                    </div>
                    <div className='grid-item'>
                        <img alt='img' src='./assets/images/Home/Once/home page 8.png'/>
                        <h3>ENTERTAINMENT</h3>
                        <p>Follow the music. Hosting local, national
                        and international acts of varying genres and
                        degrees of reputation. Quality assured. </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Once;