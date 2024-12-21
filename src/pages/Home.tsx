import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
    return (
        <><div id='section1' className='home-page'>
            <div className='outer-headings'>
                <div className='inner-headings'>
                <span>
              Full-Stack Developer <br />
              Creator <br />
              Animator <br />
              Designer <br />
            </span>
          </div>
      </div>
        </div>
            <section id="section2">
                {/* <AboutMe /> */}
            </section>
            <section id="section3">
                {/* <Projects /> */}
            </section>
            <section id="section4">
                {/* <ContactMe /> */}
            </section>
            <section id="section5">
                {/* <Resume /> */}
            </section>
            <section id="section6">
                {/* <Footer /> */}
            </section>
        </>

    );
};

export default Home;