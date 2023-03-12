import React, {Component} from 'react';

class Career extends Component{
    render(){
        return(
            <div>
                <img className='banner full' alt='img' src='./assets/images/Career/Careers.png'/>
                <div className='line'>
                    <img className='banner' alt='img' src='./assets/images/Career/Rectangle 40.png'/>
                    <div className='one'>
                        <img alt='img' src='./assets/images/Career/Asset 29.png'/>
                    </div>
                </div>
                <h1>OUR CAREERS PORTAL IS OPEN!</h1>
                <div className='content para'>
                    <div>
                        <p>Look out for a listing of open positions in the near future.
                        Feel free to send us your resumes and/or portfolios of
                        work for future consideration.</p>
                        <p>We look forward to hearing from you.</p>
                        <p>Liebe Grüße</p>
                    </div>                  
                </div>
            </div>
        );
    }
}

export default Career;