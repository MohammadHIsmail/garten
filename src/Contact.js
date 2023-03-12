import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <img className='banner full' alt='img' src='./assets/images/Contact/Contact.png'/>
                <div className='line'>
                    <img className='banner' alt='img' src='./assets/images/Contact/Rectangle 40.png'/>
                    <div className='one'>
                        <img alt='img' src='./assets/images/Contact/Asset 30.png'/>
                    </div>
                </div>
                <div className='content para'>
                    <div>
                        <p>Please don’t hesitate to get in touch with our team for any
                        questions you might have regarding the specifics of our
                        space and our plans to bring this exciting new project to
                        Miami.</p>
                        <p>For media requests, partnership openings and other such
                        inquiries, reach out to admin@thegarten.live.</p>
                    </div>
                    <div>
                        <p>If you’re just writing to say hello, send us your thoughts
                        and we’ll get back to you in no time! We’re not sure our
                        curators take requests but we promise to pass on your
                        recs.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;