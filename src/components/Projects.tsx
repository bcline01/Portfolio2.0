
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import BookHub from '../assets/BookHub.png';
import BookShelf from '../assets/bookshelf2.png';
import Candidate from '../assets/candidate2.png';
import Ecommerce from '../assets/Ecommerce.png';
import Google from '../assets/googlesearch2.png';
import Kanban from '../assets/kanban2.png';
import Postgress from '../assets/kanban2.png';
import PP from '../assets/pp2.png';
import Doc from '../assets/spineImg2.png';
import TakeOut from '../assets/TakeoutMENU.png';


  // Options for the Owl Carousel
  const options = {
    items: 1, // Default number of visible items
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    responsive: {
        0: { items: 1 },
        400: { items: 1 },
        600: { items: 1 },
        700: { items: 1 },
        800: { items: 1 },
        1000: { items: 1 }
      }
  };


const Projects: React.FC = () => {



  const projects = [
    { id: 1, image: BookHub, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, image: BookShelf, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, image: Candidate, title: 'Project 3', description: 'Description of Project 3' },
    { id: 4, image: Ecommerce, title: 'Project 4', description: 'Description of Project 4' },
    { id: 5, image: Google, title: 'Project 5', description: 'Description of Project 5' },
    { id: 6, image: Kanban, title: 'Project 6', description: 'Description of Project 6' },
    { id: 7, image: Postgress, title: 'Project 7', description: 'Description of Project 7' },
    { id: 8, image: PP, title: 'Project 8', description: 'Description of Project 8' },
    { id: 9, image: Doc, title: 'Project 9', description: 'Description of Project 9' },
    { id: 10, image: TakeOut, title: 'Project 10', description: 'Description of Project 10' },
  ];

  return (
    <div className="project-container">
      <h2 className="project-heading">My Projects</h2>
      <OwlCarousel className="owl-theme" {...options}>
        {projects.map((project) => (
          <div className="item" key={project.id}>
            <img src={project.image} alt={project.title} className="item-image" />
            <h4 className="item-title">{project.title}</h4>
            <p className="item-description">{project.description}</p>
            </div>
          
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Projects;
