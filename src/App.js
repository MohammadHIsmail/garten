import './css/App.css';
import { React } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Career from './Career';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';


function App() {
  
  const homeTags=[
    {
      imgF:<img alt="img" className='full banner' src="./assets/images/Home/The Garten Miami Website 2-02.png"/>,
      imgS:<img alt="img" className='banner' src="./assets/images/Home/Asset15.png"/>,
      header:<h1>GÄRTEN OF PLEASURE</h1>,
      parag:<p>The Gärten is a state of the art curated event space, with an imposing central event space. The surrounding areas are divided into microspaces that offer a variety of experiences and pleasures to enjoy in small intimate groups or in a bottleneck of bodies.</p>,
      imgL:<Link to="/about"><img alt='button' src='./assets/images/Home/Asset 11.png'/></Link>

    },
    {
      imgF:<img alt="img" className='full banner' src="./assets/images/Home/The Garten Miami Website 2-03.png"/>,
      imgS:<img alt="img" className='banner' src="./assets/images/Home/Asset15.png"/>,
      header:<h1>A STATE OF THE ART CURATED EVENT SPACE</h1>,
      parag:'',
      imgL:''

    },
    {
      imgF:<img alt="img" className='full banner' src="./assets/images/Home/Mask Group 3.png"/>,
      imgS:<img alt="img" className='banner' src="./assets/images/Home/Asset15.png"/>,
      header:<h1>SOCIAL ENGINEERS</h1>,
      parag:<p>The project is founded by upstart organisation Social Engineers
      LLC, an innovation driven enterprise introducing cutting edge
      consumer- centric experiences. The company was founded early
      this year by entrepreneur, investor and mentor Peter Rahal and
      live entertainment visionary and nightlife legend Tiger Saliba.</p>,
      imgL:<Link to='/contact'><img alt='button' src='./assets/images/Home/Asset 11.png'/></Link>

    },
    {
      imgF:<img alt="img" className='full banner' src="./assets/images/Home/The Garten Miami Website - HOME page-03.png"/>,
      imgS:<img alt="img" className='banner' src="./assets/images/Home/Asset15.png"/>,
      header:<h1>HIRING SOON!</h1>,
      parag:<p>Send us your resumes and portfolios of work for
      future consideration.</p>,
      imgL:<Link to='/career'><img alt='button' src='./assets/images/Home/Asset 17.png'/></Link>

    }
  ]
  const aboutTags=[
    {
      imgF:<img className='banner full' alt='img' src='./assets/images/About/about us 1.png'/>,
      imgS:<img className='banner' alt='img' src='./assets/images/About/Rectangle 40.png'/>,
      imgT:<img alt='img' src='./assets/images/About/Asset 28.png'/>,
      headerF:<h1>THE GÄRTEN</h1>,
      paragF:<p>The Garten is a state of the art curated event space, with
      an imposing central event space. The surrounding areas
      are divided into micro-spaces that offer a variety of
      experiences and pleasures to enjoy in small intimate
      groups or in a bottleneck of bodies</p>,
      headerS:<h2>At the heart of the venue is the
      mothership- a luminescent
      structure that glows according
      to the mood inside.</h2>,
      paragS:<p>Surrounding the warm glow of her body is a dense forest
      adorned with spaces of encounter: art works, live residencies,
      cafe areas and listening booths. A concept store and some
      chilling areas makeup the remainder of this city sanctuary. </p>,
      headerL:<h2>The program is diverse,
      showcasing from a wide
      spectrum of talent and </h2>,
      paragT:<p>The venue is multipurpose and transforms according to the
      spectacle inside. From high-end, glamorous music and
      entertainment productions to unusual art installations and
      exhibitions, special showcases, fashion shows and culinary and
      wellness experiences.</p>,
      paragL:<p>Miami is home to some of the coolest festivals in the country,
      bringing in people from all over. Our satellite events will offer
      alternative views for local and visiting crowds to dive into</p>,
      imgL:<img alt='img' src='./assets/images/About/about us 2.png'/>
    },
    {
      imgF:<img alt="img" className='full banner' src="./assets/images/About/Mask Group 6.png"/>,
      imgS:<img alt="img" className='banner' src="./assets/images/About/Asset 15.png"/>,
      imgT:'',
      headerF:<h1>YOUR NEW HOME AT
      THE MIAMI DESIGN DISTRICT</h1>,
      paragF:<p>We are thrilled to announce our partnership with the Miami
      Design District, where we will build your next outlet for
      meeting and dissolving in experience. </p>,
      headerS:'',
      paragS:<p>Our partnership with the Miami Design District, a project that
      has done so much for the changing face of Miami, is one we
      are confident you will enjoy. Today, with over 100 flagship
      stores, some of the best architecture in the country and
      impeccable design showrooms, the Miami Design District
      vision has been realized. </p>,
      headerL:'',
      paragT:<p>Placing a cultural hotspot that resonates and breathes the
      personality of its guests, at the very heart of the Miami Design
      district will align with our city’s exciting future. We look forward
      to meeting you on our floors, to take part in a future driven by
      so much excitement, to champion art and culture in a city as
      historically diverse and expressive as Miami. </p>,
      paragL:'',
      imgL:<img alt='img' src='./assets/images/About/about us 4.png'/>
    },
    {
      imgF:<img alt="img" className='full banner' src="./assets/images/About/about us 5.png"/>,
      imgS:<img alt="img" className='banner' src="./assets/images/About/Asset 15.png"/>,
      imgT:'',
      headerF:<h1>A PROJECT BY
      SOCIAL ENGINEERS</h1>,
      paragF:<p>The project is founded by upstart organisation Social
      Engineers LLC, an innovation driven enterprise, capitalizing on
      latest market insights by introducing cutting edge consumercentric 
      experiences. The company was founded early this year
      by entrepreneur, investor and mentor Peter Rahal and live
      entertainment visionary and nightlife legend Tiger Saliba. </p>,
      headerS:'',
      paragS:<p>In its founding ethos, the company plans on disrupting the
      status quo of live entertainment and cementing a new legacy
      for cultural experiences in the country.</p>,
      headerL:'',
      paragT:'',
      paragL:'',
      imgL:<img alt='img' src='./assets/images/About/about us 4.png'/>
    }
  ]
  
  return (
    <div>
    
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={() => <Home homeTags={homeTags}/>}/>
        <Route path='/about' component={() => <About aboutTags={aboutTags}/>}/>
        <Route path='/career' component={Career}/>
        <Route path='/contact' component={Contact}/>
        {/* {compTags.map((i)=>{
          return(
            <div key={"compTags-"+i}>
              <Repeat imgF={compTags[i].imgF} imgS={compTags[i].imgS} header={compTags[i].header} parag={compTags[i].parag} imgL={compTags[i].imgL}/>
            </div>
          );
        })} */}
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
