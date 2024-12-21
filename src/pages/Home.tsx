import React from 'react';

const Home: React.FC = () => {
    return (
        <><div id='section1' className='home-page'>
            <h1>Welcome to My Portfolio</h1>
            <p>This is the home page of my portfolio website.</p>
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