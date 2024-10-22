
import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
import Projects from './Components/Projects/Projects'
import Team from './Components/Team/Team'
import Cookies from './Components/Cookies/Cookies'
import Counter from './Components/Counter/Counter'
import About2 from './Components/About2/About2'
import JoinCommunity from './Components/Joincommunity/Joincommunity'
import Welcomepopup from './Components/Welcomepopup/Welcomepopup'
import BottomRightpopup from './Components/BottomRightpopup/BottomRightpopup'
import Chatboat from './Components/Chatboat/Chatboat'
import Offerser from './Components/Offerser/Offerser'
import Loader from './Components/Loader/Loader'
import About3 from './Components/About3/About3'
import About4 from './Components/About4/About4'
import Services from './Components/Services/Services'
import Flipimage from './Components/Flipimage/Flipimage'
import Flipcont from './Components/Flipcont/Flipcont'
import TextImageSection from './Components/TextImageSection/TextImageSection'
import Moreinfo from './Components/Moreinfo/Moreinfo'
import Construction from './Components/Construction/Construction'





const App = () => {

  const [playState, setPlayState] = useState(false);
  return (


    <div>

      <Navbar />
      <Hero />
      <div className="container">

        <br />
        <br />
        <br />
        <About4 />
        <br />
        <br />
        <br />
        <About3 />

        <br />
        

        <div className="App">
          <Counter />
        </div>
        <br />
        <About setPlayState={setPlayState} />

        <About2 />
        <Moreinfo/>
        <Title subTitle="" title={<span style={{ color: '#2a6265' }}></span>} />
        <Services />
        <br/><br/><br/>
        <Construction />
        <br/><br/><br/>
        <TextImageSection/>
        <br/><br/><br/>
        <Offerser />
         <br/><br/><br/>
        <br/><br/>
        <Title subTitle="" title={<span style={{ color: '#2a6265' }}>ARCHITECTURAL SOLUTIONS</span>} />
        <br/><br/>
        <Flipimage />
        <Flipcont />
        <br /><br /><br/><br/><br/><br/><br/><br/><br/>
        <JoinCommunity />
        <br />
        <br />
        <Title subTitle="" title={<span style={{ color: '#2a6265' }}>GALLERY</span>} />
        <Projects />

        <br />
        <Title subTitle="" title={<span style={{ color: '#2a6265' }}>OUR TEAM</span>} />
        <Team />
        <br /><br /><br /><br /><br />
        <Testimonials />
        <br /><br />
        <Title subTitle="" title={<span style={{ color: '#2a6265' }}>CONTECT US</span>} />
        <Contact />

        <Footer />
      </div>

      <Videoplayer playState={playState} setPlayState={setPlayState} />

      <Cookies />

      <Welcomepopup />

      <BottomRightpopup />

      <Chatboat />
      <Loader />
    </div>
  )
}

export default App
