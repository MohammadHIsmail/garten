import React, {Component} from 'react';

class About extends Component{
    render(){
        const aboutTags=this.props.aboutTags;
        return(
            <div>
                {aboutTags.map((users,i)=>{
                    return(
                        <div key={"tags-"+i}>
                            {aboutTags[i].imgF}
                            <div className='line'>
                                {aboutTags[i].imgS}
                                <div className='one'>
                                    {aboutTags[i].imgT}
                                </div>
                            </div>
                            {aboutTags[i].headerF}
                            <div className='content'>
                                <div className='para'>
                                    {aboutTags[i].paragF}
                                    {aboutTags[i].headerS}
                                    {aboutTags[i].paragS}
                                    {aboutTags[i].headerL}
                                    {aboutTags[i].paragT}
                                    {aboutTags[i].paragL}
                                </div>
                                
                                <div>
                                    {aboutTags[i].imgL}
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
                
        );
    }
}

export default About;