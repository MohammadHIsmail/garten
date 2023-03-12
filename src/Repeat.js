import React, {Component} from 'react';
import './css/Repeat.css'

class Repeat extends Component{
    
    
    render(){
        const imgF=this.props.imgF;
        const imgS=this.props.imgS;
        const header=this.props.header;
        const parag=this.props.parag;
        const imgL=this.props.imgL;
        return(
            <div>
                {imgF}
                {imgS}
                <div className='content'>
                    {header}
                    <div>
                        {parag}
                        {imgL}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Repeat;
