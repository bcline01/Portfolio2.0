import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import Video from '../assets/video.mp4'
import ScrollIndicator from '../components/ScrollIndicator';

const Home: React.FC = () => {
    const [showIndicator, setShowIndicator] = useState(true);  // State to control visibility of scroll indicator

    useEffect(() => {
        // Scroll event listener
        const handleScroll = () => {
            // Get the position of section2
            const section2 = document.getElementById('section2');
            if (section2) {
                const rect = section2.getBoundingClientRect();
                // If section2 is in the viewport (its top is greater than the screen height), hide the indicator
                if (rect.top <= window.innerHeight) {
                    setShowIndicator(false);  // Hide indicator when section2 is visible
                } else {
                    setShowIndicator(true);   // Show indicator when section2 is not yet visible
                }
            }
        };

        window.addEventListener('scroll', handleScroll);  // Attach scroll event listener

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id="section1" className="home-page">
        {/* Video Background */}
        <video autoPlay muted loop className="video-background">
            <source src={Video} type="video/mp4" />
        </video>
        
        <div className="outer-headings">
            <div className="inner-headings">
                <span>
                    Developer <br />
                    Creator <br />
                    Animator <br />
                    Designer <br />
                </span>
            </div>
        </div>
        {showIndicator && <ScrollIndicator />} 
        <div id="section2">
                {/* <Projects /> */}
            </div>
        </div>

    );
};

export default Home;