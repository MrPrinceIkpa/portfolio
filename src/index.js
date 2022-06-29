import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Nav from './components/Navigation/Nav';
import Hero from './components/HeroSection/Hero';
import Level from './components/LevelSection/Level';
import Tools from './components/ToolsSection/Tools';
import Me from './components/MeSection/Me';
import Blue from './components/BlueSection/Blue';
import Contact from './components/ContactSection/Contact';
import Footer from './components/Footer/Footer';

class Portfolio extends React.Component {
  constructor () {
    super();
  }
  componentDidMount() {
    var entireAnimate = document.getElementsByClassName("quickAnimScroll");
    var fadeAnimate = Object.values(entireAnimate).map(function (el) {
      if (el.classList.contains("fade")) {
        return el
      }
      else {
        return null
      }
    })
    Object.values(fadeAnimate).forEach(function (el) {
      el.style.opacity = 0;
    })
    document.addEventListener("scroll", function() {
      fadeAnimate.forEach(function (el, key) {
        var controller;
        var specificController = controller + key
        specificController = setInterval(function() {
            var spartialProps = el.getBoundingClientRect();
            if(spartialProps.top < document.documentElement.clientHeight && spartialProps.bottom < (1.4 * document.documentElement.clientHeight)) {
              //inview
            
              el.style.animationName = "quickAnimFade";
              var duration = el.style.animationDuration = "1.3s";
              el.style.animationDelay = "1s";

              setTimeout(function() {
                el.style.opacity = "1";
                clearInterval(specificController)
              }, parseInt(duration) * 1000)
            }
          })
        }, 2000)
    }, {once: true})
  }
  render() {
    var jobList = [
    {
      jobTitle : "Frontend Developer",
      jobRoles : ["Building Client Side solutions as required", "Maintenance and adjustment of functionality in oder to adapt to market need", "Interacting with UI/UX desiger and Projet Manager in order to understand the required functionality overall"],
      org: "Scalefico"
    },
    {
      jobTitle : "Frontend Developer",
      jobRoles : ["Building the web client-side product to meet team's need", "Interaction with UI/UX designer to understand the feel and functionality overall"],
      org: "Monvicea"
    }
    ]

    var projectList = [
      {
        imgurl : process.env.PUBLIC_URL + "/img/logoArt.png",
        text : "Digital Art 4 Climate"
      }
    ]
    var Hello = "I'm Amadi-ikpa Obinichi Prince";
    var me1 = `Hello once more! I am Amadi-ikpa Obinichi Prince, a fullstack developer
    and UI/UX designer`;
    var me2 = `I enjoy building web products that help humanity in one way or the other.
    This has been my major drive to constantly and consistently improve my skills.`
    var me3 = `I hope to build one of the greatest products in human history someday`;
    var MeEpistle = [me1, me2, me3];
    
    /*  window.addEventListener("resize", function() {
        var newDeviceType = this.getDeviceType();
        this.setState({deviceType: newDeviceType});
        console.log("..Changing State");
        console.log("State Changed!")
        console.log(`newDevice = ${this.state.deviceType}`)
    }.bind(this)) */ 
    
    return (
      <React.Fragment>
        <Nav pages={{"Tools": "toolSection", "About Me": "meSectionContainer", "Experience": "experienceSection", "Contact Me": "contactSection", "Resume": `${process.env.PUBLIC_URL}/docs/obinichi.pdf`}} />
        <Hero headGreet="Hello!" headText={Hello} subText="A Fullstack Developer and UI/UX Designer" buttonLabel="Contact Me" buttonIconUrl={process.env.PUBLIC_URL + "img/bird.png"} />
        <Level skills={["Development", "UI/UX"]} />
        <Tools text="Here are some tools I use to build web products" imgUrl={process.env.PUBLIC_URL + "/img/tools.png"} techs={["JavaScript", "css", "html", "Redux", "php", "React", "mysql"]}/>
        <Me text={MeEpistle} imageurl={process.env.PUBLIC_URL + "img/pp.png" }/>
        <Blue jobList={jobList} projectList={projectList} />
        <Contact text="I am currently open to a full time remote job and all kinds of collaborations" buttonLabel="Message Me" />
        <Footer />
      </React.Fragment>
      
    )
}

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Portfolio />
);


